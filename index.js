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

Component.prototype.init =
Component.prototype.step =
Component.prototype.draw =
Component.prototype.stop = function () {}

Component.prototype._name = 'unnamed'
