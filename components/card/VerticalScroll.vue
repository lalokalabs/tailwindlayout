<template>
  <base-card
    :slug="slug"
    :label="label"
    :centered="false"
    custom_class="flex justify-center items-center p-2 h-full box-border bg-indigo-50"
  >
    <div class="p-2 bg-indigo-200 border border-indigo-300 w-20 h-20 relative">
      <div class="text-xs">Content with Vertical Scroll</div>
      <div class="absolute right-0 top-2/4 transform -translate-y-1/2 w-2 h-1/2 bg-indigo-100 border border-indigo-300 rounded-lg">
      </div>
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
