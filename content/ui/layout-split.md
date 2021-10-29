---
title: Layout Split
description: Layout Split
alt: Layout Split
---

<base-snippet :centered_preview="false" custom_preview_class="h-72 flex">

  <template v-slot:preview>
    <div class="flex-1 bg-indigo-50 border-r-2 border-indigo-300 p-4">Left Screen</div>
    <div class="flex-1 bg-indigo-50 p-4">Right Screen</div>
  </template>

  ```html
  <div class="min-h-screen flex">
    <div class="flex-1 ...">Left Screen</div>
    <div class="flex-1 ...">Right Screen</div>
  </div>
  ```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/6iZzDYX7sm">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-header">Related</h3>

<div class="flex flex-wrap">
  <card-avatar></card-avatar>
  <card-avatar-stack></card-avatar-stack>
  <card-avatar-initial></card-avatar-initial>
</div>