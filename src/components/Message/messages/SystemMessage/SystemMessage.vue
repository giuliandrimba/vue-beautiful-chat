<style src="./SystemMessage.scss" scoped lang="scss"></style>
<script src="./SystemMessage.js"></script>

<template>
  <div class="sc-message--system" :style="messageColors">
    <slot :message="data">
      {{ data.text }}
      <p v-if="data.meta" class="sc-message--meta" :style="{color: messageColors.color}">
        {{ data.meta }}
      </p>
    </slot>
  </div>
</template>
