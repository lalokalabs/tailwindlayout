---
title: Layout Split
description: Layout Split
alt: Layout Split
---

<base-snippet :centered_preview="false" custom_preview_class="h-72 p-4">

  <template v-slot:preview>
    <div class="h-full flex border border-indigo-300">
      <div class="flex-1 bg-indigo-50 border-r border-indigo-300 p-4">Left Screen</div>
      <div class="flex-1 bg-indigo-50 p-4">Right Screen</div>
    </div>
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

<related-ui search_key="layout"></related-ui>