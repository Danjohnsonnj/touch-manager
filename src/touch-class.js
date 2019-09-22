class TouchManager {
  constructor(target) {
    // TODO: validate
    this.target = target
    this.touches = {}

    // TODO: update Babel for class properties plugin
    this.handleTouch = this.unboundHandleTouch.bind(this)

    this.bindTarget()
  }

  bindTarget() {
    this.target.addEventListener('touchstart', this.handleTouch)
    this.target.addEventListener('touchmove', this.handleTouch)
    this.target.addEventListener('touchend', this.handleTouch)
    this.target.addEventListener('touchcancel', this.handleTouch)
  }

  unboundHandleTouch(evt) {
    const type = evt.type
    const newTouches = Array.from(evt.changedTouches)
    const unchangedTouches = Object.keys(this.touches).filter(t => {
      t = parseInt(t, 10)
      return !newTouches.find(n => n.identifier === t)
    })

    switch (type) {
    case 'touchstart':
      console.log('start')

      newTouches.forEach(t => {
        this.addTouch(t)
        this.addTouchDot(this.touches[t.identifier])
      })

      console.log(this.touches)
      break

    case 'touchmove':
      console.log('move')

      newTouches.forEach(t => this.updateTouch(t))
      unchangedTouches.forEach(t => this.becalm(t))

      console.log(this.touches)
      break

    case 'touchend':
      console.log('end')

      this.removeTouches(newTouches.map(t => t.identifier))
      newTouches.forEach(t => this.removeTouchDot(t.identifier))

      console.log(this.touches)
      break

    case 'touchcancel':
      console.log('CANCELLING')

      this.removeTouches(Object.keys(this.touches))

      break
    }

    // console.log(this.touches)
  }

  addTouch(touch) {
    this.touches[touch.identifier] = {
      id: touch.identifier,
      relativePosition: {
        x: touch.clientX,
        y: touch.clientY,
      },
      movement: {
        vertical: null,
        horizontal: null,
      },
    }
  }

  updateTouch(touch) {
    const touchReference = this.touches[touch.identifier]
    const { x, y, } = touchReference.relativePosition
    this.touches[touch.identifier] = {
      relativePosition: {
        x: touch.clientX,
        y: touch.clientY,
      },
      movement: {
        horizontal: touch.clientX - x,
        vertical: touch.clientY - y,
      },
    }
  }

  becalm(touchId) {
    const touchReference = this.touches[touchId]
    touchReference.movement = { horizontal: null, vertical: null, }
  }

  removeTouches(touchIds) {
    touchIds.forEach(id => {
      delete this.touches[id]
    })
  }

  //////
  // TODO: expose hooks
  // tap
  // multitap
  // swipe (with number of touches)
  // pinch
  // zoom
  // rotate

  //////
  addTouchDot(t) {
    const dot = document.createElement('div')
    dot.classList.add('dot')
    dot.dataset.id = 'dot-' + t.id
    dot.style.left = t.relativePosition.x + 'px'
    dot.style.top = t.relativePosition.y + 'px'
    this.target.appendChild(dot)
  }

  removeTouchDot(tId) {
    const dot = this.target.querySelector(`.dot[data-id="dot-${tId}"]`)
    this.target.removeChild(dot)
  }

}

export default TouchManager