<template>
  <base-card :slug="slug" :label="label">
    <!-- card preview -->

    <!-- timeline item -->
    <div
      class="timeline-item flex relative py-1 px-0 ml-4 leading-6 box-border"
    >
      <div class="relative text-gray-900 box-border" style="z-index: 1">
        <div
          display="flex"
          class="
            flex
            overflow-hidden
            flex-shrink-0
            justify-center
            items-center
            mr-2
            -ml-4
            w-8
            h-8
            text-gray-700
            bg-gray-400
            border-2 border-white border-solid
            box-border
          "
          overflow="hidden"
          color="fg.muted"
          width="32px"
          height="32px"
          style="border-radius: 50%"
        >
          <!-- icon here -->
        </div>
      </div>
      <div
        class="
          flex-auto
          mt-1
          max-w-full
          text-sm
          leading-5
          text-gray-700
          box-border
        "
        style="min-width: 0px"
      >
        A
      </div>
    </div>
    <!-- end timeline item -->
    <!-- timeline item -->
    <div
      class="timeline-item flex relative py-1 px-0 ml-4 leading-6 box-border"
    >
      <div class="relative text-gray-900 box-border" style="z-index: 1">
        <div
          display="flex"
          class="
            flex
            overflow-hidden
            flex-shrink-0
            justify-center
            items-center
            mr-2
            -ml-4
            w-8
            h-8
            text-gray-700
            bg-gray-400
            border-2 border-white border-solid
            box-border
          "
          overflow="hidden"
          color="fg.muted"
          width="32px"
          height="32px"
          style="border-radius: 50%"
        >
          <!-- icon here -->
        </div>
      </div>
      <div
        class="
          flex-auto
          mt-1
          max-w-full
          text-sm
          leading-5
          text-gray-700
          box-border
        "
        style="min-width: 0px"
      >
        B
      </div>
    </div>
    <!-- end timeline item -->

    <!-- end card preview -->
  </div>
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
.timeline-item::before {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  display: block;
  width: 2px;
  content: "";
  background-color: rgb(216, 222, 228);
}
</style>
