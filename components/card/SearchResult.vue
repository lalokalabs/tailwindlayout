<template>
  <base-card
    :slug="slug"
    :label="label"
    :centered="false"
    custom_class="h-full bg-indigo-50"
  >
    <div class="w-20 h-16 text-xs mx-auto pt-2">
      <div class="relative">
        <div class="w-full p-1 border border-indigo-300 bg-white text-gray-600">
          Search
        </div>
        <div class="absolute z-10 w-full border shadow divide-y bg-white">
          <a class="block p-1 hover:bg-indigo-50" href="#">Tailwind</a>
          <a class="block p-1 hover:bg-indigo-50" href="#">Bootstrap</a>
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
