<style src="./FileMessage.scss" scoped lang="scss"></style>
<script src="./FileMessage.js"></script>

<template>
  <div class="sc-message--file" :style="messageColors">
    <div class="sc-message--file-icon">
      <img :src="data.file.url" class="sc-image" />
    </div>
    <div class="sc-message--file-name" :style="messageColors">
      <a :href="data.file.url ? data.file.url : '#'" target="_blank">{{ data.file.name || '' }}</a>
    </div>
    <div class="sc-message--file-text" :style="messageColors">
      {{ data.text }}
      <p v-if="data.meta" class="sc-message--meta" :style="messageColors">
        {{ data.meta }}
      </p>
    </div>
  </div>
</template>
