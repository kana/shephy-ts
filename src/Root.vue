<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="bump">Bump!</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      count: 0
    }
  },
  methods: {
    bump: function () {
      // TODO: (17,12): error TS2339: Property 'count' does not exist on type '{ bump: () => void; }'.
      this.count++
    }
  }
}
</script>
vim: filetype=html
