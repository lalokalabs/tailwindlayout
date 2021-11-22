<template>
  <div class="my-8">
    <div class="mx-auto text-center px-5 pt-5 pb-8">
      <h1 class="text-4xl font-bold text-gray-800">LaLoka Layouts</h1>
      <h2 class="text-lg font-medium mt-3 text-gray-500">Useful layouts for Tailwind CSS</h2>
    </div>
    <div class="flex flex-wrap justify-center">
      <component
        v-for="ui of ui_list"
        :key="ui.slug"
        :label="ui.title"
        :slug="ui.slug"
        v-bind:is="previewComponent(ui.slug)"
        class="tab"
      ></component>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  async asyncData({ $content, params }) {
    const ui_list = await $content("ui", params.slug).sortBy("title").fetch();

    return {
      ui_list,
    };
  },

  head() {
    return {
      title: "Home",
    };
  },

  data() {
    return {
      ui_list: [],
    };
  },
  created() {},
  mounted() {},
  methods: {
    previewComponent(slug) {
      return "card-" + slug;
    },
  },
};
</script>
