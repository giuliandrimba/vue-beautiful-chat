import CloseIcon from '../../assets/close-icon-big.png'

export default {
  props: {
    icons: {
      type: Object,
      default: function () {
        return {
          close: {
            img: CloseIcon,
            name: 'default'
          }
        }
      }
    },
    imageUrl: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    onClose: {
      type: Function,
      required: false
    },
    colors: {
      type: Object,
      required: true
    },
    disableUserListToggle: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      inUserList: false
    }
  },
  methods: {
    toggleUserList() {
      this.inUserList = !this.inUserList
      this.$emit('userList', this.inUserList)
    }
  }
}
