<template>
  <base-card
    :slug="slug"
    :label="label"
    :centered="false"
    custom_class="h-full"
  >
    <!-- card preview -->

    <div class="h-full flex flex-col">
      <header
        class="bg-indigo-50 border-b border-indigo-300 text-xs h-4 px-1"
      ></header>
      <div class="flex-1 flex flex-row">
        <main
          class="
            flex-1
            bg-indigo-50
            border-l border-r border-indigo-300
            text-xs
            px-1
            relative
          "
        >
          <div
            class="
              absolute
              right-0
              bottom-0
              w-1
              h-1/2
              bg-indigo-200
              border border-indigo-300
              rounded-lg
            "
          ></div>
        </main>
        <nav class="order-first w-4 bg-indigo-50 text-xs px-1 relative">
          <div
            class="
              absolute
              right-0
              top-2/4
              transform
              -translate-y-1/2
              w-1
              h-1/2
              bg-indigo-200
              border border-indigo-300
              rounded-lg
            "
          ></div>
        </nav>
        <aside class="w-4 bg-indigo-50 text-xs px-1 relative">
          <div
            class="
              absolute
              right-0
              top-0
              w-1
              h-1/2
              bg-indigo-200
              border border-indigo-300
              rounded-lg
            "
          ></div>
        </aside>
      </div>
      <footer
        class="bg-indigo-50 border-t border-indigo-300 text-xs px-1 h-4"
      ></footer>
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
