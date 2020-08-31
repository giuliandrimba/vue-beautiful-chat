<style src="./TextMessage.scss" scoped lang="scss"></style>
<script src="./TextMessage.js"></script>

<template>
  <div class="sc-message--text" :style="messageColors">
    <template>
      <Actions
        v-if="actionOpen"
        class="sc-message--actions"
        :actions="actions"
        @action="toggleAction"
      >
      </Actions>
      <button
        class="sc-message--more"
        @click="toggleAction"
      >
      </button>
    </template>
    <slot :message="message" :messageText="messageText" :messageColors="messageColors" :me="me">
      <p class="sc-message--text-content" v-html="messageText"></p>
      <p v-if="message.data.meta" class="sc-message--meta" :style="{color: messageColors.color}">
        {{ message.data.meta }}
      </p>
      <p v-if="message.isEdited" class="sc-message--edited">
        <IconBase width="10" icon-name="edited">
          <IconEdit />
        </IconBase>
        edited
      </p>
    </slot>
  </div>
</template>
