<template>
  <div class="sc-suggestions-row" >
    <div
      class="sc-suggestions-element"
    >
      {{ message.data.text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
    },
  },
}
</script>

<style>
.sc-suggestions-row {
  text-align: center;
  background: inherit;
}

.sc-suggestions-element {
  margin: 3px;
  padding: 5px 10px 5px 10px;
  border: 1px solid;
  border-radius: 15px;
  font-size: 14px;
  background: inherit;
  cursor: pointer;
}
</style>
