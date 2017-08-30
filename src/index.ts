import Vue, { ComponentOptions } from 'vue'

interface VueApp extends Vue {
  count: number
}

new Vue({
  el: '#app',
  template: '#app-template',
  data: {
    count: 0
  },
  methods: {
    bump: function () {
      this.count++
    }
  }
} as ComponentOptions<VueApp>)
