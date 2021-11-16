<template>
  <base-card
    :slug="slug"
    :label="label"
    :centered="false"
    custom_class="h-full flex flex-col relative"
  >
    <!-- card preview -->

    <header
      class="p-1 text-xs bg-indigo-50 border-b border-indigo-300 h-4"
    ></header>
    <main
      class="flex-1 bg-indigo-50 border-b border-indigo-300 p-1 text-xs"
    ></main>
    <footer class="p-1 text-xs bg-indigo-50 h-4"></footer>

    <div class="absolute bottom-0 right-0">
      <!-- example chat box -->
      <div
        class="
          w-8
          h-10
          mr-1
          flex flex-col
          border border-indigo-300 border-b-0
          bg-indigo-200
        "
      >
        <div class="p-2">
          
        </div>
      </div>
      <!-- end example chat box -->
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
