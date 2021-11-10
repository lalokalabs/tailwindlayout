---
title: Button
description: Button
alt: Button
---

<h3 class="page-desc">Solid Button</h3>

<base-snippet>

  <template v-slot:preview>
    <div class="p-2 space-y-2">
      <button type="button"
        class="bg-blue-600 hover:bg-blue-700 py-2 px-4 text-sm font-medium text-white border border-transparent rounded-lg focus:outline-none">Primary</button>
      <button type="button"
        class="bg-gray-500 hover:bg-gray-600 py-2 px-4 text-sm font-medium text-white border border-transparent rounded-lg focus:outline-none">Secondary</button>
      <button type="button"
        class="bg-green-500 hover:bg-green-600 py-2 px-4 text-sm font-medium text-white border border-transparent rounded-lg focus:outline-none">Success</button>
      <button type="button"
        class="bg-red-500 hover:bg-red-600 py-2 px-4 text-sm font-medium text-white border border-transparent rounded-lg focus:outline-none">Danger</button>
      <button type="button"
        class="bg-yellow-500 hover:bg-yellow-600 py-2 px-4 text-sm font-medium text-white border border-transparent rounded-lg focus:outline-none">Warning</button>
      <button type="button"
        class="bg-purple-400 hover:bg-purple-500 py-2 px-4 text-sm font-medium text-white border border-transparent rounded-lg focus:outline-none">Info</button>
      <button type="button"
        class="bg-gray-100 hover:bg-gray-200 py-2 px-4 text-sm font-medium text-gray-800 border border-transparent rounded-lg focus:outline-none">Light</button>
      <button type="button"
        class="bg-gray-800 hover:bg-black py-2 px-4 text-sm font-medium text-white border border-transparent rounded-lg focus:outline-none">Dark</button>
    </div>
  </template>

  <!-- snippet -->

  ```html
  <button type="button"
    class="bg-blue-600 hover:bg-blue-700 py-2 px-4 text-sm font-medium text-white border border-transparent rounded-lg focus:outline-none">Primary</button>

  <button type="button"
    class="bg-gray-500 hover:bg-gray-600 py-2 px-4 text-sm font-medium text-white border border-transparent rounded-lg focus:outline-none">Secondary</button>

  <button type="button"
    class="bg-green-500 hover:bg-green-600 py-2 px-4 text-sm font-medium text-white border border-transparent rounded-lg focus:outline-none">Success</button>

  <button type="button"
    class="bg-red-500 hover:bg-red-600 py-2 px-4 text-sm font-medium text-white border border-transparent rounded-lg focus:outline-none">Danger</button>

  <button type="button"
    class="bg-yellow-500 hover:bg-yellow-600 py-2 px-4 text-sm font-medium text-white border border-transparent rounded-lg focus:outline-none">Warning</button>

  <button type="button"
    class="bg-purple-400 hover:bg-purple-500 py-2 px-4 text-sm font-medium text-white border border-transparent rounded-lg focus:outline-none">Info</button>

  <button type="button"
    class="bg-gray-100 hover:bg-gray-200 py-2 px-4 text-sm font-medium text-gray-800 border border-transparent rounded-lg focus:outline-none">Light</button>

  <button type="button"
    class="bg-gray-800 hover:bg-black py-2 px-4 text-sm font-medium text-white border border-transparent rounded-lg focus:outline-none">Dark</button>
  ```

  <!-- end snippet -->

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/yBUgkPCRrI">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-desc">Outline Button</h3>

<base-snippet>

  <template v-slot:preview>
    <div class="p-2 space-y-2">
      <button
        class="bg-transparent hover:bg-blue-600 text-sm text-blue-600 hover:text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded-lg">Primary</button>
      <button
        class="bg-transparent hover:bg-gray-600 text-sm text-gray-600 hover:text-white font-semibold py-2 px-4 border border-gray-500 hover:border-transparent rounded-lg">Secondary</button>
      <button
        class="bg-transparent hover:bg-green-500 text-sm text-green-500 hover:text-white font-semibold py-2 px-4 border border-green-400 hover:border-transparent rounded-lg">Success</button>
      <button
        class="bg-transparent hover:bg-red-500 text-sm text-red-500 hover:text-white font-semibold py-2 px-4 border border-red-400 hover:border-transparent rounded-lg">Danger</button>
      <button
        class="bg-transparent hover:bg-yellow-500 text-sm text-yellow-500 hover:text-white font-semibold py-2 px-4 border border-yellow-400 hover:border-transparent rounded-lg">Warning</button>
      <button
        class="bg-transparent hover:bg-purple-400 text-sm text-purple-400 hover:text-white font-semibold py-2 px-4 border border-purple-400 hover:border-transparent rounded-lg">Info</button>
      <button
        class="bg-gray-50 hover:bg-gray-100 text-sm text-gray-200 hover:text-gray-800 font-semibold py-2 px-4 border border-gray-100 hover:border-transparent rounded-lg">Light</button>
      <button
        class="bg-transparent hover:bg-gray-800 text-sm text-gray-800 hover:text-white font-semibold py-2 px-4 border border-gray-800 hover:border-transparent rounded-lg">Dark</button>
    </div>
  </template>

  <!-- snippet -->

  ```html
  <button
    class="bg-transparent hover:bg-blue-600 text-sm text-blue-600 hover:text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded-lg">Primary</button>

  <button
    class="bg-transparent hover:bg-gray-600 text-sm text-gray-600 hover:text-white font-semibold py-2 px-4 border border-gray-500 hover:border-transparent rounded-lg">Secondary</button>

  <button
    class="bg-transparent hover:bg-green-500 text-sm text-green-500 hover:text-white font-semibold py-2 px-4 border border-green-400 hover:border-transparent rounded-lg">Success</button>

  <button
    class="bg-transparent hover:bg-red-500 text-sm text-red-500 hover:text-white font-semibold py-2 px-4 border border-red-400 hover:border-transparent rounded-lg">Danger</button>

  <button
    class="bg-transparent hover:bg-yellow-500 text-sm text-yellow-500 hover:text-white font-semibold py-2 px-4 border border-yellow-400 hover:border-transparent rounded-lg">Warning</button>

  <button
    class="bg-transparent hover:bg-purple-400 text-sm text-purple-400 hover:text-white font-semibold py-2 px-4 border border-purple-400 hover:border-transparent rounded-lg">Info</button>

  <button
    class="bg-gray-50 hover:bg-gray-100 text-sm text-gray-200 hover:text-gray-800 font-semibold py-2 px-4 border border-gray-100 hover:border-transparent rounded-lg">Light</button>

  <button
    class="bg-transparent hover:bg-gray-800 text-sm text-gray-800 hover:text-white font-semibold py-2 px-4 border border-gray-800 hover:border-transparent rounded-lg">Dark</button>
  ```

  <!-- end snippet -->

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/yBUgkPCRrI">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-desc">Button with Icon</h3>

<base-snippet :centered_preview="false">

  <template v-slot:preview>
    <div class="p-10">
      <div class="w-72 mx-auto text-center">
        <button type="button"
          class="inline-flex items-center align-top bg-blue-600 hover:bg-blue-700 py-2 px-4 text-sm font-medium text-white border border-transparent rounded-lg focus:outline-none">
          <span>Primary</span>
          <svg class="w-4 h-4 ml-2 -mr-1" fill="currentColor" aria-hidden="true" viewBox="0 0 20 20">
            <path
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd" fill-rule="evenodd"></path>
          </svg>
        </button>
        <button type="button"
          class="inline-flex items-center align-top bg-gray-500 hover:bg-gray-600 py-2 px-4 text-sm font-medium text-white border border-transparent rounded-lg focus:outline-none">
          <svg class="w-4 h-4 mr-2 -ml-1" fill="currentColor" aria-hidden="true" viewBox="0 0 20 20">
            <path
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd" fill-rule="evenodd"></path>
          </svg>
          <span>Secondary</span>
        </button>
      </div>
    </div>

  </template>

  <!-- snippet -->

  ```html
  <button type="button" class="inline-flex items-center align-top ...">
    Primary
    <svg class="w-4 h-4 ml-2 -mr-1" fill="currentColor" aria-hidden="true" viewBox="0 0 20 20">
      <path
        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
        clip-rule="evenodd" fill-rule="evenodd"></path>
    </svg>
  </button>

  <button type="button" class="inline-flex items-center align-top ...">
    <svg class="w-4 h-4 mr-2 -ml-1" fill="currentColor" aria-hidden="true" viewBox="0 0 20 20">
      <path
        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
        clip-rule="evenodd" fill-rule="evenodd"></path>
    </svg>
    Secondary
  </button>
  ```

  <!-- end snippet -->

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/yBUgkPCRrI">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-desc">Button Size</h3>

<base-snippet>

  <template v-slot:preview>
    <div class="p-2 space-y-2">
      <button type="button"
        class="bg-blue-600 hover:bg-blue-700 py-2 px-4 text-3xl font-medium text-white border border-transparent rounded-lg focus:outline-none">Larger</button>
      <button type="button"
        class="bg-blue-600 hover:bg-blue-700 py-1 px-4 text-2xl font-bold font-medium text-white border border-transparent rounded-lg focus:outline-none">Large</button>
      <button type="button"
        class="bg-blue-600 hover:bg-blue-700 py-1 px-2 text-xs font-medium text-white border border-transparent rounded-lg focus:outline-none">Small</button>
    </div>
  </template>

  <!-- snippet -->

  ```html
  <button type="button" class="py-2 px-4 text-3xl ...">Larger</button>
  <button type="button" class="py-1 px-4 text-2xl ...">Large</button>
  <button type="button" class="py-1 px-2 text-xs ...">Small</button>
  ```

  <!-- end snippet -->

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/yBUgkPCRrI">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-desc">Button Block</h3>

<base-snippet>

  <template v-slot:preview>
    <div class="w-full p-2 space-y-2">
      <button type="button"
        class="bg-blue-600 hover:bg-blue-700 py-2 px-4 font-medium text-white border border-transparent rounded-lg focus:outline-none w-full">Block</button>
    </div>
  </template>

  <!-- snippet -->

  ```html
  <button type="button" class="w-full ...">Block</button>
  ```

  <!-- end snippet -->

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/yBUgkPCRrI">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-desc">Extract button class as component</h3>

<base-snippet :disable_preview="true">

  <template v-slot:preview>
  </template>

  <!-- snippet -->

  ```html

  <!-- btn solid -->
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-secondary">Secondary</button>
  <button type="button" class="btn btn-success">Success</button>
  <button type="button" class="btn btn-danger">Danger</button>
  <button type="button" class="btn btn-warning">Warning</button>
  <button type="button" class="btn btn-info">Info</button>
  <button type="button" class="btn btn-light">Light</button>
  <button type="button" class="btn btn-dark">Dark</button>

  <!-- btn outline -->
  <button class="btn btn-outline-primary">Primary</button>
  <button class="btn btn-outline-secondary">Secondary</button>
  <button class="btn btn-outline-success">Success</button>
  <button class="btn btn-outline-danger">Danger</button>
  <button class="btn btn-outline-warning">Warning</button>
  <button class="btn btn-outline-info">Info</button>
  <button class="btn btn-outline-light">Light</button>
  <button class="btn btn-outline-dark">Dark</button>

  <!-- btn icon -->
  <button type="button" class="btn btn-primary btn-icon">
    <span>Primary</span>
    <svg class="w-4 h-4 ml-2 -mr-1" fill="currentColor" aria-hidden="true" viewBox="0 0 20 20">
      <path
        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
        clip-rule="evenodd" fill-rule="evenodd"></path>
    </svg>
  </button>

  <button type="button" class="btn btn-secondary btn-icon">
    <svg class="w-4 h-4 mr-2 -ml-1" fill="currentColor" aria-hidden="true" viewBox="0 0 20 20">
      <path
        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
        clip-rule="evenodd" fill-rule="evenodd"></path>
    </svg>
    <span>Secondary</span>
  </button>

  <!-- btn size -->
  <button type="button" class="btn btn-xl btn-primary">Larger</button>
  <button type="button" class="btn btn-lg btn-secondary">Large</button>
  <button type="button" class="btn btn-sm btn-success">Small</button>

  <!-- btn block -->
  <button type="button" class="btn btn-primary btn-block btn-lg">Primary</button>

  <style>
    .btn {
      @apply py-2 px-4 text-sm font-medium border border-transparent rounded-lg focus: outline-none;
    }

    .btn-primary {
      @apply bg-blue-600 hover:bg-blue-700 text-white;
    }

    .btn-secondary {
      @apply bg-gray-500 hover:bg-gray-600 text-white;
    }

    .btn-success {
      @apply bg-green-500 hover:bg-green-600 text-white;
    }

    .btn-danger {
      @apply bg-red-500 hover:bg-red-600 text-white;
    }

    .btn-warning {
      @apply bg-yellow-500 hover:bg-yellow-600 text-white;
    }

    .btn-info {
      @apply bg-purple-400 hover:bg-purple-500 text-white;
    }

    .btn-light {
      @apply bg-gray-100 hover:bg-gray-200 text-gray-800;
    }

    .btn-dark {
      @apply bg-gray-800 hover:bg-black text-white;
    }

    /* btn outline */

    .btn-outline-primary {
      @apply bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white border-blue-500 hover:border-transparent;
    }

    .btn-outline-secondary {
      @apply bg-transparent hover:bg-gray-600 text-gray-600 hover:text-white border-gray-500 hover:border-transparent;
    }

    .btn-outline-success {
      @apply bg-transparent hover:bg-green-500 text-green-500 hover:text-white border-green-400 hover:border-transparent;
    }

    .btn-outline-danger {
      @apply bg-transparent hover:bg-red-500 text-red-500 hover:text-white border-red-400 hover:border-transparent;
    }

    .btn-outline-warning {
      @apply bg-transparent hover:bg-yellow-500 text-yellow-500 hover:text-white border-yellow-400 hover:border-transparent;
    }

    .btn-outline-info {
      @apply bg-transparent hover:bg-purple-400 text-purple-400 hover:text-white border-purple-400 hover:border-transparent;
    }

    .btn-outline-light {
      @apply bg-gray-50 hover:bg-gray-100 text-gray-200 hover:text-gray-800 border-gray-100 hover:border-transparent;
    }

    .btn-outline-dark {
      @apply bg-transparent hover:bg-gray-800 text-gray-800 hover:text-white border-gray-800 hover:border-transparent;
    }

    /* btn icon */

    .btn-icon {
      @apply inline-flex items-center align-top;
    }

    /* btn size */

    .btn-xl {
      @apply py-2 px-4 text-3xl;
    }

    .btn-lg {
      @apply py-1 px-4 text-xl;
    }

    .btn-sm {
      @apply py-1 px-2 text-xs;
    }

    /* btn block */

    .btn-block {
      @apply w-full;
    }
  </style>
  ```
  <!-- end snippet -->

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/yBUgkPCRrI">Live Edit</a>
  </template>

</base-snippet>

<related-ui search_key="badge"></related-ui>