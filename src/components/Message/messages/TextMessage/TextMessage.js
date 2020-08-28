import IconBase from '../../../IconBase/IconBase.vue'
import IconEdit from '../../../IconBase/icons/IconEdit.vue'
import IconCross from '../../../IconBase/icons/IconCross.vue'
import IconReply from '../../../IconBase/icons/IconReply.vue'
import escapeGoat from 'escape-goat'
import Autolinker from 'autolinker'
import store from '../../../../store/'
const fmt = require('msgdown')

export default {
  components: {
    IconBase,
    IconCross,
    IconEdit,
    IconReply
  },
  props: {
    message: {
      type: Object,
      required: true
    },
    messageColors: {
      type: Object,
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
      store
    }
  },
  computed: {
    messageText() {
      const escaped = escapeGoat.escape(this.message.data.text)

      return Autolinker.link(this.messageStyling ? fmt(escaped) : escaped, {
        className: 'chatLink',
        truncate: { length: 50, location: 'smart' }
      })
    },
    me() {
      return this.message.author === 'me'
    },
    isEditing() {
      return (store.editMessage && store.editMessage.id) == this.message.id
    }
  },
  methods: {
    edit() {
      this.store.editMessage = this.message
    },
    reply() {
      this.store.replyMessage = this.message
    }
  }
}
