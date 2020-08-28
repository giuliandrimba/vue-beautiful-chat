<style src="./MessageList.scss" scoped lang="scss"></style>
<script src="./MessageList.js"></script>

<template>
  <div
    ref="scrollList"
    class="sc-message-list"
    :style="{backgroundColor: colors.messageList.bg}"
    @scroll="handleScroll"
  >
    <Message
      v-for="(message, idx) in messages"
      :key="idx"
      :message="message"
      :user="profile(message.author)"
      :colors="colors"
      :message-styling="messageStyling"
      :show-edition="showEdition"
      :show-deletion="showDeletion"
      :reply="replyMessage(message.reply)"
      @remove="$emit('remove', message)"
    >
      <template v-slot:user-avatar="scopedProps">
        <slot name="user-avatar" :user="scopedProps.user" :message="scopedProps.message"> </slot>
      </template>
      <template v-slot:text-message-body="scopedProps">
        <slot
          name="text-message-body"
          :message="scopedProps.message"
          :messageText="scopedProps.messageText"
          :messageColors="scopedProps.messageColors"
          :me="scopedProps.me"
        >
        </slot>
      </template>
      <template v-slot:system-message-body="scopedProps">
        <slot name="system-message-body" :message="scopedProps.message"> </slot>
      </template>
      <template v-slot:text-message-toolbox="scopedProps">
        <slot name="text-message-toolbox" :message="scopedProps.message" :me="scopedProps.me">
        </slot>
      </template>
    </Message>
    <Message
      v-show="showTypingIndicator !== ''"
      :message="{author: showTypingIndicator, type: 'typing'}"
      :user="profile(showTypingIndicator)"
      :colors="colors"
      :message-styling="messageStyling"
      :show-edition="showEdition"
      :show-deletion="showDeletion"
    />
  </div>
</template>
