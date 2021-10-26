<template>
  <base-card :slug="slug" :label="label">
    <!-- card preview -->

    <div
      class="
        inline-flex
        items-center
        justify-center
        w-8
        h-8
        text-white
        bg-indigo-500
        rounded-full
      "
    >
      TW
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
