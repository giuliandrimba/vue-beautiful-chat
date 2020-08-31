<style src="./Actions.scss" scoped lang="scss"></style>
<script src="./Actions.js"></script>

<template>
  <div class="sc-actions" v-click-outside="onClickOutside">
    <button
      v-for="(action, i) in actions"
      :key="`action-${i}`"
      @click.prevent="onClick(action)"
      class="sc-actions--action"
    >
      {{ action.label }}
    </button>
  </div>
</template>
