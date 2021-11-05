---
title: Input Addon
description: Input Addon
alt: Input Addon
---

<h3 class="section-header">Addon Prepended</h3>

<base-snippet>

  <template v-slot:preview>
    <div class="flex flex-col space-y-6">
      <div class="flex">
        <div class="bg-gray-200 py-2 px-3 border border-gray-300"><svg xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd" />
          </svg></div>
        <input class="flex-1" type="text" />
      </div>
      <div class="flex">
        <div class="bg-gray-200 py-2 px-3 border border-gray-300">Quantity</div>
        <input class="flex-1" type="number" />
      </div>
    </div>

  </template>

```html
<div class="flex">
  <div class="...">Quantity</div>
  <input class="flex-1 ..." type="number" />
</div>
```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/hDxIplJDXo">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-header">Addon Appended</h3>

<base-snippet>

  <template v-slot:preview>
    <div class="flex flex-col space-y-6">
      <div class="flex">
        <input class="flex-1" type="text" />
        <button type="button" class="bg-gray-200 py-2 px-3 border border-gray-300">Go</button>
      </div>
    </div>

  </template>

```html
<div class="flex">
  <input class="flex-1 ..." type="text" />
  <button type="button" class="...">Go</button>
</div>
```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/hDxIplJDXo">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-header">Addon Appended and Prepended</h3>

<base-snippet>

  <template v-slot:preview>
    <div class="flex flex-col space-y-6">
      <div class="flex">
        <div class="bg-gray-200 py-2 px-3 border border-gray-300"><svg xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd" />
          </svg></div>
        <input class="flex-1" type="text" />
        <button type="button" class="bg-gray-200 py-2 px-3 border border-gray-300">Go</button>
      </div>
    </div>

  </template>

```html
<div class="flex">
  <div class="...">Search Icon</div>
  <input class="flex-1 ..." type="text" />
  <button type="button" class="...">Go</button>
</div>
```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/hDxIplJDXo">Live Edit</a>
  </template>

</base-snippet>

<related-ui search_key="input"></related-ui>
