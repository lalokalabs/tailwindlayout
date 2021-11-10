<template>
  <base-card
    :slug="slug"
    :label="label"
    :centered="false"
    custom_class="h-full p-2"
  >
    <!-- card preview -->

    <!-- card -->
    <div
      class="
        max-w-sm
        flex flex-col
        rounded-lg
        overflow-hidden
        bg-white
        shadow border border-indigo-300
      "
    >
      <!-- card cover -->

      <div class="w-full h-8 bg-indigo-100 border-b border-indigo-300"></div>
      <!-- end card cover -->
      <!-- card content -->
      <div class="flex-1 px-2 py-1">
        <div class="font-bold mb-0 text-sm">Title</div>
        <p class="text-gray-700 text-xs">Content</p>
      </div>
      <!-- end card content -->
    </div>
    <!-- end card -->

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
