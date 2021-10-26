<template>
  <div>
    <base-card :slug="slug" :label="label">
      <!-- card preview -->

      <component v-bind:is="previewComponent" class="tab"></component>

      <!-- end card preview -->
    </base-card>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  props: {
    component_name: {
      type: String,
      default: "default",
    },
    slug: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  created() {},
  mounted() {},
  computed: {
    previewComponent: function () {
      return "card-" + this.slug;
    },
  },
};
</script>
