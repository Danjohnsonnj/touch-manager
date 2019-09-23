const PUBLIC_EVENTS = {
  'tap:start': {
    callbacks: [],
  },
  'tap:end': {
    callbacks: [],
  },
  'multitap:start': {
    callbacks: [],
  },
  'multitap:end': {
    callbacks: [],
  },
}

class TouchManager {
  constructor(target) {
    // TODO: validate
    this.target = target
    this.touches = {}

    // TODO: update Babel for class properties plugin
    this._handleTouch = this._unboundHandleTouch.bind(this)

    this._bindTarget()
  }

  _bindTarget() {
    this.target.addEventListener('touchstart', this._handleTouch)
    this.target.addEventListener('touchmove', this._handleTouch)
    this.target.addEventListener('touchend', this._handleTouch)
    this.target.addEventListener('touchcancel', this._handleTouch)
  }

  _unboundHandleTouch(evt) {
    const type = evt.type
    const newTouches = Array.from(evt.changedTouches)
    const unchangedTouches = Object.keys(this.touches).filter(t => {
      t = parseInt(t, 10)
      return !newTouches.find(n => n.identifier === t)
    })

    switch (type) {
    case 'touchstart':
      newTouches.forEach(t => {
        this._addTouch(t)

        PUBLIC_EVENTS['tap:start'].callbacks.forEach(cb => {
          cb.call(this, this.touches[t.identifier], Object.keys(this.touches).length)
        })

      })

      if (Object.keys(this.touches).length > 1) {
        PUBLIC_EVENTS['multitap:start'].callbacks.forEach(cb => {
          cb.call(this, Object.values(this.touches), Object.keys(this.touches).length)
        })
      }

      break

    case 'touchmove':
      newTouches.forEach(t => this._updateTouch(t))
      // newTouches.forEach(t => this.moveTouchDot(t.identifier))
      unchangedTouches.forEach(t => this._becalm(t))

      break

    case 'touchend':
      newTouches.forEach(t => {
        PUBLIC_EVENTS['tap:end'].callbacks.forEach(cb => {
          cb.call(this, this.touches[t.identifier], Object.keys(this.touches).length)
        })
      })

      if (Object.keys(this.touches).length > 1) {
        PUBLIC_EVENTS['multitap:end'].callbacks.forEach(cb => {
          cb.call(this, Object.values(this.touches), Object.keys(this.touches).length)
        })
      }

      this._removeTouches(newTouches.map(t => t))

      break

    case 'touchcancel':
      this._removeTouches(Object.keys(this.touches))

      break
    }
  }

  _addTouch(touch) {
    // console.log(touch.radiusX, touch.radiusY)
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

  _updateTouch(touch) {
    const touchReference = this.touches[touch.identifier]
    const { x, y, } = touchReference.relativePosition
    this.touches[touch.identifier].relativePosition = {
      x: touch.clientX,
      y: touch.clientY,
    }
    this.touches[touch.identifier].movement = {
      horizontal: touch.clientX - x,
      vertical: touch.clientY - y,
    }
  }

  _becalm(touchId) {
    const touchReference = this.touches[touchId]
    touchReference.movement = { horizontal: null, vertical: null, }
  }

  _removeTouches(touches) {
    touches.forEach(t => {
      delete this.touches[t.identifier]
    })
  }

  ///////
  on(publicEvent, callback) {
    const evt = Object.keys(PUBLIC_EVENTS).find(e => e === publicEvent)
    if (!evt) {
      return new Error(`${publicEvent} is not an available event.`)
    }

    PUBLIC_EVENTS[publicEvent].callbacks.push(callback)
  }

  //////
  // TODO: expose hooks
  // tap:start, tap:end
  // multitap:start, multitap: end
  // swipe (with number of touches)
  // pinch
  // zoom
  // rotate

  //////
  moveTouchDot(tId) {
    const dot = this.target.querySelector(`.dot[data-id="dot-${tId}"]`)
    const touch = this.touches[tId]
    dot.style.top = parseInt(dot.style.top) + touch.movement.vertical + 'px'
    dot.style.left = parseInt(dot.style.left) + touch.movement.horizontal + 'px'
  }
}

export default TouchManager