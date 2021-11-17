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
      class="max-w-sm flex flex-col bg-white shadow border border-indigo-300"
    >
      <!-- card cover -->

      <div
        class="
          w-full
          h-4
          bg-indigo-100
          border-b border-indigo-300
          flex
          items-center
          p-1
        "
      >
        <div class="w-3 h-3 rounded-lg bg-indigo-300 mr-1"></div>
        <div class="text-xs">John</div>
      </div>
      <!-- end card cover -->
      <!-- card content -->
      <div class="flex-1 px-1 py-2">
        <div class="bg-indigo-200 rounded-md p-1 text-xs">Hello</div>
      </div>
      <!-- end card content -->
      <div class="bg-indigo-100 border-t border-indigo-300 py-1 px-1">
        <div
          class="rounded-lg w-full text-xs py-1 border border-indigo-300 bg-white"
        ></div>
      </div>
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
