<template>
  <base-card :slug="slug" :label="label">
    <!-- card preview -->

    <div class="w-full border border-indigo-50">
      <header class="sticky top-0 bg-indigo-100 shadow px-2 py-1">
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
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>
