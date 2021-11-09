---
title: Badge
description: Badge
alt: Badge
---

<h3 class="page-desc">Simple Badge</h3>

<base-snippet>

  <template v-slot:preview>
    <div class="p-2 space-y-2">
      <span class="bg-blue-600 font-bold text-white text-center py-1 px-2 text-xs rounded">Primary</span>
      <span class="bg-gray-500 font-bold text-white text-center py-1 px-2 text-xs rounded">Secondary</span>
      <span class="bg-green-500 font-bold text-white text-center py-1 px-2 text-xs rounded">Success</span>
      <span class="bg-red-500 font-bold text-white text-center py-1 px-2 text-xs rounded">Danger</span>
      <span class="bg-yellow-500 font-bold text-white text-center py-1 px-2 text-xs rounded">Warning</span>
      <span class="bg-purple-400 font-bold text-white text-center py-1 px-2 text-xs rounded">Info</span>
      <span class="bg-gray-100 font-bold text-gray-800 text-center py-1 px-2 text-xs rounded">Light</span>
      <span class="bg-gray-800 font-bold text-white text-center py-1 px-2 text-xs rounded">Dark</span>
    </div>
  </template>

  <!-- snippet -->

  ```html
  <span class="bg-blue-600 font-bold text-white text-center py-1 px-2 text-xs rounded">Primary</span>
  <span class="bg-gray-500 font-bold text-white text-center py-1 px-2 text-xs rounded">Secondary</span>
  <span class="bg-green-500 font-bold text-white text-center py-1 px-2 text-xs rounded">Success</span>
  <span class="bg-red-500 font-bold text-white text-center py-1 px-2 text-xs rounded">Danger</span>
  <span class="bg-yellow-500 font-bold text-white text-center py-1 px-2 text-xs rounded">Warning</span>
  <span class="bg-purple-400 font-bold text-white text-center py-1 px-2 text-xs rounded">Info</span>
  <span class="bg-gray-100 font-bold text-gray-800 text-center py-1 px-2 text-xs rounded">Light</span>
  <span class="bg-gray-800 font-bold text-white text-center py-1 px-2 text-xs rounded">Dark</span>
  ```

  <!-- end snippet -->

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/Zbrwd49T3v">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-desc">Pill Badge</h3>

<base-snippet>

  <template v-slot:preview>
    <div class="p-2 space-y-2">
      <span class="bg-blue-600 font-bold text-white text-center py-1 px-2 text-xs rounded-full">Primary</span>
      <span class="bg-gray-500 font-bold text-white text-center py-1 px-2 text-xs rounded-full">Secondary</span>
      <span class="bg-green-500 font-bold text-white text-center py-1 px-2 text-xs rounded-full">Success</span>
      <span class="bg-red-500 font-bold text-white text-center py-1 px-2 text-xs rounded-full">Danger</span>
      <span class="bg-yellow-500 font-bold text-white text-center py-1 px-2 text-xs rounded-full">Warning</span>
      <span class="bg-purple-400 font-bold text-white text-center py-1 px-2 text-xs rounded-full">Info</span>
      <span class="bg-gray-100 font-bold text-gray-800 text-center py-1 px-2 text-xs rounded-full">Light</span>
      <span class="bg-gray-800 font-bold text-white text-center py-1 px-2 text-xs rounded-full">Dark</span>
    </div>
  </template>

  <!-- snippet -->

  ```html
  <span class="bg-blue-600 font-bold text-white text-center py-1 px-2 text-xs rounded-full">Primary</span>
  <span class="bg-gray-500 font-bold text-white text-center py-1 px-2 text-xs rounded-full">Secondary</span>
  <span class="bg-green-500 font-bold text-white text-center py-1 px-2 text-xs rounded-full">Success</span>
  <span class="bg-red-500 font-bold text-white text-center py-1 px-2 text-xs rounded-full">Danger</span>
  <span class="bg-yellow-500 font-bold text-white text-center py-1 px-2 text-xs rounded-full">Warning</span>
  <span class="bg-purple-400 font-bold text-white text-center py-1 px-2 text-xs rounded-full">Info</span>
  <span class="bg-gray-100 font-bold text-gray-800 text-center py-1 px-2 text-xs rounded-full">Light</span>
  <span class="bg-gray-800 font-bold text-white text-center py-1 px-2 text-xs rounded-full">Dark</span>
  ```

  <!-- end snippet -->

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/Zbrwd49T3v">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-desc">Button Badge</h3>

<base-snippet>

  <template v-slot:preview>
    <div>
      <button type="button" class="bg-blue-600 py-2 px-3 rounded-md text-white">
        Notifications
        <!-- badge -->
        <span class="bg-yellow-500 font-bold text-white text-center py-1 px-2 text-xs rounded">4</span>
        <!-- end badge -->
      </button>
    </div>
  </template>

  <!-- snippet -->

  ```html
  <button type="button" class="bg-blue-600 py-2 px-3 rounded-md text-white">
    Notifications
    <!-- badge -->
    <span class="bg-yellow-500 font-bold text-white text-center py-1 px-2 text-xs rounded">4</span>
    <!-- end badge -->
  </button>
  ```

  <!-- end snippet -->

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/Zbrwd49T3v">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-desc">Extract Badge class into component</h3>

<base-snippet :disable_preview="true">

  <!-- snippet -->

  ```html
  <!-- simple badge -->
  <span class="badge badge-primary">Primary</span>
  <span class="badge badge-secondary">Secondary</span>
  <span class="badge badge-success">Success</span>
  <span class="badge badge-danger">Danger</span>
  <span class="badge badge-warning">Warning</span>
  <span class="badge badge-info">Info</span>
  <span class="badge badge-light">Light</span>
  <span class="badge badge-dark">Dark</span>

  <!-- badge pill -->
  <span class="badge badge-pill badge-primary">Primary</span>
  <span class="badge badge-pill badge-secondary">Secondary</span>
  <span class="badge badge-pill badge-success">Success</span>
  <span class="badge badge-pill badge-danger">Danger</span>
  <span class="badge badge-pill badge-warning">Warning</span>
  <span class="badge badge-pill badge-info">Info</span>
  <span class="badge badge-pill badge-light">Light</span>
  <span class="badge badge-pill badge-dark">Dark</span>

  <style>
    .badge {
      @apply text-center py-1 px-2 text-xs font-bold rounded;
    }

    .badge-pill {
      @apply rounded-full;
    }

    .badge-primary {
      @apply text-white bg-blue-600;
    }

    .badge-secondary {
      @apply text-white bg-gray-500;
    }

    .badge-success {
      @apply text-white bg-green-500;
    }

    .badge-danger {
      @apply text-white bg-red-500;
    }

    .badge-warning {
      @apply text-white bg-yellow-500;
    }

    .badge-info {
      @apply text-white bg-purple-400;
    }

    .badge-light {
      @apply text-gray-800 bg-gray-100;
    }

    .badge-dark {
      @apply text-white bg-gray-800;
    }
  </style>
  ```

  <!-- end snippet -->

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/Zbrwd49T3v">Live Edit</a>
  </template>

</base-snippet>

<related-ui search_key="button"></related-ui>