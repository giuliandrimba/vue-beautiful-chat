import Header from '../Header/Header.vue'
import MessageList from '../MessageList/MessageList.vue'
import UserInput from '../UserInput/UserInput.vue'
import Info from '../Info/Info.vue'
import store from '../../store/'

export default {
  components: {
    Header,
    MessageList,
    UserInput,
    Info
  },
  props: {
    showEmoji: {
      type: Boolean,
      default: false
    },
    showFile: {
      type: Boolean,
      default: false
    },
    sender: {
      type: Object,
      required: true,
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    participants: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    titleImageUrl: {
      type: String,
      default: ''
    },
    onUserInputSubmit: {
      type: Function,
      required: true
    },
    messageList: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: 'Write a message...'
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
  data() {
    return {
      showInfo: false,
      actions: [
        {
          label: "Info",
          onClick: this.onInfo
        }
      ]
    }
  },
  created() {
    store.sender = this.sender;
  },
  computed: {
    messages() {
      let messages = this.messageList

      return messages
    },
    users() {
      const users = [...this.participants]
      users.push(store.sender);
      return users;
    },
  },
  methods: {
    getSuggestions() {
      return this.messages.length > 0 ? this.messages[this.messages.length - 1].suggestions : []
    },
    onInfo() {
      this.showInfo = true;
    },
    onClickBack() {
      this.showInfo = false;
    }
  }
}
