<style src="./ChatWindow.scss" scoped lang="scss"></style>
<script src="./ChatWindow.js"></script>

<template>
  <div class="sc-chat-window" :class="{opened: isOpen, closed: !isOpen}">
    <Header
      v-if="showHeader"
      :show-close-button="showCloseButton"
      :title="title"
      :image-url="titleImageUrl"
      :colors="colors"
      :disable-user-list-toggle="disableUserListToggle"
      @userList="handleUserListToggle"
    >
      <template>
        <slot name="header"> </slot>
      </template>
    </Header>
    <UserList v-if="showUserList" :colors="colors" :participants="participants" />
    <MessageList
      v-if="!showUserList"
      :messages="messages"
      :participants="participants"
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
      v-if="!showUserList"
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
