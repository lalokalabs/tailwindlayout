<template>
  <article>
    <h1 class="page-header">{{ article.title }}</h1>
    <nuxt-content :document="article" />
    <prev-next :prev="prev" :next="next" />
  </article>
</template>

<script>
export default {
  layout: "Page",

  async asyncData({ $content, params }) {
    const article = await $content("ui", params.slug).fetch();

    const [prev, next] = await $content("ui")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();

    return {
      article,
      prev,
      next,
    };
  },
};
</script>

<style>
</style>