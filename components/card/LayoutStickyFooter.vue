<template>
  <base-card
    :slug="slug"
    :label="label"
    :centered="false"
    custom_class="h-full flex flex-col"
  >
    <!-- card preview -->

    <header class="p-1 text-xs bg-indigo-50 border-b border-indigo-300 h-4"></header>
    <main class="flex-1 bg-indigo-50 border-b border-indigo-300 p-1 text-xs">
      
    </main>
    <footer class="p-1 text-xs bg-indigo-50 h-4"></footer>

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
