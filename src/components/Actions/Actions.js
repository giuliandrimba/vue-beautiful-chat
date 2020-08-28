export default {
  props: {
    actions: {
      type: Array,
    },
  },
  methods: {
    onClick(action) {
      action.onClick();
      this.$emit('action', action);
    }
  },
}
