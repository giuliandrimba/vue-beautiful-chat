<style src="./Header.scss" scoped lang="scss"></style>
<script src="./Header.js"></script>

<template>
  <div class="sc-header" :style="{background: colors.header.bg, color: colors.header.text}">
    <slot>
      <img v-if="imageUrl" class="sc-header--img" :src="imageUrl" alt="" />
      <div v-if="!disableUserListToggle" class="sc-header--title enabled" @click="toggleUserList">
        {{ title }}
      </div>
      <div v-else class="sc-header--title">{{ title }}</div>
    </slot>
    <div v-if="showCloseButton" class="sc-header--close-button" @click="onClose">
      <img :src="icons.close.img" :alt="icons.close.name" />
    </div>
  </div>
</template>
