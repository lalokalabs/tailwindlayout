<template>
  <base-card :slug="slug" :label="label">
    <!-- card preview -->

    <div
      class="
        min-w-[2.5rem]
        inline-flex
        items-center
        justify-center
        h-10
        text-xl text-white
        bg-indigo-500
        rounded-full
        px-1
      "
    >
      1000+
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
