export default {
  install: function (Vue, options) {
    // 1. add global method or property
    Vue.myGlobalMethod = function () {
      // something logic ...
    }

    // 2. add a global asset
    Vue.directive('demo', function (el, binding) {
      console.log(binding.value.color) // => "white"
      console.log(binding.value.text)  // => "hello!"
    })

    // 3. inject some component options
    Vue.mixin({
      created: function () {
        // something logic ...
      }
    })

    // 4. add an instance method
    /*
    Vue.prototype.$string = (function () {
      return function () {
        this.isPalindrome = function (str) {
          return /[^A-Za-z0–9]/g.test(str)
        }
        this.isLengthEven = function (str) {
          return str.split('').length % 2 === 0
        }
      }
    })()
    */
    Vue.prototype.$string = {}
    Vue.prototype.$string.isPalindrome = function (str) {
      return /[^A-Za-z0–9]/g.test(str)
    }
    Vue.prototype.$string.isLengthEven = function (str) {
      return str.split('').length % 2 === 0
    }
  }
}
