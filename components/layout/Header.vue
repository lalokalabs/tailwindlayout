<template>
  <header class="shadow-sm">
    <div
      class="
        max-w-7xl
        mx-auto
        flex
        items-center
        justify-between
        shadow-sm
        px-4
        py-4
      "
    >
      <NuxtLink class="font-bold flex-none" to="/">Tailwind Layout</NuxtLink>

      <div class="w-full sm:w-96 mx-4">
        <AppSearchInput />
      </div>

      <button
        class="inline-flex items-center sm:hidden"
        type="button"
        @click="toggleDrawer()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div class="hidden sm:block">
        <ul class="flex space-x-4">
          <li>
            <a href="mailto:engineering@lalokalabs.co">Contact</a>
          </li>
          <li class="hidden">
            <a href="https://github.com/lalokalabs/tailwindlayout">Github</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    toggleDrawer() {
      $nuxt.$emit("toggleDrawer");
    },
  },
};
</script>