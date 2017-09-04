import Vue from 'vue'

interface IComponent extends Vue {
  field: number[]
}

const component: Vue.ComponentOptions<IComponent> = {
  data () {
    return {
      field: [1, 3, 300, 10]
    }
  }
}

export default component
