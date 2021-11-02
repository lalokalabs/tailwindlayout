<template>
  <base-card :slug="slug" :label="label">
    <!-- card preview -->

    <div class="relative w-12">
      <img
        class="rounded-full ring-2 ring-gray-100 w-12 h-12"
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
      <div
        class="
          absolute
          bottom-0
          right-0
          h-3
          w-3
          rounded-full
          ring ring-white
          bg-green-600
        "
      ></div>
    </div>

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
