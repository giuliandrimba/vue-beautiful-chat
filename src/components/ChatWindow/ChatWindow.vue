<style src="./ChatWindow.scss" scoped lang="scss"></style>
<script src="./ChatWindow.js"></script>

<template>
  <div class="sc-chat-window" :class="{opened: true}">
    <Header
      v-if="showHeader"
      :isInfo="showInfo"
      :title="title"
      :image-url="titleImageUrl"
      :colors="colors"
      :actions="actions"
      @back="onClickBack"
    >
      <template>
        <slot name="header"> </slot>
      </template>
    </Header>
    <Info v-if="showInfo" :colors="colors" :participants="users" />
    <MessageList
      v-if="!showInfo"
      :messages="messages"
      :participants="users"
      :show-typing-indicator="showTypingIndicator"
      :colors="colors"
      :always-scroll-to-bottom="alwaysScrollToBottom"
      :show-edition="showEdition"
      :show-deletion="showDeletion"
      :message-styling="messageStyling"
      @scrollToTop="$emit('scrollToTop')"
      @remove="$emit('remove', $event)"
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
    </MessageList>
    <UserInput
      v-if="!showInfo"
      :show-emoji="showEmoji"
      :on-submit="onUserInputSubmit"
      :suggestions="getSuggestions()"
      :show-file="showFile"
      :placeholder="placeholder"
      :colors="colors"
      @onType="$emit('onType')"
      @edit="$emit('edit', $event)"
      @reply="$emit('reply', $event)"
    />
  </div>
</template>
