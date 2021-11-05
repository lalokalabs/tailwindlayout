<template>
  <div>
    <ul class="sidebar-navigation text-sm text-indigo-500">
      <li v-for="ui of ui_list">
        <NuxtLink
          class="block hover:bg-indigo-50 py-2 px-2"
          :to="{ name: 'ui-slug', params: { slug: ui.slug } }"
          >{{ ui.title }}</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ui_list: [],
    };
  },
  async fetch() {
    this.ui_list = await this.$content("ui")
      .only(["title", "description", "img", "slug", "author"])
      .sortBy("title", "asc")
      .fetch();
  },
};
</script>