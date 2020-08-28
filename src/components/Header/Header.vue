<style src="./Header.scss" scoped lang="scss"></style>
<script src="./Header.js"></script>

<template>
  <div class="sc-header" :style="{background: colors.header.bg, color: colors.header.text}">
    <slot>
      <div
        v-if="isInfo"
        class="sc-header--back"
      >
        <BackIcon
          @click="onClickBack"
        />
      </div>
      <img v-if="imageUrl && !isInfo" class="sc-header--img" :src="imageUrl" alt="" />
      <div class="sc-header--title">{{ title }}</div>
      <div class="sc-actions">
        <button
          class="sc-header--more"
          @click="toggleAction"
        >
        </button>
        <Actions
          v-if="actions && actionOpen"
          class="sc-actions--list"
          :actions="actions"
          @action="toggleAction"
        />
      </div>
    </slot>
  </div>
</template>
