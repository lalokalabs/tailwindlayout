<template>
  <header class="border-b shadow-sm">
    <div class="bg-lime-50 px-2 py-2 border-b border-lime-100 text-center">
      <a class="text-gray-900 font-medium hover:underline" :href="current_promo_link.url" 
        >{{ current_promo_link.text }}</a
      >
    </div>

    
    <div class="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
      <NuxtLink class="font-bold flex-none" to="/">
        <img
          src="/lalokalayout-logo.png"
          class="h-[40px]"
          alt="LaLoka Layouts Logo"
        />
      </NuxtLink>

      <div class="w-full mx-4 sm:mx-8">
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

      <div class="hidden sm:block min-w-[82px]">
        <ul class="flex space-x-6">
          <li>
            <a
              href="https://www.facebook.com/layoutsfortailwind"
              target="_blank"
            >
              <img
                src="/facebook-logo.png"
                class="w-[29px] opacity-60 hover:opacity-80"
                alt="Facebook Logo"
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/lalokalabs/tailwindlayout"
              target="_blank"
            >
              <img
                src="/github-logo.png"
                class="w-[29px] opacity-60 hover:opacity-80"
                alt="GitHub Logo"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      promo_links: {
        home: {
          url: 'https://kafkai.com/en/free-seo-strategic-analysis/?mtm_campaign=LaLokaLayouts&mtm_kwd=top-page&mtm_source=group-site&mtm_medium=web',
          text: 'Trouble with ranking content? Start with our free SEO Strategy Analysis and compete better!'
        },
        other: {
          url: 'https://kafkai.com/en/free-seo-strategic-analysis/?mtm_campaign=LaLokaLayouts&mtm_kwd=sub-page&mtm_source=group-site&mtm_medium=web',
          text: 'Trouble with ranking content? Start with our free SEO Strategy Analysis and compete better!'
        }
      }
    }
  },
  computed: {
    current_promo_link() {
      return this.$route.path === '/' ? this.promo_links.home : this.promo_links.other
    }
  }
}
</script>