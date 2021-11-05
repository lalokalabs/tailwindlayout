---
title: Sticky Header
description: Sticky Header
alt: Sticky Header
---

<base-snippet :centered_preview="false" custom_preview_class="h-36">

  <template v-slot:preview>
    <div class="w-full">
      <header class="sticky top-0 bg-indigo-100 shadow px-4 py-2">Sticky header</header>
      <main class="px-4 py-2">
        <p class="mb-6">Scroll down</p>
        <p class="mb-6">Scroll again</p>
        <p class="mb-6">Oops already at the bottom</p>
      </main>
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
