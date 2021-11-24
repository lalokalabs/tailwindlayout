---
title: Layout Independent Scroll
description: Layout Independent Scroll
alt: Layout Independent Scroll
---

<p class="section-desc">Notice that left sidebar, main content and right sidebar has their own independent scrollbar.
</p>

<base-snippet :centered_preview="false" custom_preview_class="h-72 p-4">

  <template v-slot:preview>
    <div class="h-full flex flex-col">
      <header class="bg-indigo-50 border border-indigo-300 text-xs p-2">Header</header>
      <div class="flex-1 flex flex-row overflow-y-hidden">
        <main class="flex-1 bg-indigo-50 border-l border-r border-indigo-300 text-xs p-2 overflow-y-auto">
          <div class="leading-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been
            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled
            it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets
            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
            including
            versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
            and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets
            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
            including
            versions of Lorem Ipsum.</div>
        </main>
        <nav class="order-first w-20 sm:w-32 bg-indigo-50 text-xs p-2 border-l border-indigo-300 overflow-y-auto">
          <ul class="text-xs">
            <li><a href="#" class="block hover:bg-indigo-50 py-2 px-2 rounded">Avatar</a></li>
            <li><a href="#" class="block hover:bg-indigo-50 py-2 px-2 rounded">Avatar Initial</a></li>
            <li><a href="#" class="block hover:bg-indigo-50 py-2 px-2 rounded">Avatar Presence</a> </li>
            <li><a href="#" class="block hover:bg-indigo-50 py-2 px-2 rounded">Avatar Stack</a></li>
            <li><a href="#" class="block hover:bg-indigo-50 py-2 px-2 rounded">Badge</a></li>
            <li><a href="#" class="block hover:bg-indigo-50 py-2 px-2 rounded">Box Arrow</a></li>
            <li><a href="#" class="block hover:bg-indigo-50 py-2 px-2 rounded">Button</a></li>
            <li><a href="#" class="block hover:bg-indigo-50 py-2 px-2 rounded">Card Stacked</a></li>
          </ul>
        </nav>
        <aside class="w-20 sm:w-32 bg-indigo-50 text-xs p-2 border-r border-indigo-300 overflow-y-auto">
          <ul class="text-xs">
            <li><a href="#" class="block hover:bg-indigo-50 py-2 px-2 rounded">Avatar</a></li>
            <li><a href="#" class="block hover:bg-indigo-50 py-2 px-2 rounded">Avatar Initial</a></li>
            <li><a href="#" class="block hover:bg-indigo-50 py-2 px-2 rounded">Avatar Presence</a> </li>
            <li><a href="#" class="block hover:bg-indigo-50 py-2 px-2 rounded">Avatar Stack</a></li>
            <li><a href="#" class="block hover:bg-indigo-50 py-2 px-2 rounded">Badge</a></li>
            <li><a href="#" class="block hover:bg-indigo-50 py-2 px-2 rounded">Box Arrow</a></li>
            <li><a href="#" class="block hover:bg-indigo-50 py-2 px-2 rounded">Button</a></li>
            <li><a href="#" class="block hover:bg-indigo-50 py-2 px-2 rounded">Card Stacked</a></li>
          </ul>
        </aside>
      </div>
      <footer class="bg-indigo-50 border border-indigo-300 text-xs p-2">Footer</footer>
    </div>
  </template>

  ```html
  <!-- 
  1. Apply h-screen at flex flex-col layout 
  2. Apply overflow-y-hidden at main container
  3. Apply overflow-y-auto to column that needs scroll
   -->
  <div class="min-h-screen flex flex-col h-screen">
    <header class="bg-red-50">Header</header>
    <!-- main container -->
    <div class="flex-1 flex flex-row overflow-y-hidden">
      <main class="flex-1 bg-indigo-100 overflow-y-auto">Content here</main>

      <nav class="order-first sm:w-32 bg-purple-200 overflow-y-auto">Sidebar</nav>

      <aside class="sm:w-32 bg-yellow-100 overflow-y-auto">Right Sidebar</aside>
    </div>
    <!-- end main container -->

    <footer class="bg-gray-100">Footer</footer>
  </div>
  ```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/hM64tmFSLd">Live Edit</a>
  </template>

</base-snippet>

<related-ui search_key="layout"></related-ui>