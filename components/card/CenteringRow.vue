<template>
  <base-card :slug="slug" :label="label">
    <div class="flex items-center justify-between">
      <div class="w-4 h-4 mr-2 bg-indigo-50"></div>
      <div class="w-6 h-6 mr-2 bg-indigo-50"></div>
      <div class="w-2 h-2 mr-2 bg-indigo-50"></div>
    </div>
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
