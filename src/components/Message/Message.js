import TextMessage from './messages/TextMessage/TextMessage.vue'
import FileMessage from './messages/FileMessage/FileMessage.vue'
import EmojiMessage from './messages/EmojiMessage/EmojiMessage.vue'
import TypingMessage from './messages/TypingMessage/TypingMessage.vue'
import SystemMessage from './messages/SystemMessage/SystemMessage.vue'
import ReplyMessage from './messages/ReplyMessage/ReplyMessage.vue'
import chatIcon from '../../assets/chat-icon.svg'
import store from '../../store/'

export default {
  components: {
    TextMessage,
    FileMessage,
    EmojiMessage,
    TypingMessage,
    SystemMessage,
    ReplyMessage
  },
  props: {
    message: {
      type: Object,
      required: true
    },
    colors: {
      type: Object,
      required: true
    },
    messageStyling: {
      type: Boolean,
      required: true
    },
    user: {
      type: Object,
      required: true
    },
    showEdition: {
      type: Boolean,
      required: true
    },
    showDeletion: {
      type: Boolean,
      required: true
    },
    reply: {
      type: Object,
      required: false
    }
  },
  computed: {
    authorName() {
      return this.user && this.user.name
    },
    chatImageUrl() {
      return (this.user && this.user.imageUrl) || chatIcon
    },
    messageColors() {
      return this.message.author === store.sender.id ? this.sentColorsStyle : this.receivedColorsStyle
    },
    receivedColorsStyle() {
      return {
        color: this.colors.receivedMessage.text,
        backgroundColor: this.colors.receivedMessage.bg
      }
    },
    sentColorsStyle() {
      return {
        color: this.colors.sentMessage.text,
        backgroundColor: this.colors.sentMessage.bg
      }
    },
    senderId() {
      return store.sender.id;
    }
  }
}
