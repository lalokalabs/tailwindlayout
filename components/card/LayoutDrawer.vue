<template>
  <base-card
    :slug="slug"
    :label="label"
    :centered="false"
    custom_class="h-full"
  >
    <!-- card preview -->

    <div class="h-full text-xs p-1 relative">
      <div class="mb-12">
        Lorem Ipsum is simply dummy text.
      </div>
      <!-- drawer container -->
      <div class="absolute h-full w-full z-50 left-0 top-0">
        <!-- overlay -->
        <div class="absolute h-full w-full left-0 top-0 bg-black bg-opacity-50" style="z-index: -1;"></div>
        <!-- end overlay -->
        <!-- side -->
        <div class="absolute h-full w-1/3 left-0 top-0 bg-indigo-50 shadow-lg p-1"></div>
        <!-- end side -->
      </div>
      <!-- end drawer container -->
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
