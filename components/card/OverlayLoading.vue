<template>
  <base-card
    :slug="slug"
    :label="label"
    :centered="false"
    custom_class="h-full p-2"
  >
    <!-- card preview -->

    <!-- card -->
    <div
      class="
        max-w-sm
        flex flex-col
        rounded-lg
        overflow-hidden
        bg-white
        shadow
        border border-indigo-300
        relative
      "
    >
      <!-- loading overlay -->

      <div
        class="
          absolute
          bg-white
          opacity-90
          z-10
          h-full
          w-full
          flex
          items-center
          justify-center
        "
      >
        <div class="flex items-center">
          <span class="text-xs mr-1">Loading</span>
          <!-- loading icon -->
          <svg
            class="animate-spin h-3 w-3 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <!-- end loading icon -->
        </div>
      </div>

      <!-- end loading overlay -->

      <!-- card cover -->

      <div class="w-full h-8 bg-indigo-100 border-b border-indigo-300"></div>
      <!-- end card cover -->
      <!-- card content -->
      <div class="flex-1 px-2 py-1">
        <div class="font-bold mb-0 text-sm">Title</div>
        <p class="text-gray-700 text-xs">Content</p>
      </div>
      <!-- end card content -->
    </div>
    <!-- end card -->

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
