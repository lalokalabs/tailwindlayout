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
        text-xl text-white
        bg-indigo-500
        rounded-full
      "
    >
      4
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
