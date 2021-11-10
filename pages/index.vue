<template>
  <div>
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
