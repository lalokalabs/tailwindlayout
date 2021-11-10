<template>
  <base-card
    :slug="slug"
    :label="label"
    :centered="false"
    custom_class="h-full"
  >
    <!-- card preview -->

    <div class="h-full flex flex-wrap p-2">
      <div class="w-1/3 bg-indigo-50 border border-indigo-300 border-r-0 h-8"></div>
      <div class="w-1/3 bg-indigo-50 border border-indigo-300 border-r-0 h-8"></div>
      <div class="w-1/3 bg-indigo-50 border border-indigo-300 border-r-1 h-8"></div>
      <div class="w-1/3 bg-indigo-50 border border-indigo-300 border-r-0 h-8"></div>
      <div class="w-1/3 bg-indigo-50 border border-indigo-300 border-r-0 h-8"></div>
      <div class="w-1/3 bg-indigo-50 border border-indigo-300 border-r-1 h-8"></div>
    </div>

    <!-- end card preview -->
  </base-card>
</template>

<script>
export default {
  props: {
    slug: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>
