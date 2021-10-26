<template>
  <base-card :slug="slug" :label="label">
    <!-- card preview -->

    <div class="flex -space-x-2">
      <div
        class="
          flex
          items-center
          justify-center
          w-8
          h-8
          text-base text-white
          bg-indigo-500
          rounded-full
          ring ring-white
        "
      >
        A
      </div>
      <div
        class="
          flex
          items-center
          justify-center
          w-8
          h-8
          text-base text-white
          bg-indigo-500
          rounded-full
          ring ring-white
        "
      >
        B
      </div>
      <div
        class="
          flex
          items-center
          justify-center
          w-8
          h-8
          text-base text-white
          bg-indigo-500
          rounded-full
          ring ring-white
        "
      >
        C
      </div>
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
