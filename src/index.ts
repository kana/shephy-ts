import Board from 'components/board'
import Vue from 'vue'

const vue = new Vue({
  components: {
    Board
  },
  render (createElement) {
    return createElement('Board')
  }
})
vue.$mount(document.getElementById('app')!)
