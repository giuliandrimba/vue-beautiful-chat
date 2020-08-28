<style src="./EmojiPicker.scss" scoped lang="scss"></style>
<script src="./EmojiPicker.js"></script>

<template>
  <div ref="domNode" tabIndex="0" class="sc-emoji-picker" @blur="onBlur">
    <div class="sc-emoji-picker--content">
      <div v-for="category in emojiData" :key="category.name" class="sc-emoji-picker--category">
        <div class="sc-emoji-picker--category-title">{{ category.name }}</div>
        <span
          v-for="emoji in category.emojis"
          :key="emoji"
          class="sc-emoji-picker--emoji"
          @click="emojiClicked(emoji)"
        >
          {{ emoji }}
        </span>
      </div>
    </div>
  </div>
</template>
