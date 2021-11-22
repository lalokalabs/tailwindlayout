<template>
  <!-- drawer container -->

  <div
    v-show="show_drawer"
    class="
      fixed
      h-full
      w-full
      z-50
      left-0
      top-0
      transition
      duration-500
      ease-in-out
    "
  >
    <!-- overlay -->
    <div
      @click="toggleDrawer()"
      class="fixed h-full w-full left-0 top-0 bg-gray-500 bg-opacity-25 z-[-1]"
    ></div>
    <!-- end overlay -->

    <!-- side -->

    <div
      class="
        fixed
        h-full
        w-56
        right-0
        top-0
        overflow-y-auto
        bg-white
        shadow-lg
        p-4
      "
    >
      <h3 class="font-bold text-xl mb-6">Follow</h3>
      
      <ul class="sidebar-navigation text-sm text-indigo-500">
        <li>
          <a class="block py-2" href="https://github.com/lalokalabs/tailwindlayout">Github</a>
        </li>
        <li>
          <a class="block py-2" href="https://www.facebook.com/layoutsfortailwind">FB</a>
        </li>
      </ul>

      <h3 class="font-bold text-xl my-6">Layouts</h3>

      <ul class="sidebar-navigation text-sm text-indigo-500">
        <li v-for="ui of ui_list">
          <NuxtLink
            class="block py-2"
            :to="{ name: 'ui-slug', params: { slug: ui.slug } }"
            >{{ ui.title }}</NuxtLink
          >
        </li>
      </ul>
    </div>

    <!-- end side -->
  </div>

  <!-- end drawer container -->
</template>

<script>
export default {
  created() {
    this.$nuxt.$on("toggleDrawer", () => {
      //Do Something

      console.log("toggleDrawer");

      this.toggleDrawer();
    });
  },
  data() {
    return {
      show_drawer: false,
      ui_list: [],
    };
  },
  methods: {
    toggleDrawer() {
      this.show_drawer = !this.show_drawer;
    },
  },
  async fetch() {
    this.ui_list = await this.$content("ui")
      .only(["title", "description", "img", "slug", "author"])
      .sortBy("title", "asc")
      .fetch();
  },
};
</script>
