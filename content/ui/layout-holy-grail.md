---
title: Layout Holy Grail
description: Layout Holy Grail
alt: Layout Holy Grail
---

<base-snippet :centered_preview="false" custom_preview_class="h-72">

  <template v-slot:preview>
    <div class="h-full flex flex-col">
      <header class="bg-red-50 text-xs p-2">Header</header>
      <div class="flex-1 flex flex-col sm:flex-row">
        <main class="flex-1 bg-indigo-100 text-xs p-2">Content here</main>
        <nav class="order-first sm:w-32 bg-purple-200 text-xs p-2">Sidebar</nav>
        <aside class="sm:w-32 bg-yellow-100 text-xs p-2">Right Sidebar</aside>
      </div>
      <footer class="bg-gray-100 text-xs p-2">Footer</footer>
    </div>
  </template>

  ```html
  <div class="min-h-screen flex flex-col">
    <header class="bg-red-50">Header</header>

    <div class="flex-1 flex flex-col sm:flex-row">
      <main class="flex-1 bg-indigo-100">Content here</main>

      <nav class="order-first sm:w-32 bg-purple-200">Sidebar</nav>

      <aside class="sm:w-32 bg-yellow-100">Right Sidebar</aside>
    </div>

    <footer class="bg-gray-100">Footer</footer>
  </div>

  ```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/rEb2JJjpdy">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-header">Related</h3>

<div class="flex flex-wrap">
  <card-avatar></card-avatar>
  <card-avatar-stack></card-avatar-stack>
  <card-avatar-initial></card-avatar-initial>
</div>