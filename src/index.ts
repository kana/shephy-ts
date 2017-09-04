import Board from 'components/board.vue'
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
