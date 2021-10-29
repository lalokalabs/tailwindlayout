<template>
  <base-card :slug="slug" :label="label" :centered="false" custom_class="h-full">
    <!-- card preview -->

    <div class="relative h-full bg-indigo-50">
      <div
        class="absolute top-0 right-0 bg-indigo-500 text-white py-1 px-1 text-xs"
      >
        FIXED
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
