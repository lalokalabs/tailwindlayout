<template>
  <article>
    <h1 class="page-header">{{ article.title }}</h1>

    <!-- ads -->

    <div class="bg-gradient-to-l from-indigo-200 border border-indigo-200 shadow-md p-2 rounded-lg mb-10">
      <a class="hover:underline" href="https://otp.dev">Need OTP feature in your project? Save yourself the headache by using this <span class="font-bold">crazy simple OTP API</span> by GETOTP!</a>
    </div>

    <!-- end ads -->

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