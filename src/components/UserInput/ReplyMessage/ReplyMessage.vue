<style src="./ReplyMessage.scss" scoped lang="scss"></style>
<script src="./ReplyMessage.js"></script>

<template>
  <div class="sc-suggestions-row" >
    <div class="sc-user-input--button">
      <UserInputButton
        :color="colors.userInput.text"
        tooltip="cancel"
        @click.native.prevent="cancelReply"
      >
        <IconCross />
      </UserInputButton>
    </div>
    <div
      class="sc-suggestions-element"
      :style="{
        backgroundColor: `${colors.replyMessage.bg}`,
        color: `${colors.replyMessage.text}`
      }"
    >
      {{ message.data.text }}
    </div>
  </div>
</template>
