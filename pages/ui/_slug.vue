<template>
  <article>
    <h1 class="page-header">{{ article.title }}</h1>

    <!-- ads -->
    <a href="https://otp.dev" target="_blank">
      <div class="text-white text-center shadow-md p-4 mb-8 rounded-md bg-gradient font-medium hover:underline">
        <span class="font-bold">GetOTP</span> one-time password API: Try for free and see how fast you can build a complete OTP flow.
      </div>
    </a>

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
.bg-gradient {
  background: linear-gradient(41deg,#01b9db 45%,#318fff);
}

.bg-gradient:hover {
  background: linear-gradient(41deg,#0face5 45%,#3f67f7);
}
</style>