---
title: Card Stacked
description: Card Stacked
alt: Card Stacked
---

<h3 class="section-header">Stacked Card</h3>

<base-snippet :centered_preview="false" custom_preview_class="flex items-center justify-center bg-indigo-50 p-4">

  <template v-slot:preview>
    <!-- card -->
    <div class="max-w-sm flex flex-col rounded-lg overflow-hidden bg-white shadow-lg">
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
  <div class="max-w-sm flex flex-col rounded-lg overflow-hidden bg-white shadow">
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
  ```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/IqCM8jM1Q0">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-header">Stacked Card Group</h3>

<base-snippet :centered_preview="false" custom_preview_class="flex items-center justify-center bg-indigo-50 p-4">

  <template v-slot:preview>
    <div class="flex flex-col sm:flex-row space-x-0 sm:space-x-2 space-y-6 sm:space-y-0">
      <!-- card -->
      <div class="max-w-sm flex-1 flex flex-col rounded-lg overflow-hidden bg-white shadow">
        <!-- card cover -->
        <img class="object-cover w-full"
          src="https://images.unsplash.com/photo-1514897575457-c4db467cf78e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384"
          alt="" />
        <!-- end card cover -->
        <!-- card content -->
        <div class="flex-1 px-6 py-4">
          <div class="font-bold text-xl mb-2">Card Title</div>
          <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
            quia,
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
      <!-- card -->
      <div class="max-w-sm flex-1 flex flex-col rounded-lg overflow-hidden bg-white shadow">
        <!-- card cover -->
        <img class="object-cover w-full"
          src="https://images.unsplash.com/photo-1514897575457-c4db467cf78e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=384"
          alt="" />
        <!-- end card cover -->
        <!-- card content -->
        <div class="flex-1 px-6 py-4">
          <div class="font-bold text-xl mb-2">Card Title</div>
          <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
            quia,
            nulla! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
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
    </div>
  </template>

  ```html
  <div class="flex flex-col sm:flex-row space-x-0 sm:space-x-2 space-y-6 sm:space-y-0">
    <!-- card -->
    <div class="flex-1 max-w-sm flex flex-col rounded-lg overflow-hidden bg-white shadow">
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

    <!-- card -->
    ...
    <!-- end card -->

    <!-- card -->
    ...
    <!-- end card -->
  </div>
  ```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/IqCM8jM1Q0">Live Edit</a>
  </template>

</base-snippet>

<related-ui search_key="card"></related-ui>