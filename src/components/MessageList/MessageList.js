import Message from '../Message/Message.vue'
import chatIcon from '../../assets/chat-icon.svg'

export default {
  components: {
    Message
  },
  props: {
    participants: {
      type: Array,
      required: true
    },
    messages: {
      type: Array,
      required: true
    },
    showTypingIndicator: {
      type: String,
      required: true
    },
    colors: {
      type: Object,
      required: true
    },
    alwaysScrollToBottom: {
      type: Boolean,
      required: true
    },
    messageStyling: {
      type: Boolean,
      required: true
    },
    showEdition: {
      type: Boolean,
      required: true
    },
    showDeletion: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    defaultChatIcon() {
      return chatIcon
    }
  },
  mounted() {
    this.$nextTick(this._scrollDown())
  },
  updated() {
    if (this.shouldScrollToBottom()) this.$nextTick(this._scrollDown())
  },
  methods: {
    _scrollDown() {
      this.$refs.scrollList.scrollTop = this.$refs.scrollList.scrollHeight
    },
    handleScroll(e) {
      if (e.target.scrollTop === 0) {
        this.$emit('scrollToTop')
      }
    },
    shouldScrollToBottom() {
      const scrollTop = this.$refs.scrollList.scrollTop
      const scrollable = scrollTop > this.$refs.scrollList.scrollHeight - 600
      return this.alwaysScrollToBottom || scrollable
    },
    replyMessage(id) {
      return this.messages.find(m => m.id === id);
    },
    profile(author) {
      const profile = this.participants.find((profile) => profile.id === author)

      // A profile may not be found for system messages or messages by 'me'
      return profile || { imageUrl: '', name: '' }
    }
  }
}
