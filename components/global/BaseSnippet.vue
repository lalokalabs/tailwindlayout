<template>
  <div class="border shadow rounded-lg overflow-hidden">
    <div class="bg-white" :class="previewClass">
      <slot name="preview"></slot>
    </div>
    <div>
      <slot></slot>
    </div>
    <div class="px-4 py-6 bg-white">
      <slot name="source"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    centered_preview: {
      type: Boolean,
      default: true,
    },
    disable_preview: {
      type: Boolean,
      default: false,
    },
    custom_preview_class: {
      type: String,
      default: "",
    },
  },
  data: {},
  computed: {
    previewClass: function () {
      if (this.disable_preview) {
        return "";
      }

      if (!this.centered_preview) {
        return this.custom_preview_class;
      }

      return "flex items-center justify-center h-32 overflow-auto";
    },
  },
};
</script>