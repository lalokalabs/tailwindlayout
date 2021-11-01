<template>
  <base-card :slug="slug" :label="label">
    <div class="flex h-6">
      <div
        class="w-10 h-full border border-indigo-300 border-r-0 bg-indigo-50"
      ></div>
      <button
        type="button"
        class="
          text-xs
          py-0
          px-1
          border border-indigo-300
          bg-indigo-200
          font-medium
        "
      >
        Go
      </button>
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
