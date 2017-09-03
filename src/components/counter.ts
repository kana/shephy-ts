import Vue from 'vue'
import template from './counter.html?style=./counter.css'

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
