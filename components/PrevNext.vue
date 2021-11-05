<template>
  <div class="flex justify-between">
    <div v-if="prev">
      <NuxtLink
        :to="{ name: 'ui-slug', params: { slug: prev.slug } }"
        class="inline-flex items-center"
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
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <span class="ml-1 hover:underline">{{ prev.title }}</span>
      </NuxtLink>
    </div>

    <div v-if="next">
      <NuxtLink
        :to="{ name: 'ui-slug', params: { slug: next.slug } }"
        class="inline-flex items-center"
      >
        <span class="mr-1 hover:underline">{{ next.title }}</span>
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