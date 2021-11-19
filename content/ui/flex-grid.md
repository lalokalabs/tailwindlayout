---
title: Grid with Flexbox
description: Flex Grid Layout, Card Grid
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
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/8Xy1iYIJcH">Live Edit</a>
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
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/8Xy1iYIJcH">Live Edit</a>
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
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/8Xy1iYIJcH">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-header">Responsive Grid with row and column spacing</h3>

<p class="section-desc">On mobile show one column, on medium screen show 2 column, on larger screen show 3 column</p>

<base-snippet :centered_preview="false" custom_preview_class="h-56 p-4">

  <template v-slot:preview>
    <div class="flex flex-wrap -mb-4 -mx-2">
      <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
        <div class="bg-indigo-200 h-12"></div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
        <div class="bg-indigo-300 h-12"></div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
        <div class="bg-indigo-200 h-12"></div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
        <div class="bg-indigo-300 h-12"></div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
        <div class="bg-indigo-200 h-12"></div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
        <div class="bg-indigo-300 h-12"></div>
      </div>
    </div>
  </template>

  ```html
  <div class="flex flex-wrap -mb-4 -mx-2">
    <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
      <div class="h-12 bg-indigo-200"></div>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
      <div class="h-12 bg-indigo-300"></div>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
      <div class="h-12 bg-indigo-200"></div>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
      <div class="h-12 bg-indigo-300"></div>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
      <div class="h-12 bg-indigo-200"></div>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
      <div class="h-12 bg-indigo-300"></div>
    </div>
  </div>
  ```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/8Xy1iYIJcH">Live Edit</a>
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
      1. Apply justify-center to arrange flex items to center
      2. Also available :
        justify-start, justify-end, justify-center, 
        justify-between, justify-around, justify-evenly
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
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/8Xy1iYIJcH">Live Edit</a>
  </template>

</base-snippet>

<related-ui search_key="layout"></related-ui>