import UserInputButton from '../UserInputButton/UserInputButton.vue'
import IconCross from '../../IconBase/icons/IconCross.vue'
import store from '../../../store/index';

export default {
  components: {
    UserInputButton,
    IconCross,
  },
  props: {
    message: {
      type: Object,
    },
    colors: {
      type: Object,
      required: true
    },
  },
  methods: {
    cancelReply() {
      store.replyMessage = null;
    },
  },
}
