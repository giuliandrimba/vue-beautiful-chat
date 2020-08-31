import vClickOutside from 'v-click-outside'

export default {
  props: {
    actions: {
      type: Array,
    },
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  methods: {
    onClick(action) {
      action.onClick();
      this.$emit('action', action);
    },
    onClickOutside(event) {
      this.$emit('action');
    }
  },
}
