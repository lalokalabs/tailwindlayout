<template>
  <article>
    <!-- ads -->
    <a href="https://kafkai.com/en/free-seo-strategic-analysis/?mtm_campaign=LaLokaLayouts&mtm_kwd=sub-page&mtm_source=group-site&mtm_medium=web" target="_blank">
      <div
        class="
          text-white text-center
          shadow-md
          p-4
          mb-8
          rounded-md
          bg-gradient-to-r
          from-purple-500
          via-green-500
          to-red-500
          font-medium
          hover:underline
        "
      >
        Advanced keyword analysis and competitor insights to deliver proven SEO strategies. Try
        <span class="font-bold">Kafkai</span> for free now!
      </div>
    </a>
    <!-- end ads -->

    <h1 class="page-header">{{ article.title }}</h1>

    <nuxt-content :document="article" />

    <div class="my-6">
      <prev-next :prev="prev" :next="next" />
    </div>
  </article>
</template>

<script>
import getShareImage from "@jlengstorf/get-share-image";
import getSiteMeta from "~/utils/getSiteMeta.js";

export default {
  layout: "Page",

  async asyncData({ $content, params }) {
    const article = await $content("ui", params.slug).fetch();

    const [prev, next] = await $content("ui")
      .only(["title", "slug"])
      .sortBy("title", "asc")
      .surround(params.slug)
      .fetch();

    // const socialImage = getShareImage({
    //   title: article.title,
    //   tagline: "#tailwindcss",
    //   cloudName: "dujppn3an",
    //   imagePublicID: "YOUR_TEMPLATE_NAME.png",
    //   titleFont: "futura",
    //   taglineFont: "futura",
    //   textColor: "232129",
    // });

    return {
      article,
      prev,
      next,
      // socialImage,
    };
  },

  computed: {
    meta() {
      const metaData = {
        type: "article",
        title: this.article.title,
        description: this.article.description,
        url: `${process.env.baseUrl}/ui/${this.$route.params.slug}`,
        // mainImage: this.socialImage,
      };
      return getSiteMeta(metaData);
    },
  },

  head() {
    return {
      title: this.article.title,
      meta: [
        ...this.meta,
        {
          property: "article:published_time",
          content: this.article.createdAt,
        },
        {
          property: "article:modified_time",
          content: this.article.updatedAt,
        },
        {
          property: "article:tag",
          content: this.article.tags ? this.article.tags.toString() : "",
        },
        { name: "twitter:label1", content: "Written by" },
        { name: "twitter:data1", content: "LaLoka Labs" },
        { name: "twitter:label2", content: "Filed under" },
        {
          name: "twitter:data2",
          content: this.article.tags ? this.article.tags.toString() : "",
        },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `${process.env.baseUrl}/ui/${this.$route.params.slug}`,
        },
      ],
    };
  },
};
</script>

<style>
.bg-gradient {
  background: linear-gradient(41deg, #01b9db 45%, #318fff);
}

.bg-gradient:hover {
  background: linear-gradient(41deg, #0face5 45%, #3f67f7);
}
</style>