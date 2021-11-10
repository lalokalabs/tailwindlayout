---
title: Layout Holy Grail
description: Layout Holy Grail
alt: Layout Holy Grail
---

<base-snippet :centered_preview="false" custom_preview_class="h-72 p-4">

  <template v-slot:preview>
    <div class="h-full flex flex-col">
      <header class="bg-indigo-50 border border-indigo-300 text-xs p-2">Header</header>
      <div class="flex-1 flex flex-col sm:flex-row">
        <main class="flex-1 bg-indigo-50 border sm:border-t-0 sm:border-b-0 border-indigo-300 text-xs p-2">Content here</main>
        <nav class="order-first sm:w-32 bg-indigo-50 text-xs p-2 border-l border-r sm:border-r-0 border-indigo-300">Sidebar</nav>
        <aside class="sm:w-32 bg-indigo-50 text-xs p-2 border-r border-l sm:border-l-0 border-indigo-300">Right Sidebar</aside>
      </div>
      <footer class="bg-indigo-50 border border-indigo-300 text-xs p-2">Footer</footer>
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

<related-ui search_key="layout"></related-ui>
