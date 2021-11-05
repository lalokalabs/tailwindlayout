---
title: Centering Row Items
description: Centering Row Items
alt: Centering Row Items
---

<p class="page-desc">Notice that site logo, search box, and navigation is align centered to the header</p>

<base-snippet :centered_preview="false" custom_preview_class="h-32 bg-indigo-50">

  <template v-slot:preview>
    <div class="bg-white shadow">
      <div class="flex items-center justify-between h-16 px-2">
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
          </svg>
        </a>
        <input type="search" class="w-32 sm:w-96 h-8 rounded-lg border border-gray-200" />
        <ul class="flex space-x-4">
          <li>
            <a class="hover:underline" href="#">About Us</a>
          </li>
          <li>
            <a class="hover:underline" href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </template>

```html
<div class="flex items-center ...">
  <!-- 
    Add row items example logo, search, navigation
    flex items-center will make sure div child will be centered
   -->
</div>
```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/De9dimQpH7">Live Edit</a>
  </template>

</base-snippet>

<related-ui search_key="centering"></related-ui>
