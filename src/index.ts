import Root from 'Root'
import Vue from 'vue'

const vue = new Vue({
  components: {
    Root
  },
  template: '<Root/>'
})
vue.$mount(document.getElementById('app')!)
