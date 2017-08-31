<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="bump">Bump!</button>
  </div>
</template>

<style>
  body {
    background-color: #eee;
  }
</style>

<script>
import Vue from 'vue'

interface IComponent extends Vue {
  count: number
  bump (): void
}

const component: Vue.ComponentOptions<IComponent> = {
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
}

export default component
</script>
vim: filetype=html
