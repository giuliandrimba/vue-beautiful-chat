<style src="./Message.scss" scoped lang="scss"></style>
<script src="./Message.js"></script>

<template>
  <div class="sc-message" :id="message.id">
    <ReplyMessage
      v-if="reply"
      :message="reply"
    />
    <div
      class="sc-message--content"
      :class="{
        sent: message.author === 'me',
        received: message.author !== 'me' && message.type !== 'system',
        system: message.type === 'system'
      }"
    >
      <slot name="user-avatar" :message="message" :user="user">
        <div
          v-if="message.type !== 'system' && authorName && authorName !== 'me'"
          v-tooltip="authorName"
          :title="authorName"
          class="sc-message--avatar"
          :style="{
            backgroundImage: `url(${chatImageUrl})`
          }"
        ></div>
      </slot>

      <TextMessage
        v-if="message.type === 'text'"
        :message="message"
        :message-colors="messageColors"
        :message-styling="messageStyling"
        :show-edition="showEdition"
        :show-deletion="showDeletion"
        @remove="$emit('remove')"
      >
        <template v-slot:default="scopedProps">
          <slot
            name="text-message-body"
            :message="scopedProps.message"
            :messageText="scopedProps.messageText"
            :messageColors="scopedProps.messageColors"
            :me="scopedProps.me"
          >
          </slot>
        </template>
        <template v-slot:text-message-toolbox="scopedProps">
          <slot name="text-message-toolbox" :message="scopedProps.message" :me="scopedProps.me">
          </slot>
        </template>
      </TextMessage>
      <EmojiMessage v-else-if="message.type === 'emoji'" :data="message.data" />
      <FileMessage
        v-else-if="message.type === 'file'"
        :data="message.data"
        :message-colors="messageColors"
      />
      <TypingMessage v-else-if="message.type === 'typing'" :message-colors="messageColors" />
      <SystemMessage
        v-else-if="message.type === 'system'"
        :data="message.data"
        :message-colors="messageColors"
      >
        <slot name="system-message-body" :message="message.data"> </slot>
      </SystemMessage>
    </div>
  </div>
</template>
