<template>
  <base-card
    :slug="slug"
    :label="label"
    :centered="false"
    custom_class="h-full"
  >
    <!-- card preview -->

    <div class="h-full flex flex-col">
      <header class="bg-indigo-50 border-b border-indigo-300 text-xs px-1">Header</header>
      <div class="flex-1 flex flex-col sm:flex-row">
        <main class="flex-1 bg-indigo-50 border-l border-r border-indigo-300 text-xs px-1">Content</main>
        <nav class="order-first w-4 bg-indigo-50 text-xs px-1">L</nav>
        <aside class="w-4 bg-indigo-50 text-xs px-1">R</aside>
      </div>
      <footer class="bg-indigo-50 border-t border-indigo-300 text-xs px-1">Footer</footer>
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
