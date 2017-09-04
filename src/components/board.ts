import Vue from 'vue'
import template from './board.html?style=./board.css'

interface IComponent extends Vue {
  count: number
  bump (): void
}

const component: Vue.ComponentOptions<IComponent> = template({
  data () {
    return {
      count: 0
    }
  },
  methods: {
    bump () {
      this.count++
    }
  }
})

export default component
