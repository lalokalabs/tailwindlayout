<template>
  <base-card :slug="slug" :label="label">
    <div class="relative bg-indigo-50 p-2 rounded-lg border border-indigo-300 h-10 w-full">
      
      <!-- bottom left arrow -->
      <div
        style="left: 25px"
        class="
          absolute
          bottom-0
          transform
          -translate-x-1/2
          translate-y-1/2
          rotate-45
          w-2
          h-2
          bg-indigo-50
          border-r border-b border-indigo-300
        "
      ></div>
      <!-- end bottom left arrow -->
    </div>
  </base-card>
</template>

<script>
export default {
  props: {
    slug: {
      type: String,
      default: "Centering",
    },
    label: {
      type: String,
      default: "centering",
    },
  },
};
</script>
