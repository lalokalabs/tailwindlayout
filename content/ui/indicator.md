---
title: Indicator
description: Indicator
alt: Indicator
---

<h3 class="section-header">Rounded Number Indicator</h3>

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
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/QGajj2pgIW">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-header">Related</h3>

<div class="flex flex-wrap">
  <card-avatar></card-avatar>
  <card-avatar-stack></card-avatar-stack>
  <card-avatar-initial></card-avatar-initial>
</div>