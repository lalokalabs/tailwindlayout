<template>
  <base-card
    :slug="slug"
    :label="label"
    :centered="false"
    custom_class="h-full"
  >
    <!-- card preview -->

    <div class="relative bg-indigo-50 border w-full h-full overflow-hidden">
      <div class="absolute left-0 top-0 h-16 w-16">
        <div
          class="
            absolute
            transform
            -rotate-45
            bg-indigo-200
            text-center
            font-semibold
            py-1
            text-xs
          "
          style="left: -34px; top: 10px; width: 120px"
        >
          Popular
        </div>
      </div>
    </div>

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
