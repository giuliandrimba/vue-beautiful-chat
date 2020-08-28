<template>
  <div class="back-icon">
    <button @click="_handleClick" class="sc-user-input--back-icon-wrapper" type="button">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 492 492" style="enable-background:new 0 0 492 492;" xml:space="preserve">
          <path d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124
            c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844
            L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412
            c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008
            c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788
            C492,219.198,479.172,207.418,464.344,207.418z"/>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    _handleClick(e) {
      this.$emit('click');
    }
  }
}
</script>

<style scoped>
.back-icon {
  position: relative;
  width: 25px;
  height: 25px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.sc-user-input--back-icon-wrapper {
  background: none;
  border: none;
  padding: 0px;
  margin: 0px;
  outline: none;
  width: 100%;
  height: 100%;
}

.sc-user-input--back-icon-wrapper:focus {
  outline: none;
}

.sc-user-input--back-icon {
  height: 18px;
  cursor: pointer;
  align-self: center;
}

.sc-user-input--back-icon-wrapper:focus .sc-user-input--back-icon path,
.sc-user-input--back-icon-wrapper:focus .sc-user-input--back-icon circle,
.sc-user-input--back-icon.active path,
.sc-user-input--back-icon.active circle,
.sc-user-input--back-icon:hover path,
.sc-user-input--back-icon:hover circle {
  filter: contrast(15%);
}
</style>
