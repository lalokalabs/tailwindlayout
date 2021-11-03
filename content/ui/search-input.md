---
title: Search Input
description: Search Input
alt: Search Input
---

<p class="page-desc">Simple search with result</p>

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
        <div class="w-40 sm:w-96">
          <div class="relative">
            <input type="search" placeholder="Search" class="w-full rounded-t-lg border border-gray-200" />
            <div class="absolute z-10 w-full border rounded-b-lg shadow divide-y bg-white">
              <a class="block p-2 hover:bg-indigo-50" href="#">Tailwind</a>
              <a class="block p-2 hover:bg-indigo-50" href="#">Bootstrap</a>
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
  <!-- let the container decide the search width so we can reuse it everywhere -->
  <div class="w-72">
    <!-- search input -->

    <div class="relative">
      <input type="search" class="w-full ..." autocomplete="off" placeholder="Search" />

      <!-- search result -->
      <div class="absolute z-10 w-full border divide-y shadow bg-white ...">
        <a class="block p-2 hover:bg-indigo-50 ..." href="#">Tailwind</a>
        <a class="block p-2 hover:bg-indigo-50 ..." href="#">Bootstrap</a>
      </div>
      <!-- end search result -->
    </div>

    <!-- end search input -->
  </div>
  ```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/9RILP2wJZd">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-header">Related</h3>

<div class="flex flex-wrap">
  <card-avatar></card-avatar>
  <card-avatar-stack></card-avatar-stack>
  <card-avatar-initial></card-avatar-initial>
</div>