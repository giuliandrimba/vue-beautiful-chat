import IconBase from '../../../IconBase/IconBase.vue'
import IconEdit from '../../../IconBase/icons/IconEdit.vue'
import IconCross from '../../../IconBase/icons/IconCross.vue'
import IconReply from '../../../IconBase/icons/IconReply.vue'
import escapeGoat from 'escape-goat'
import Autolinker from 'autolinker'
import Actions from '../../../Actions/Actions.vue'
import store from '../../../../store/'
const fmt = require('msgdown')

export default {
  components: {
    IconBase,
    IconCross,
    IconEdit,
    IconReply,
    Actions,
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
      store,
      actionOpen: false,
      actions: [
        {
          label: "Edit",
          onClick: this.edit,
        },
        {
          label: "Delete",
          onClick: this.delete,
        },
        {
          label: "Reply",
          onClick: this.reply,
        }
      ]
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
    toggleAction() {
      this.actionOpen = !this.actionOpen;
    },
    delete() {
      this.$emit('remove');
    },
    edit() {
      this.store.editMessage = this.message
    },
    reply() {
      this.store.replyMessage = this.message
    }
  }
}
