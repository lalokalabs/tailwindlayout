---
title: Docked Corner
description: Docked Corner. Use case indicator
alt: Docked Corner
---

<h3 class="section-header">Docked Top Right Corner</h3>

<base-snippet>

  <template v-slot:preview>
    <div class="relative w-56 h-16 bg-indigo-100">
      <div class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-red-500 rounded-full">
      </div>
    </div>
  </template>

```html
<div class="relative ...">
  <!-- docked top right corner -->
  <div
    class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 ..."
  ></div>
  <!-- end docked top right corner -->
</div>
```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/uBxbMIOTMt">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-header">Docked Bottom Right Corner</h3>

<base-snippet>

  <template v-slot:preview>
    <div class="relative w-56 h-16 bg-indigo-100">
      <div class="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 w-8 h-8 bg-red-500 rounded-full">
      </div>
    </div>
  </template>

```html
<div class="relative ...">
  <!-- docked bottom right corner -->
  <div
    class="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 ..."
  ></div>
  <!-- end docked bottom right corner -->
</div>
```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/uBxbMIOTMt">Live Edit</a>
  </template>

</base-snippet>

<related-ui search_key="corner"></related-ui>
