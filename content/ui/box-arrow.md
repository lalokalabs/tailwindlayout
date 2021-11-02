---
title: Box Arrow
description: Box Arrow
alt: Box Arrow
---

<base-snippet :centered_preview="false" custom_preview_class="h-72 flex items-center justify-center bg-indigo-50">

  <template v-slot:preview>
    <div class="relative bg-white w-96 p-8 rounded-lg border border-indigo-500">
      <div class="text-gray-800 text-sm">
        <p class="mb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <!-- bottom left arrow -->
      <div style="left:39px;"
        class="absolute bottom-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-white border-r border-b border-indigo-500">
      </div>
      <!-- end bottom left arrow -->
    </div>
  </template>

  ```html
  <div class="relative bg-white border-r border-b border-indigo-500 ...">
    
    <!-- bottom left arrow -->
    <div style="left:39px;"
      class="absolute bottom-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-white border-r border-b border-indigo-500">
    </div>
    <!-- end bottom left arrow -->
  </div>
  ```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/YCAoKNjj8O">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-header">Related</h3>

<div class="flex flex-wrap">
  <card-avatar></card-avatar>
  <card-avatar-stack></card-avatar-stack>
  <card-avatar-initial></card-avatar-initial>
</div>