<template>
  <base-card :slug="slug" :label="label">
    <!-- card preview -->
    <div>
      <span
        class="
          bg-green-500
          font-bold
          text-white text-center
          py-1
          px-2
          text-xs
          rounded-full
        "
        >Success</span
      >
    </div>
    <!-- end card preview -->
  </base-card>
</template>

<script>
export default {
  props: {
    slug: {
      type: String,
      default: "avatar-stack",
    },
    label: {
      type: String,
      default: "Avatar Stack",
    },
  },
};
</script>
