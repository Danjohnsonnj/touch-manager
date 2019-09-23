import TouchManager from './touch-class'

const touchRegion = document.getElementById('TouchRegion')
window.touchManager = new TouchManager(touchRegion)

// window.touchManager.on('tap:start', addDot)
// window.touchManager.on('tap:end', removeDot)
window.touchManager.on('multitap:start', function(ts, remaining) {
  ts.forEach((t) => {
    addDot.call(this, t)
  })
})
window.touchManager.on('multitap:end', function(ts, remaining) {
  console.log(remaining)
  ts.forEach((t) => {
    removeDot.call(this, t, remaining)
  })
})

function addDot(t, remaining) {
  const dot = document.createElement('div')
  dot.classList.add('dot')
  dot.dataset.id = 'dot-' + t.id
  dot.style.left = t.relativePosition.x + 'px'
  dot.style.top = t.relativePosition.y + 'px'
  this.target.appendChild(dot)
}

function removeDot(t, remaining) {
  const tId = t.id
  const dot = this.target.querySelector(`.dot[data-id="dot-${tId}"]`)
  if (dot) { this.target.removeChild(dot) }
}