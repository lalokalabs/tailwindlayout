<template>
  <base-card
    :slug="slug"
    :label="label"
    :centered="false"
    custom_class="flex justify-center items-center p-2 h-full box-border bg-indigo-50"
  >
    <div class="p-2 bg-indigo-200 border border-indigo-300 w-12 h-12"></div>
  </base-card>
</template>

<script>
export default {
  props: {
    slug: {
      type: String,
      default: "Centering",
    },
    label: {
      type: String,
      default: "centering",
    },
  },
};
</script>
