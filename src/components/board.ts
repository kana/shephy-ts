import Board from 'game/board'
import Vue from 'vue'

interface IComponent extends Vue {
  board: Board
}

const component: Vue.ComponentOptions<IComponent> = {
  data () {
    return {
      board: new Board()
    }
  }
}

export default component
