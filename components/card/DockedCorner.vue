<template>
  <base-card :slug="slug" :label="label">
    <!-- card preview -->

    <div class="relative w-32 h-10 bg-indigo-100">
      <div
        class="
          absolute
          top-0
          right-0
          transform
          translate-x-1/2
          -translate-y-1/2
          w-4
          h-4
          bg-red-500
          rounded-full
        "
      ></div>
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
