---
title: Media Object
description: Media Object
alt: Media Object
---

<h3 class="section-header">Simple Media Object</h3>

<base-snippet :centered_preview="false" custom_preview_class="">

  <template v-slot:preview>
    <div class="bg-indigo-50 p-8">
      <div class="bg-white p-8">
        <!-- media object -->
        <div class="flex items-start">
          <img class="w-12 mr-4"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="" />
          <div class="flex-1">
            <h3 class="text-xl font-medium mb-2">Standard Media Object</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac nisl quis massa vulputate
              adipiscing.
              Vivamus sit amet risus ligula. Nunc eu pulvinar augue.</p>
          </div>
        </div>
        <!-- end media object -->
      </div>
    </div>
  </template>

  ```html
  <div class="flex items-start">
    <img class="mr-4 ..." src="..." alt="" />

    <div class="flex-1">
      <h3 class="text-xl font-medium mb-2">Standard Media Object</h3>
      <p>Lorem ipsum dolor sit amet</p>
    </div>
  </div>
  ```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/7oMi0icAht">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-header">Ordered Media Object</h3>

<base-snippet :centered_preview="false" custom_preview_class="">

  <template v-slot:preview>
    <div class="bg-indigo-50 p-8">
      <div class="bg-white p-8">
        <!-- media object -->
        <div class="flex items-start">
          <img class="w-12 mr-4 order-1"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="" />
          <div class="flex-1">
            <h3 class="text-xl font-medium mb-2">Standard Media Object</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac nisl quis massa vulputate
              adipiscing.
              Vivamus sit amet risus ligula. Nunc eu pulvinar augue.</p>
          </div>
        </div>
        <!-- end media object -->
      </div>
    </div>
  </template>

  ```html
  <div class="flex items-start">
    <img class="mr-4 order-1 ..." src="..." alt="" />

    <div class="flex-1">
      <h3 class="text-xl font-medium mb-2">Standard Media Object</h3>
      <p>Lorem ipsum dolor sit amet</p>
    </div>
  </div>
  ```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/7oMi0icAht">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-header">Aligned Media Object</h3>

<base-snippet :centered_preview="false" custom_preview_class="">

  <template v-slot:preview>
    <div class="bg-indigo-50 p-8">
      <div class="bg-white p-8">
        <!-- media object -->
        <div class="flex items-start">
          <img class="w-12 mr-4 self-center"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="" />
          <div class="flex-1">
            <h3 class="text-xl font-medium mb-2">Standard Media Object</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac nisl quis massa vulputate
              adipiscing.
              Vivamus sit amet risus ligula. Nunc eu pulvinar augue.</p>
          </div>
        </div>
        <!-- end media object -->
      </div>
    </div>
  </template>

  ```html
  <div class="flex items-start">
    <img class="mr-4 self-center ..." src="..." alt="" />

    <div class="flex-1">
      <h3 class="text-xl font-medium mb-2">Standard Media Object</h3>
      <p>Lorem ipsum dolor sit amet</p>
    </div>
  </div>
  ```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/JTs2tDsFOg">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-header">Nested Media Object</h3>

<base-snippet :centered_preview="false" custom_preview_class="">

  <template v-slot:preview>
    <div class="bg-indigo-50 p-8">
      <!-- nested media object -->
      <div class="bg-white p-8">
        <div class="flex items-start">
          <img class="mr-4 w-12"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="" />
          <div class="flex-1">
            <h3 class="text-xl font-medium mb-2">Standard Media Object</h3>
            <p>Lorem ipsum dolor sit amet</p>
            <!-- nested media object -->
            <div class="mt-6 flex items-start">
              <img class="mr-4 w-12"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="" />
              <div class="flex-1">
                <h3 class="text-xl font-medium mb-2">Nested Media Object</h3>
                <p>Lorem ipsum dolor sit amet</p>
                <!-- nested media object -->
                <div class="mt-6 flex items-start">
                  <img class="mr-4 w-12"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt="" />
                  <div class="flex-1">
                    <h3 class="text-xl font-medium mb-2">Nested Nested Media Object</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
                <!-- end nested media object -->
              </div>
            </div>
            <!-- end nested media object -->
          </div>
        </div>
      </div>
      <!-- end nested media object -->
    </div>
  </template>

  ```html
  <div class="flex items-start">
    <img class="mr-4 ..." src="..." alt="" />

    <div class="flex-1">
      <h3 class="text-xl font-medium mb-2">Standard Media Object</h3>
      <p>Lorem ipsum dolor sit amet</p>

      <!-- nested media object -->

      <div class="mt-6 flex items-start">
        <img class="mr-4 ..." src="..." alt="" />

        <div class="flex-1">
          <h3 class="text-xl font-medium mb-2">Nested Media Object</h3>
          <p>Lorem ipsum dolor sit amet</p>

          <!-- nested media object -->

          <div class="mt-6 flex items-start">
            <img class="mr-4 ..." src="..." alt="" />

            <div class="flex-1">
              <h3 class="text-xl font-medium mb-2">Nested Nested Media Object</h3>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <!-- end nested media object -->
        </div>
      </div>

      <!-- end nested media object -->
    </div>
  </div>
  ```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/Qlkjt6pWoY">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-header">Related</h3>

<div class="flex flex-wrap">
  <card-avatar></card-avatar>
  <card-avatar-stack></card-avatar-stack>
  <card-avatar-initial></card-avatar-initial>
</div>