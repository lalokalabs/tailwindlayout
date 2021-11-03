---
title: Centering Icon
description: Centering Icon
alt: Centering Icon
---

<base-snippet :centered_preview="false" custom_preview_class="h-56 flex items-center justify-center bg-indigo-50">

  <template v-slot:preview>
    <!-- centering icon -->
    <div class="w-40 h-40 bg-white rounded-full flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    </div>
    <!-- end centering icon -->
  </template>

  ```html
  <div class="flex items-center justify-center ...">
    <!-- centered icon -->

    <svg class="...">
      ...
    </svg>

    <!-- end centered icon -->
  </div>
  ```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/j72c79I1Mr">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-header">Related</h3>

<div class="flex flex-wrap">
  <card-avatar></card-avatar>
  <card-avatar-stack></card-avatar-stack>
  <card-avatar-initial></card-avatar-initial>
</div>