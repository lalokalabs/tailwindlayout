<template>
  <base-card :slug="slug" :label="label">
    <div class="p-2 bg-indigo-400 w-16 text-white text-xs text-center">
      Centered
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
