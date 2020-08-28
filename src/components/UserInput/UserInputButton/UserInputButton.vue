<style src="./UserInputButton.scss" scoped lang="scss"></style>
<script src="./UserInputButton.js"></script>

<template>
  <button class="sc-user-input--button-icon-wrapper">
    <IconBase :color="color" width="20" height="20" :icon-name="tooltip">
      <slot />
    </IconBase>
  </button>
</template>
