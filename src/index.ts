import Root from 'Root'
import Vue from 'vue'

const vue = new Vue({
  components: {
    Root
  },
  render (createElement) {
    return createElement('Root')
  }
})
vue.$mount(document.getElementById('app')!)
