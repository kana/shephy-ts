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
      this.count++
    }
  }
}
</script>
vim: filetype=html
