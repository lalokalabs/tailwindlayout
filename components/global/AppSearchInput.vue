<template>
  <div class="w-full relative">
    <input
      class="
        border border-indigo-300
        px-3
        py-2
        text-sm
        focus:outline-none
        w-full
        rounded-md
      "
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search"
    />
    <ul
      class="
        absolute
        z-10
        bg-white
        shadow-lg
        border
        rounded-lg
        divide-y divide-indigo-50
        w-full
        max-h-72
        overflow-y-auto
        mt-1
      "
      v-if="ui_list.length"
    >
      <li class="" v-for="ui of ui_list" :key="ui.slug">
        <NuxtLink
          @click.native="viewPage"
          class="inline-block w-full px-3 py-2 text-sm font-medium hover:bg-indigo-50"
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
      this.ui_list = await this.$content("ui").search(searchQuery).fetch();
    },
  },
  methods: {
    viewPage() {
      this.ui_list = [];
    },
  },
};
</script>