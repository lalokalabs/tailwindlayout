---
title: Layout Sticky Header
description: Layout Sticky Header
alt: Layout Sticky Header
---

<base-snippet :centered_preview="false" custom_preview_class="h-72 p-4">

  <template v-slot:preview>
    <div class="h-full overflow-y-auto border-b border-indigo-300">
      <div class="w-full border border-indigo-300 border-b-0">
        <header class="sticky top-0 bg-indigo-200  px-4 py-2">Sticky header</header>
        <main class="bg-indigo-50 px-4 py-2">
          <p class="mb-60">Scroll down</p>
          <p class="">Oops already at the bottom</p>
        </main>
      </div>
    </div>

  </template>

  ```html
  <div>
    <!-- sticky header -->
    <header class="sticky top-0 ...">Sticky header</header>
    <!-- end sticky header -->

    <main class="p-4">
      <p class="mb-6">Long content</p>
    </main>
  </div>
  ```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/6MiJea4Gaz">Live Edit</a>
  </template>

</base-snippet>

<related-ui search_key="layout"></related-ui>