# kindred-component

[![](https://img.shields.io/badge/stability-experimental-ffa100.svg?style=flat-square)](https://nodejs.org/api/documentation.html#documentation_stability_index)
[![](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)
[![](https://img.shields.io/npm/v/kindred-component.svg?style=flat-square)](https://npmjs.com/package/kindred-component)

Base class upon which to build Kindred components. Most of the functionality for consuming these components can be found in [kindred-node](https://github.com/kindredjs/kindred-node/).

## Usage

`kindred-component` is designed to be used with ES6 classes. You may need to use a transpiler such as Babel to support older browsers.

``` javascript
const Component = require('kindred-component')

// Each component must have a unique string id, e.g. here it's "custom":
class CustomComponent extends Component('custom') {
  init () {
    // called when the component is first created
  }

  step () {
    // called once per frame, intended for logic such
    // as physics simulation and event handling
  }

  draw () {
    // called once per frame, intended for anything
    // related to rendering.
  }

  stop () {
    // called when the component is no longer being used.
    // use this to clean up after yourself.
  }
}

module.exports = CustomComponent
```

## License

MIT. See [LICENSE.md](LICENSE.md) for details.
