<template>
  <header class="shadow-sm">
    <div
      class="
        max-w-sm
        md:container
        mx-auto
        flex
        items-center
        justify-between
        shadow-sm
        py-4
      "
    >
      <NuxtLink class="font-bold" to="/">Tailwind Layout</NuxtLink>

      <div class="w-56 sm:w-96">
        <AppSearchInput />
      </div>

      <div class="hidden sm:block">
        <ul class="flex space-x-4">
          <li>
            <a href="https://github.com/lalokalabs/tailwindlayout">Github</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>