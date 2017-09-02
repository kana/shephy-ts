import Counter from 'components/counter'
import Vue from 'vue'

const vue = new Vue({
  components: {
    Counter
  },
  render (createElement) {
    return createElement('Counter')
  }
})
vue.$mount(document.getElementById('app')!)
