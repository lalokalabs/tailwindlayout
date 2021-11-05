---
title: Search Result
description: Search Result example with search input
alt: Search Result example with search input
---

<p class="page-desc">Simple search with result</p>

<base-snippet :centered_preview="false" custom_preview_class="h-72 bg-indigo-50">

  <template v-slot:preview>
    <div class="bg-white shadow">
      <div class="flex items-center justify-between h-16 px-2">
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
          </svg>
        </a>
        <div class="w-40 sm:w-96">
          <div class="relative">
            <input type="search" placeholder="Search" class="w-full rounded-lg border border-gray-200" />
            <div class="absolute z-10 w-full border rounded-lg shadow divide-y max-h-52 overflow-y-auto bg-white mt-1">
              <a class="block p-2 hover:bg-indigo-50" href="#">Tailwind</a>
              <a class="block p-2 hover:bg-indigo-50" href="#">Bootstrap</a>
              <a class="block p-2 hover:bg-indigo-50" href="#">Foundation</a>
              <a class="block p-2 hover:bg-indigo-50" href="#">Bulma</a>
              <a class="block p-2 hover:bg-indigo-50" href="#">Material UI</a>
              <a class="block p-2 hover:bg-indigo-50" href="#">Semantic UI</a>
              <a class="block p-2 hover:bg-indigo-50" href="#">Element UI</a>
              <a class="block p-2 hover:bg-indigo-50" href="#">Ant Design</a>
            </div>
          </div>
        </div>
        <ul class="flex space-x-4">
          <li>
            <a class="hover:underline" href="#">About Us</a>
          </li>
        </ul>
      </div>
    </div>
  </template>

  ```html
  <!-- let the parent decide the search width so we can reuse it everywhere -->
  <div class="w-72">

    <div class="relative">

      <!-- search input -->
      <input type="search" class="w-full ..." autocomplete="off" placeholder="Search" />
      <!-- end search input -->

      <!-- search result -->
      <div class="absolute z-10 w-full border divide-y shadow max-h-72 overflow-y-auto bg-white ...">
        <a class="block p-2 hover:bg-indigo-50 ..." href="#">Tailwind</a>
        <a class="block p-2 hover:bg-indigo-50 ..." href="#">Bootstrap</a>
      </div>
      <!-- end search result -->
    </div>


  </div>
  ```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/2oXfjzV7JX">Live Edit</a>
  </template>

</base-snippet>

<related-ui search_key="input"></related-ui>