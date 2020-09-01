import ChatWindow from '../ChatWindow/ChatWindow.vue'

import CloseIcon from '../../assets/close-icon.png'
import OpenIcon from '../../assets/logo-no-bg.svg'

export default {
  components: {
    ChatWindow
  },
  props: {
    icons: {
      type: Object,
      default: function () {
        return {
          open: {
            img: OpenIcon,
            name: 'default'
          },
          close: {
            img: CloseIcon,
            name: 'default'
          }
        }
      }
    },
    showEmoji: {
      type: Boolean,
      default: false
    },
    showEdition: {
      type: Boolean,
      default: false
    },
    showDeletion: {
      type: Boolean,
      default: false
    },
    open: {
      type: Function,
      required: true
    },
    close: {
      type: Function,
      required: true
    },
    showFile: {
      type: Boolean,
      default: false
    },
    showLauncher: {
      type: Boolean,
      default: true
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    participants: {
      type: Array,
      required: true
    },
    sender: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      default: () => ''
    },
    titleImageUrl: {
      type: String,
      default: () => ''
    },
    onMessageWasSent: {
      type: Function,
      required: true
    },
    messageList: {
      type: Array,
      default: () => []
    },
    newMessagesCount: {
      type: Number,
      default: () => 0
    },
    placeholder: {
      type: String,
      default: 'Write a message...'
    },
    showTypingIndicator: {
      type: String,
      default: () => ''
    },
    colors: {
      type: Object,
      validator: (c) =>
        'header' in c &&
        'bg' in c.header &&
        'text' in c.header &&
        'launcher' in c &&
        'bg' in c.launcher &&
        'messageList' in c &&
        'bg' in c.messageList &&
        'sentMessage' in c &&
        'bg' in c.sentMessage &&
        'text' in c.sentMessage &&
        'receivedMessage' in c &&
        'bg' in c.receivedMessage &&
        'text' in c.receivedMessage &&
        'userInput' in c &&
        'bg' in c.userInput &&
        'text' in c.userInput,
      default: function () {
        return {
          header: {
            bg: '#ffffff',
            text: '#0a0a0a'
          },
          launcher: {
            bg: '#4e8cff'
          },
          messageList: {
            bg: '#ffffff'
          },
          sentMessage: {
            bg: '#f4f7f9',
            text: '#282828'
          },
          replyMessage: {
            bg: '#ffffff',
            text: '#888888'
          },
          receivedMessage: {
            bg: '#f4f7f9',
            text: '#282828'
          },
          userInput: {
            bg: '#f4f7f9',
            text: '#565867'
          }
        }
      }
    },
    alwaysScrollToBottom: {
      type: Boolean,
      default: () => false
    },
    messageStyling: {
      type: Boolean,
      default: () => false
    },
  },
  computed: {
    chatWindowTitle() {
      if (this.title !== '') {
        return this.title
      }
      if (this.participants.length === 0) {
        return 'You'
      } else if (this.participants.length > 1) {
        return 'You, ' + this.participants[0].name + ' & others'
      } else {
        return 'You & ' + this.participants[0].name
      }
    }
  },
  methods: {
    openAndFocus() {
      this.open()
      this.$root.$emit('focusUserInput')
    }
  }
}
