import EmojiConvertor from 'emoji-js'
import emojiData from './emojiData'

export default {
  props: {
    onBlur: {
      type: Function,
      required: true
    },
    onEmojiPicked: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      emojiData,
      emojiConvertor: new EmojiConvertor()
    }
  },
  mounted() {
    const elem = this.$refs.domNode
    elem.style.opacity = 0
    window.requestAnimationFrame(() => {
      elem.style.transition = 'opacity 350ms'
      elem.style.opacity = 1
    })
    this.$refs.domNode.focus()
    this.emojiConvertor.init_env()
  },
  methods: {
    emojiClicked(emoji) {
      this.onEmojiPicked(emoji)
      this.$refs.domNode.blur()
    }
  }
}
