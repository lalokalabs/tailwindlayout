---
title: Grid
description: Flex Grid Layout
alt: Flex Grid
---

<h3 class="section-header">Simple Grid</h3>

<base-snippet :centered_preview="false" custom_preview_class="h-32 p-4">

  <template v-slot:preview>
    <div class="flex flex-wrap">
      <div class="w-1/3 bg-indigo-200 h-12"></div>
      <div class="w-1/3 bg-indigo-300 h-12"></div>
      <div class="w-1/3 bg-indigo-200 h-12"></div>
      <div class="w-1/3 bg-indigo-300 h-12"></div>
      <div class="w-1/3 bg-indigo-200 h-12"></div>
      <div class="w-1/3 bg-indigo-300 h-12"></div>
    </div>
  </template>

  ```html
  <!-- flex-wrap will collapse extra column to new row -->
  <div class="flex flex-wrap">
    <div class="w-1/3 h-12 ..."></div>
    <div class="w-1/3 h-12 ..."></div>
    <div class="w-1/3 h-12 ..."></div>
    <div class="w-1/3 h-12 ..."></div>
    <div class="w-1/3 h-12 ..."></div>
    <div class="w-1/3 h-12 ..."></div>
  </div>
  ```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/V92TTzwtNb">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-header">Grid with row spacing</h3>

<base-snippet :centered_preview="false" custom_preview_class="h-40 p-4">

  <template v-slot:preview>
    <div class="flex flex-wrap -mb-4">
      <div class="w-1/3 mb-4 h-12 bg-indigo-200"></div>
      <div class="w-1/3 mb-4 h-12 bg-indigo-300 "></div>
      <div class="w-1/3 mb-4 h-12 bg-indigo-200"></div>
      <div class="w-1/3 mb-4 h-12 bg-indigo-300 "></div>
      <div class="w-1/3 mb-4 h-12 bg-indigo-200"></div>
      <div class="w-1/3 mb-4 h-12 bg-indigo-300 "></div>
    </div>
  </template>

  ```html
  <!-- 
    1. Apply mb-4 to column to add row spacing
    2. Apply -mb-4 to remove last row spacing 
  -->
  <div class="flex flex-wrap -mb-4">
    <div class="w-1/3 h-12 mb-4 bg-indigo-200"></div>
    <div class="w-1/3 h-12 mb-4 bg-indigo-300"></div>
    <div class="w-1/3 h-12 mb-4 bg-indigo-200"></div>
    <div class="w-1/3 h-12 mb-4 bg-indigo-300"></div>
    <div class="w-1/3 h-12 mb-4 bg-indigo-200"></div>
    <div class="w-1/3 h-12 mb-4 bg-indigo-300"></div>
  </div>
  ```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/V92TTzwtNb">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-header">Grid with row and column spacing</h3>

<base-snippet :centered_preview="false" custom_preview_class="h-40 p-4">

  <template v-slot:preview>
    <div class="flex flex-wrap -mb-4 -mx-2">
      <div class="w-1/3 mb-4 px-2">
        <div class="bg-indigo-200 h-12"></div>
      </div>
      <div class="w-1/3 mb-4 px-2">
        <div class="bg-indigo-300 h-12"></div>
      </div>
      <div class="w-1/3 mb-4 px-2">
        <div class="bg-indigo-200 h-12"></div>
      </div>
      <div class="w-1/3 mb-4 px-2">
        <div class="bg-indigo-300 h-12"></div>
      </div>
      <div class="w-1/3 mb-4 px-2">
        <div class="bg-indigo-200 h-12"></div>
      </div>
      <div class="w-1/3 mb-4 px-2">
        <div class="bg-indigo-300 h-12"></div>
      </div>
    </div>
  </template>

  ```html
  <!-- 
      1. Apply mb-4 to column to add row spacing
      2. Apply -mb-4 to remove last row spacing
      3. Apply -mx-2 to remove first and last column margin x 
  -->
  <div class="flex flex-wrap -mb-4 -mx-2">
    <div class="w-1/3 mb-4 px-2">
      <div class="h-12 bg-indigo-200"></div>
    </div>
    <div class="w-1/3 mb-4 px-2">
      <div class="h-12 bg-indigo-300"></div>
    </div>
    <div class="w-1/3 mb-4 px-2">
      <div class="h-12 bg-indigo-200"></div>
    </div>
    <div class="w-1/3 mb-4 px-2">
      <div class="h-12 bg-indigo-300"></div>
    </div>
    <div class="w-1/3 mb-4 px-2">
      <div class="h-12 bg-indigo-200"></div>
    </div>
    <div class="w-1/3 mb-4 px-2">
      <div class="h-12 bg-indigo-300"></div>
    </div>
  </div>
  ```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/V92TTzwtNb">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-header">Grid alignment</h3>

<base-snippet :centered_preview="false" custom_preview_class="h-40 p-4">

  <template v-slot:preview>
    <div class="flex flex-wrap justify-center -mb-4 -mx-2">
      <div class="w-1/3 mb-4 px-2">
        <div class="bg-indigo-200 h-12"></div>
      </div>
      <div class="w-1/3 mb-4 px-2">
        <div class="bg-indigo-300 h-12"></div>
      </div>
      <div class="w-1/3 mb-4 px-2">
        <div class="bg-indigo-200 h-12"></div>
      </div>
      <div class="w-1/3 mb-4 px-2">
        <div class="bg-indigo-300 h-12"></div>
      </div>
      <div class="w-1/3 mb-4 px-2">
        <div class="bg-indigo-200 h-12"></div>
      </div>
    </div>
  </template>

  ```html
  <!-- 
      1. Apply mb-4 to column to add row spacing
      2. Apply -mb-4 to remove last row spacing
      3. Apply -mx-2 to remove first and last column margin x 
      4. Apply justify-center to arrange flex items to center
  -->
  <div class="flex flex-wrap justify-center -mb-4 -mx-2">
    <div class="w-1/3 mb-4 px-2">
      <div class="h-12 bg-indigo-200"></div>
    </div>
    <div class="w-1/3 mb-4 px-2">
      <div class="h-12 bg-indigo-300"></div>
    </div>
    <div class="w-1/3 mb-4 px-2">
      <div class="h-12 bg-indigo-200"></div>
    </div>
    <div class="w-1/3 mb-4 px-2">
      <div class="h-12 bg-indigo-300"></div>
    </div>
    <div class="w-1/3 mb-4 px-2">
      <div class="h-12 bg-indigo-200"></div>
    </div>
  </div>
  ```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/V92TTzwtNb">Live Edit</a>
  </template>

</base-snippet>

<related-ui search_key="layout"></related-ui>