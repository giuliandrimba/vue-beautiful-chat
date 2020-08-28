<style src="./Launcher.scss" scoped lang="scss"></style>
<script src="./Launcher.js"></script>

<template>
  <div>
    <div
      v-if="showLauncher"
      class="sc-launcher"
      :class="{opened: isOpen}"
      :style="{backgroundColor: colors.launcher.bg}"
      @click.prevent="isOpen ? close() : openAndFocus()"
    >
      <div v-if="newMessagesCount > 0 && !isOpen" class="sc-new-messsages-count">
        {{ newMessagesCount }}
      </div>
      <img v-if="isOpen" class="sc-closed-icon" :src="icons.close.img" :alt="icons.close.name" />
      <img v-else class="sc-open-icon" :src="icons.open.img" :alt="icons.open.name" />
    </div>
    <ChatWindow
      :show-launcher="showLauncher"
      :show-close-button="showCloseButton"
      :message-list="messageList"
      :on-user-input-submit="onMessageWasSent"
      :participants="participants"
      :title="chatWindowTitle"
      :title-image-url="titleImageUrl"
      :is-open="isOpen"
      :on-close="close"
      :show-emoji="showEmoji"
      :show-file="showFile"
      :show-edition="showEdition"
      :show-deletion="showDeletion"
      :show-header="showHeader"
      :placeholder="placeholder"
      :show-typing-indicator="showTypingIndicator"
      :colors="colors"
      :always-scroll-to-bottom="alwaysScrollToBottom"
      :message-styling="messageStyling"
      :disable-user-list-toggle="disableUserListToggle"
      @scrollToTop="$emit('scrollToTop')"
      @onType="$emit('onType')"
      @edit="$emit('edit', $event)"
      @remove="$emit('remove', $event)"
    >
      <template v-slot:header>
        <slot name="header"> </slot>
      </template>
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
    </ChatWindow>
  </div>
</template>
