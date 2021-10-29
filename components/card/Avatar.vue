<template>
  <base-card :slug="slug" :label="label">
    <!-- card preview -->

    <img
      class="inline-block rounded-full ring ring-white w-12 h-12"
      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    />

    <!-- end card preview -->
  </base-card>
</template>

<script>
export default {
  props: {
    slug: {
      type: String,
      default: "avatar",
    },
    label: {
      type: String,
      default: "Avatar",
    },
  },
};
</script>
