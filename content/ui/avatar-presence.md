---
title: Avatar Presence
description: Avatar Presence
alt: Avatar Presence
---

<h3 class="section-header">Single Avatar Presence</h3>

<base-snippet>

  <template v-slot:preview>
    <div class="relative w-12">
      <img class="rounded-full ring-2 ring-gray-100 w-12 h-12"
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
      <div class="absolute bottom-0 right-0 h-3 w-3 rounded-full ring ring-white bg-green-600"></div>
    </div>
  </template>

  <!-- snippet -->

  ```html
  <div class="relative w-12">
    <img class="rounded-full ring-2 ring-gray-100 w-12 h-12" src="..." />
    <div class="absolute bottom-0 right-0 h-3 w-3 rounded-full ring ring-white bg-green-600"></div>
  </div>
  ```

  <!-- end snippet -->

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/3QbRnjbKoZ">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-header">Avatar Presence List</h3>

<base-snippet>

  <template v-slot:preview>
    <div class="flex space-x-4">
      <div class="relative">
        <img class="rounded-full ring-2 ring-gray-100 w-12 h-12"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
        <div class="absolute bottom-0 right-0 h-3 w-3 rounded-full ring ring-white bg-green-600"></div>
      </div>
      <div class="relative">
        <img class="rounded-full ring-2 ring-gray-100 w-12 h-12"
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
        <div class="absolute bottom-0 right-0 h-3 w-3 rounded-full ring ring-white bg-green-600"></div>
      </div>
      <div class="relative">
        <img class="rounded-full ring-2 ring-gray-100 w-12 h-12"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" />
        <div class="absolute bottom-0 right-0 h-3 w-3 rounded-full ring ring-white bg-green-600"></div>
      </div>
      <div class="relative">
        <img class="rounded-full ring-2 ring-gray-100 w-12 h-12"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
        <div class="absolute bottom-0 right-0 h-3 w-3 rounded-full ring ring-white bg-green-600"></div>
      </div>
    </div>
  </template>

  <!-- snippet -->

  ```html
  <div class="flex space-x-4">
    <div class="relative">
      <img class="rounded-full ring-2 ring-gray-100 w-12 h-12" src="..." />
      <div class="absolute bottom-0 right-0 h-3 w-3 rounded-full ring ring-white bg-green-600"></div>
    </div>
    <div class="relative">
      <img class="rounded-full ring-2 ring-gray-100 w-12 h-12" src="..." />
      <div class="absolute bottom-0 right-0 h-3 w-3 rounded-full ring ring-white bg-green-600"></div>
    </div>
    <div class="relative">
      <img class="rounded-full ring-2 ring-gray-100 w-12 h-12" src="..." />
      <div class="absolute bottom-0 right-0 h-3 w-3 rounded-full ring ring-white bg-green-600"></div>
    </div>
    <div class="relative">
      <img class="rounded-full ring-2 ring-gray-100 w-12 h-12" src="..." />
      <div class="absolute bottom-0 right-0 h-3 w-3 rounded-full ring ring-white bg-green-600"></div>
    </div>
  </div>
  ```

  <!-- end snippet -->

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/3QbRnjbKoZ">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-header">Related</h3>

<div class="flex flex-wrap">
  <card-avatar></card-avatar>
  <card-avatar-stack></card-avatar-stack>
  <card-avatar-initial></card-avatar-initial>
</div>