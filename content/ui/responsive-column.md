---
title: Responsive Column
description: Responsive Column
alt: Responsive Column
---

<p class="page-desc">On mobile, display div as row. On larger screen, display div as column. </p>

<base-snippet :centered_preview="false" custom_preview_class="h-auto md:h-72">

  <template v-slot:preview>
    <div class="w-full h-full flex flex-col sm:flex-row">
      <div class="flex-1 bg-red-300 p-4">
        <h3 class="text-xl mb-2">Services</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div class="flex-1 bg-yellow-300 p-4">
        <h3 class="text-xl mb-2">Products</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
      <div class="flex-1 bg-indigo-300 p-4">
        <h3 class="text-xl mb-2">Products</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
    </div>
  </template>

```html
<div class="flex flex-col sm:flex-row ...">
  <div class="flex-1 ...">
    ...
  </div>
  <div class="flex-1 ...">
    ...
  </div>
  <div class="flex-1 ...">
    ...
  </div>
</div>
```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/GIUSF1T9aR">Live Edit</a>
  </template>

</base-snippet>

<related-ui search_key="layout"></related-ui>
