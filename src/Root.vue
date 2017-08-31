<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="bump">Bump!</button>
  </div>
</template>

<script>
import Vue from 'vue'

interface Component extends Vue {
  count: number
  bump (): void
}

const component: Vue.ComponentOptions<Component> = {
  data: function () {
    return {
      count: 0
    }
  },
  methods: {
    bump: function () {
      this.count++
    }
  }
}

export default component
</script>
vim: filetype=html
