<template>
  <base-card
    :slug="slug"
    :label="label"
    :centered="false"
    custom_class="h-full"
  >
    <!-- card preview -->

    <div class="relative h-full bg-indigo-50">
      <!-- right side -->
      <div
        class="
          absolute
          right-0
          top-2/4
          transform
          -translate-y-1/2
          w-6
          h-10
          bg-indigo-200
          text-white
          flex
          items-center
          justify-center
          border border-indigo-300 border-r-0
        "
      ></div>
      <!-- end right side -->
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
