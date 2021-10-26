<template>
  <div class="flex justify-between">
    <div v-if="prev">
      <NuxtLink
        :to="{ name: 'ui-slug', params: { slug: prev.slug } }"
        class="font-bold text-primary hover:underline"
      >
        {{ prev.title }}
      </NuxtLink>
    </div>

    <div v-if="next">
      <NuxtLink
        :to="{ name: 'ui-slug', params: { slug: next.slug } }"
        class="font-bold hover:underline"
      >
        {{ next.title }}
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