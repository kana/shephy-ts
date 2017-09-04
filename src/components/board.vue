<template>
  <div :class="$style.container">
    <dl>
      <dt>Field:</dt>
      <dd>
        <span v-for="sheep in field" :class="$style.sheep">
          {{ sheep }}
        </span>
      </dd>
    </dl>
  </div>
</template>

<style module>
  .container {
    background-color: #eee;
  }

  .sheep {
    display: inline-block;
    border: 1px solid gray;
    background: #f9f9f9;
    color: #000;
    width: 63px;
    height: 88px;
  }

  .sheep + .sheep {
    margin-left: 1em;
  }
</style>

<script>
import component from './board.ts'
export default component
</script>

vim: filetype=html
