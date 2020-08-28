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
  text-align: center;
  padding: 17px 20px;
  border-radius: 6px;
  background: #ffffff;
  border: 1px solid #eeeeee;
}
</style>
