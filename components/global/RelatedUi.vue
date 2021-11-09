<template>
  <div>
    <h3 class="section-header">Related</h3>
    <div class="flex flex-wrap related-list">
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
export default {
  props: {
    search_key: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      ui_list: [],
    };
  },
  computed: {},
  async fetch() {
    this.ui_list = await this.$content("ui")
      .only(["title", "description", "img", "slug", "author"])
      .sortBy("title", "asc")
      .search(this.search_key)
      .fetch();
  },
  methods: {
    previewComponent(slug) {
      return "card-" + slug;
    },
  },
};
</script>

<style scoped>
.related-list .base-card {
  @apply w-24 mr-2;
}

@media (min-width: 640px) {
  .related-list .base-card {
    @apply w-32 mr-0;
  }
}
</style>
