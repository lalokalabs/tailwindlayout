<template>
  <footer class="border-t shadow-sm px-4 py-5 text-gray-400">
    <div class="max-w-7xl mx-auto">
      <div
        class="
          flex flex-col
          md:flex-row
          space-y-4
          sm:space-y-0
          items-center
          justify-between
        "
      >
        <div class="text-sm text-center md:text-left md:mr-12 mb-1 md:mb-0 min-w-[230px]">
          © Copyright {{ new Date().getFullYear() }}
          <a
            class="text-gray-500 underline hover:text-gray-800"
            href="https://lalokalabs.co"
            target="_blank"
          >
            LaLoka Labs.
          </a>
        </div>
        <div class="text-center md:text-right text-xs">
          Tailwind CSS is a trademark of Tailwind Labs Inc, and this site contents are unofficial examples of using Tailwind CSS.
        </div>
      </div>
    </div>
  </footer>
</template>
