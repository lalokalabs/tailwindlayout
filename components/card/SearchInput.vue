<template>
  <base-card :slug="slug" :label="label">
    <div class="w-16 h-16 text-xs">
      <div class="relative">
        <div class="w-full p-1 rounded-t-lg border border-indigo-300 bg-indigo-50">Search</div>
        <div
          class="
            absolute
            z-10
            w-full
            border
            rounded-b-lg
            shadow
            divide-y
            bg-white
          "
        >
          <a class="block p-1 hover:bg-indigo-50" href="#">Tailwind</a>
        </div>
      </div>
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
