import Actions from '../Actions/Actions.vue';
import BackIcon from '../../icons/BackIcon.vue';

export default {
  components: {
    Actions,
    BackIcon,
  },
  props: {
    imageUrl: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    actions: {
      type: Array,
    },
    colors: {
      type: Object,
      required: true
    },
    isInfo: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      actionOpen: false
    }
  },
  methods: {
    toggleAction() {
      this.actionOpen = !this.actionOpen;
    },
    onClickBack() {
      this.$emit("back");
    },
  }
}
