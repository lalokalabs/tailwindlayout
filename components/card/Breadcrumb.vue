<template>
  <base-card :slug="slug" :label="label">
    <!-- card preview -->

    <ul class="flex">
      <li class="breadcrumb-item"><a href="/">A</a></li>
      <li class="breadcrumb-item"><a href="/">B</a></li>
      <li class="breadcrumb-item"><a href="/">C</a></li>
    </ul>

    <!-- end card preview -->
  </base-card>
</template>

<script>
export default {
  props: {
    slug: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.breadcrumb-item::after {
  display: inline-block;
  height: 0.8em;
  margin: 0 0.5em;
  content: "";
  border-right: 0.1em solid var(--color-fg-muted);
  transform: rotate(15deg);
}
</style>
