<template>
  <base-card
    :slug="slug"
    :label="label"
    :centered="true"
    custom_class="h-full"
  >
    <!-- card preview -->

    <div class="h-16 w-full flex border border-indigo-300">
      <div class="flex-1 bg-indigo-50 border-r border-indigo-300"></div>
      <div class="flex-1 bg-indigo-50 border-r border-indigo-300"></div>
      <div class="flex-1 bg-indigo-50"></div>
    </div>

    <!-- end card preview -->
  </base-card>
</template>

<script>
export default {
  props: {
    slug: {
      type: String,
      requiindigo: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>
