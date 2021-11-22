<template>
  <div class="flex justify-between">
    <div v-if="prev">
      <NuxtLink
        :to="{ name: 'ui-slug', params: { slug: prev.slug } }"
        class="inline-flex items-center text-sm border border-indigo-300 px-3 py-1 rounded-md text-indigo-500 hover:bg-indigo-50"
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
            d="M7 16l-4-4m0 0l4-4m-4 4h18"
          />
        </svg>
        <span class="ml-1">{{ prev.title }}</span>
      </NuxtLink>
    </div>
    <div v-else>
    </div>

    <div v-if="next">
      <NuxtLink
        :to="{ name: 'ui-slug', params: { slug: next.slug } }"
        class="inline-flex items-center text-sm border border-indigo-300 px-3 py-1 rounded-md text-indigo-500 hover:bg-indigo-50"
      >
        <span class="mr-1">{{ next.title }}</span>
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
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
  methods: {},
};
</script>