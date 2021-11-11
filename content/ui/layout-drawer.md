---
title: Drawer
description: Layout Drawer
alt: Drawer
---

<h3 class="section-header">Left Drawer</h3>

<base-snippet :centered_preview="false" custom_preview_class="h-72 p-4">

  <template v-slot:preview>
    <div class="h-full border border-indigo-300 p-4 relative">
      <div class="mb-12">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
        make a
        type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
        containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions
        of Lorem Ipsum.
      </div>
      <!-- drawer container -->
      <div class="absolute h-full w-full z-50 left-0 top-0">
        <!-- overlay -->
        <div class="absolute h-full w-full left-0 top-0 bg-black bg-opacity-50" style="z-index: -1;"></div>
        <!-- end overlay -->
        <!-- side -->
        <div class="absolute h-full w-72 left-0 top-0 bg-indigo-50 shadow-lg p-4">Left Drawer</div>
        <!-- end side -->
      </div>
      <!-- end drawer container -->
    </div>
  </template>

  ```html
  <!-- Add drawer container into body or main div -->
  <div>

    <!-- drawer container -->
    <div class="fixed h-full w-full z-50 left-0 top-0">
      <!-- overlay -->
      <div class="fixed h-full w-full left-0 top-0 bg-black bg-opacity-50" style="z-index: -1;"></div>
      <!-- end overlay -->

      <!-- side -->
      <div class="fixed h-full w-72 left-0 top-0 bg-white shadow-lg p-4">Left Drawer</div>
      <!-- end side -->
    </div>
    <!-- end drawer container -->

  </div>
  ```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/IOmu4JTs9E">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-header">Right Drawer</h3>

<base-snippet :centered_preview="false" custom_preview_class="h-72 p-4">

  <template v-slot:preview>
    <div class="h-full border border-indigo-300 p-4 relative">
      <div class="mb-12">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
        make a
        type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
        containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions
        of Lorem Ipsum.
      </div>
      <!-- drawer container -->
      <div class="absolute h-full w-full z-50 left-0 top-0">
        <!-- overlay -->
        <div class="absolute h-full w-full left-0 top-0 bg-black bg-opacity-50" style="z-index: -1;"></div>
        <!-- end overlay -->
        <!-- side -->
        <div class="absolute h-full w-72 right-0 top-0 bg-indigo-50 shadow-lg p-4">Right Drawer</div>
        <!-- end side -->
      </div>
      <!-- end drawer container -->
    </div>
  </template>

  ```html
  <!-- Add drawer container into body or main div -->
  <div>

    <!-- drawer container -->
    <div class="fixed h-full w-full z-50 left-0 top-0">
      <!-- overlay -->
      <div class="fixed h-full w-full left-0 top-0 bg-black bg-opacity-50" style="z-index: -1;"></div>
      <!-- end overlay -->

      <!-- side -->
      <div class="fixed h-full w-72 right-0 top-0 bg-white shadow-lg p-4">Right Drawer</div>
      <!-- end side -->
    </div>
    <!-- end drawer container -->

  </div>
  ```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/YilhWH0Q5t">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-header">Left Drawer inside container</h3>

<base-snippet :centered_preview="false" custom_preview_class="h-72 p-4">

  <template v-slot:preview>
    <div class="h-full bg-indigo-200 border border-indigo-300 p-4">
      <div class="p-10 border border-indigo-300 h-full relative">
        <div class="mb-12">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a
          type specimen book.
        </div>
        <!-- drawer container -->
        <div class="absolute h-full w-full z-50 left-0 top-0">
          <!-- overlay -->
          <div class="absolute h-full w-full left-0 top-0 bg-black bg-opacity-50" style="z-index: -1;"></div>
          <!-- end overlay -->
          <!-- side -->
          <div class="absolute h-full w-1/2 left-0 top-0 bg-indigo-50 shadow-lg p-4">Left Drawer</div>
          <!-- end side -->
        </div>
        <!-- end drawer container -->
      </div>
    </div>
  </template>

  ```html
  <!-- Add drawer container into relative div -->
  <div class="relative">

    <!-- drawer container. use absolute for container, overlay and side -->
    <div class="absolute h-full w-full z-50 left-0 top-0">
      <!-- overlay -->
      <div class="absolute h-full w-full left-0 top-0 bg-black bg-opacity-50" style="z-index: -1;"></div>
      <!-- end overlay -->

      <!-- side -->
      <div class="absolute h-full w-72 left-0 top-0 bg-white shadow-lg p-4">Left Drawer</div>
      <!-- end side -->
    </div>
    <!-- end drawer container -->

  </div>
  ```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/PhEhmwfdkl">Live Edit</a>
  </template>

</base-snippet>

<related-ui search_key="layout"></related-ui>