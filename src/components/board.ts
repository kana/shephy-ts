import Vue from 'vue'
import template from './board.html?style=./board.css'

interface IComponent extends Vue {
  field: number[]
}

const component: Vue.ComponentOptions<IComponent> = template({
  data () {
    return {
      field: [1, 3, 300, 10]
    }
  }
})

export default component
