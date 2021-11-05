---
title: Avatar Stack
description: Avatar Stack
alt: Avatar Stack
---

<h3 class="section-header">Avatar Stack Left</h3>

<base-snippet>

  <template v-slot:preview>
    <div class="flex -space-x-4">
      <img class="rounded-full ring ring-white w-12 h-12"
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
      <img class="rounded-full ring ring-white w-12 h-12"
        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
      <img class="rounded-full ring ring-white w-12 h-12"
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" />
      <img class="rounded-full ring ring-white w-12 h-12"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
      <div
        class="flex items-center justify-center rounded-full ring ring-white w-12 h-12 bg-indigo-500 font-semibold text-white">
        +5</div>
    </div>
  </template>

```html
<div class="flex -space-x-4">
  <img
    class="rounded-full ring ring-white w-12 h-12"
    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  />
  <img
    class="rounded-full ring ring-white w-12 h-12"
    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  />
  <img
    class="rounded-full ring ring-white w-12 h-12"
    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
  />
  <img
    class="rounded-full ring ring-white w-12 h-12"
    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  />
  <div
    class="flex items-center justify-center rounded-full ring ring-white w-12 h-12 bg-gray-300 font-semibold text-white"
  >
    +5
  </div>
</div>
```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/6qBCB2NGWc">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-header">Avatar Stack Right</h3>

<base-snippet>

  <template v-slot:preview>
    <div class="flex -space-x-4">
      <div
        class="relative z-50 flex items-center justify-center rounded-full ring ring-white w-12 h-12 bg-indigo-500 font-semibold text-white">
        +5</div>
      <img class="relative z-40 rounded-full ring ring-white w-12 h-12"
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
      <img class="relativa z-30 rounded-full ring ring-white w-12 h-12"
        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
      <img class="relative z-20 rounded-full ring ring-white w-12 h-12"
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" />
      <img class="relative z-10 rounded-full ring ring-white w-12 h-12"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
    </div>
  </template>

```html
<div class="flex -space-x-4">
  <div
    class="relative z-50 flex items-center justify-center rounded-full ring ring-white w-12 h-12 bg-indigo-500 font-semibold text-white"
  >
    +5
  </div>
  <img
    class="relative z-40 rounded-full ring ring-white w-12 h-12"
    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  />
  <img
    class="relativa z-30 rounded-full ring ring-white w-12 h-12"
    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  />
  <img
    class="relative z-20 rounded-full ring ring-white w-12 h-12"
    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
  />
  <img
    class="relative z-10 rounded-full ring ring-white w-12 h-12"
    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  />
</div>
```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/gKTP4CrNM9">Live Edit</a>
  </template>

</base-snippet>

<related-ui search_key="avatar"></related-ui>
