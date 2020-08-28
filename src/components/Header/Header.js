import Actions from '../Actions/Actions.vue';

export default {
  components: {
    Actions,
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
    disableUserListToggle: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      actionOpen: false
    }
  },
  methods: {
    toggleAction() {
      this.actionOpen = !this.actionOpen;
    }
  }
}
