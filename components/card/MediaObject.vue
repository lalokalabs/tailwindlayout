<template>
  <base-card
    :slug="slug"
    :label="label"
    :centered="false"
    custom_class="h-full"
  >
    <!-- card preview -->

    <div class="h-full p-2">
      <div class="flex">
        <div class="w-6 h-6 bg-indigo-100 mr-1"></div>
        <div class="flex-1 h-16 bg-indigo-50"></div>
      </div>
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
