<template>
  <div class="w-96 relative">
    <input
      class="border px-2 py-1 focus:outline-none w-full"
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search"
    />
    <ul class="absolute z-10 bg-white shadow w-full" v-if="ui_list.length">
      <li class="" v-for="ui of ui_list" :key="ui.slug">
        <NuxtLink
          class="px-2 py-2 font-semibold"
          :to="{ name: 'ui-slug', params: { slug: ui.slug } }"
        >
          {{ ui.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      ui_list: [],
    };
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.ui_list = [];
        return;
      }
      this.ui_list = await this.$content("ui")
        .limit(6)
        .search(searchQuery)
        .fetch();
    },
  },
};
</script>