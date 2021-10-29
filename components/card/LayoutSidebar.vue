<template>
  <base-card
    :slug="slug"
    :label="label"
    :centered="false"
    custom_class="h-full"
  >
    <!-- card preview -->

    <div class="h-full flex">
      <nav class="w-6 flex-none bg-indigo-200 border-r border-indigo-300 px-2"></nav>
      <main class="flex-1 min-w-0 overflow-auto bg-indigo-50 px-2">
        <div class="mb-12"></div>
      </main>
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
