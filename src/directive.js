import Vue from 'vue'
Vue.directive('has-auth', {
  bind: (el, binding) => {
    if (!Vue.prototype.$_has(binding.value)) {
      el.parentNode.removeChild(el)
    }
  }
})
