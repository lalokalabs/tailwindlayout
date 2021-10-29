<template>
  <base-card :slug="slug" :label="label">
    <!-- card preview -->

    <div
      class="
        inline-flex
        items-center
        justify-center
        w-12
        h-12
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
      default: "avatar-initial",
    },
    label: {
      type: String,
      default: "Avatar Initial",
    },
  },
};
</script>
