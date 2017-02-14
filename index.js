var inherits = require('inherits')

module.exports = nameComponent

function nameComponent (name) {
  inherits(KindredComponent, Component)
  function KindredComponent () {}

  KindredComponent.prototype._name = String(name)
  KindredComponent._name = String(name)

  return KindredComponent
}

function Component () {}

Component.prototype.init = function noop () {}
Component.prototype.preStep = function noop () {}
Component.prototype.step = function noop () {}
Component.prototype.postStep = function noop () {}
Component.prototype.preDraw = function noop () {}
Component.prototype.draw = function noop () {}
Component.prototype.postDraw = function noop () {}
Component.prototype.stop = function noop () {}

Component.prototype._name = 'unnamed'
