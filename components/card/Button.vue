<template>
  <base-card :slug="slug" :label="label">
    <!-- card preview -->
    <div>
      <button
        type="button"
        class="
          bg-blue-600
          hover:bg-blue-700
          py-2
          px-4
          text-sm
          font-medium
          text-white
          border border-transparent
          rounded-lg
          focus:outline-none
        "
      >
        Submit
      </button>
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
