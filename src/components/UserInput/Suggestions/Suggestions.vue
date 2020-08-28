<style src="./Suggestions.scss" scoped lang="scss"></style>
<script src="./Suggestions.js"></script>

<template>
  <div class="sc-suggestions-row" :style="{background: colors.messageList.bg}">
    <button
      v-for="(suggestion, idx) in suggestions"
      :key="idx"
      class="sc-suggestions-element"
      :style="{
        borderColor: colors.sentMessage.bg,
        color: colors.sentMessage.bg
      }"
      @click="$emit('sendSuggestion', suggestion)"
    >
      {{ suggestion }}
    </button>
  </div>
</template>
