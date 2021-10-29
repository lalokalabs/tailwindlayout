<template>
  <base-card :slug="slug" :label="label" :centered="false" customClass="h-full">
    <!-- card preview -->

    <div class="w-full h-full text-xs">
      <header class="sticky top-0 bg-indigo-100 border-b border-indigo-300 px-2 py-1">
        Header
      </header>
      <main class="px-2 py-1">
        <p>Content</p>
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
      default: "sticky-header",
    },
    label: {
      type: String,
      default: "Sticky Header",
    },
  },
};
</script>
