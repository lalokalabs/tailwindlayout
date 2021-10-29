<template>
  <NuxtLink
    class="
      flex flex-col
      justify-start
      items-center
      p-4
      w-24
      leading-6
      no-underline
      md:w-32
      box-border
    "
    :to="{ name: 'ui-slug', params: { slug: slug } }"
  >
    <div
      class="
        w-24
        h-24
        leading-6
        rounded-sm
        border border-indigo-300 border-solid
        cursor-pointer
        box-border
        shadow-xs
      "
    >
      <div :class="positionClass">
        <slot></slot>
      </div>
    </div>
    <h4
      class="
        pt-2
        m-0
        font-normal
        leading-6
        text-center text-gray-800
        cursor-pointer
        box-border
      "
    >
      {{ label }}
    </h4>
  </NuxtLink>
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
    centered: {
      type: Boolean,
      default: true,
    },
    custom_class: {
      type: String,
      default: "",
    },
  },
  data: {},
  computed: {
    positionClass: function () {
      if (!this.centered) {
        return this.custom_class;
      }

      return "flex justify-center items-center p-2 h-full box-border";
    },
  },
};
</script>
