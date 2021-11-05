<template>
  <base-card
    :slug="slug"
    :label="label"
    :centered="false"
    custom_class="h-full flex flex-col"
  >
    <!-- card preview -->

    <header class="p-1 text-xs bg-indigo-50 border-b border-indigo-300 h-4"></header>
    <main class="flex-1 bg-indigo-50 p-1 text-xs">
      
    </main>
    

    <!-- end card preview -->
  </base-card>
</template>

<script>
export default {
  props: {
    slug: {
      type: String,
      default: "sticky-header",
    },
    label: {
      type: String,
      default: "Sticky Header",
    },
  },
};
</script>
