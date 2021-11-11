<template>
  <article>
    <h1 class="page-header">{{ article.title }}</h1>

    <!-- ads -->

    <div
      class="
        bg-gradient-to-l
        from-yellow-200
        to-yellow-50
        border border-yellow-300
        shadow-md
        p-2
        rounded-lg
        mb-10
      "
    >
      <a class="hover:underline" href="https://otp.dev"
        ><span class="font-bold">GetOTP</span> one-time password API: Try for free and see how fast you can build a complete OTP flow.</a
      >
    </div>

    <!-- end ads -->

    <nuxt-content :document="article" />

    <div class="mt-6">
      <prev-next :prev="prev" :next="next" />
    </div>
  </article>
</template>

<script>
export default {
  layout: "Page",

  async asyncData({ $content, params }) {
    const article = await $content("ui", params.slug).fetch();

    const [prev, next] = await $content("ui")
      .only(["title", "slug"])
      .sortBy("title", "asc")
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