---
title: Indicator
description: Indicator. Use case docked at corner
alt: Indicator
---

<h3 class="section-header">Simple Indicator</h3>

<base-snippet>

  <template v-slot:preview>
    <div style="min-width: 1.75rem;"
      class="inline-flex items-center justify-center h-7 text-xl text-white bg-red-500 rounded-full px-1 mr-2">
      2
    </div>
    <div style="min-width: 1.75rem;"
      class="inline-flex items-center justify-center h-7 text-xl text-white bg-red-500 rounded-full px-1 mr-2">
      200+
    </div>
    <div style="min-width: 1.75rem;"
      class="inline-flex items-center justify-center h-7 text-xl text-white bg-red-500 rounded-full px-1 mr-2">
      9999+
    </div>
  </template>

  ```html
  <!-- min-width must be equal to height, we hardcode the example since Tailwind doesnt have class for min-w-7  -->

  <div style="min-width: 1.75rem;"
    class="inline-flex items-center justify-center h-7 text-xl text-white bg-red-500 rounded-full px-1">
    200+
  </div>
  ```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/CuosZiZPAW">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-header">Docked Corner Indicator</h3>

<base-snippet>

  <template v-slot:preview>
    <div class="flex space-x-5">
      <!-- docked corner indicator -->
      <div class="relative">
        <div class="w-16 h-16 bg-gray-200 border rounded-lg"></div>
        <div class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
          <div style="min-width: 1.75rem;"
            class="inline-flex items-center justify-center h-7 text-xl text-white bg-red-500 rounded-full px-1">2</div>
        </div>
      </div>
      <!-- end docked corner indicator -->
      <!-- docked corner indicator -->
      <div class="relative">
        <div class="w-16 h-16 bg-gray-200 border rounded-lg"></div>
        <div class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
          <div style="min-width: 1.75rem;"
            class="inline-flex items-center justify-center h-7 text-xl text-white bg-red-500 rounded-full px-1">299+
          </div>
        </div>
      </div>
      <!-- end docked corner indicator -->
    </div>
  </template>

  ```html
  <div class="flex space-x-5">
    <!-- docked corner indicator -->
    <div class="relative">

      <!-- icon or background placeholder -->
      <div class="w-16 h-16 bg-gray-200 border rounded-lg"></div>
      <!-- end icon or background placeholder -->

      <!-- indicator position -->
      <div class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
        <!-- indicator -->
        <div style="min-width: 1.75rem;"
          class="inline-flex items-center justify-center h-7 text-xl text-white bg-red-500 rounded-full px-1">2</div>
        <!-- end indicator -->
      </div>
      <!-- end indicator position -->

    </div>
    <!-- end docked corner indicator -->

    <!-- docked corner indicator -->
    <div class="relative">

      <!-- icon or background placeholder -->
      <div class="w-16 h-16 bg-gray-200 border rounded-lg"></div>
      <!-- end icon or background placeholder -->

      <!-- indicator position -->
      <div class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
        <!-- indicator -->
        <div style="min-width: 1.75rem;"
          class="inline-flex items-center justify-center h-7 text-xl text-white bg-red-500 rounded-full px-1">299+</div>
        <!-- end indicator -->
      </div>
      <!-- end indicator position -->
    </div>
    <!-- end docked corner indicator -->

  </div>
  ```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/CuosZiZPAW">Live Edit</a>
  </template>

</base-snippet>

<related-ui search_key="indicator"></related-ui>