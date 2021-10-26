<template>
  <div>
    <h3 class="text-2xl mb-6">Component List</h3>

    <ul class="sidebar-navigation text-indigo-500">
      <li v-for="ui of ui_list">
        <NuxtLink
          class="hover:underline hover:text-indigo-600"
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
      .sortBy("createdAt", "asc")
      .fetch();
  },
};
</script>