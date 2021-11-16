---
title: Fixed at screen
description: Fixed at screen
alt: Fixed at screen
---

<h3 class="section-header">Fixed Bottom Right Screen</h3>

<base-snippet :centered_preview="false" custom_preview_class="h-72 p-4">

  <template v-slot:preview>
    <div class="h-full flex flex-col border border-indigo-300 text-xs relative">
      <header class="p-2 bg-indigo-50 border-b border-indigo-300">Header</header>
      <main class="flex-1 bg-indigo-50 border-b border-indigo-300 p-2">
        <div class="mb-20">Content</div>
      </main>
      <footer class="p-2 bg-indigo-50">Footer</footer>
      <div class="absolute bottom-0 right-0">
        <!-- example chat box -->
        <div class="w-32 h-40 mr-4 flex flex-col border border-indigo-300 border-b-0 bg-indigo-200">
          <div class="p-2">
            <h3>Chat Box</h3>
          </div>
        </div>
        <!-- end example chat box -->
      </div>
    </div>
  </template>

  ```html
  <div>
    <!-- fixed bottom right screen -->
    <div class="fixed bottom-0 right-0 ...">
      <!-- some content eg chat box -->
    </div>
    <!-- end fixed bottom right screen -->
  </div>
  ```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/NfysMLVF0g">Live Edit</a>
  </template>

</base-snippet>

<related-ui search_key="fixed"></related-ui>