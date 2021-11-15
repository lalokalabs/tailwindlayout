---
title: Overlay Loading
description: Overlay Loading
alt: Overlay Loading
---

<base-snippet :centered_preview="false" custom_preview_class="flex items-center justify-center bg-indigo-50 p-4">

  <template v-slot:preview>
    <!-- card -->
    <div class="max-w-sm flex flex-col rounded-lg overflow-hidden bg-white shadow-lg relative">
      <!-- loading overlay -->
      <div class="absolute bg-white opacity-60 z-10 h-full w-full flex items-center justify-center">
        <div class="flex items-center">
          <span class="text-3xl mr-4">Loading</span>
          <!-- loading icon -->
          <svg class="animate-spin h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
            </path>
          </svg>
          <!-- end loading icon -->
        </div>
      </div>
      <!-- end loading overlay -->
      <!-- card cover -->
      <img class="object-cover w-full"
        src="https://images.unsplash.com/photo-1514897575457-c4db467cf78e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384"
        alt="" />
      <!-- end card cover -->
      <!-- card content -->
      <div class="flex-1 px-6 py-4">
        <div class="font-bold text-xl mb-2">Card Title</div>
        <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia,
          nulla!</p>
      </div>
      <!-- end card content -->
      <!-- card footer -->
      <div class="px-6 py-4 bg-gray-100">
        <button type="button"
          class="bg-blue-600 hover:bg-blue-700 py-2 px-4 text-sm font-medium text-white border border-transparent rounded-lg focus:outline-none">Action</button>
      </div>
      <!-- end card footer -->
    </div>
    <!-- end card -->
  </template>

  ```html
  <!-- Add drawer container into body or main div -->
  <div class="relative ...">
    Some content ...

    <!-- loading overlay -->

    <div class="absolute bg-white opacity-60 z-10 h-full w-full flex items-center justify-center">
      <div class="flex items-center">
        <span class="text-3xl mr-4">Loading</span>
        <!-- loading icon -->
        <svg class="animate-spin h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
          </path>
        </svg>
        <!-- end loading icon -->
      </div>
    </div>

    <!-- end loading overlay -->
  </div>
  ```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/OH3Qg4lmpQ">Live Edit</a>
  </template>

</base-snippet>

<related-ui search_key="card"></related-ui>