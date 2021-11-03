---
title: Full Screen Background
description: Full Screen Background
alt: Full Screen Background
---

<base-snippet :centered_preview="false" custom_preview_class="h-72">

  <template v-slot:preview>
    <div class="h-full bg-cover bg-no-repeat bg-fixed bg-center"
      style="background-image: url('https://images.unsplash.com/photo-1514897575457-c4db467cf78e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800')">
      <!-- long content -->
      <div class="h-full flex items-center justify-center">
        <div class="w-72 p-2 bg-white shadow-lg my-16 text-gray-600">
          <div class="mb-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s.</div>
        </div>
      </div>
      <!-- end long content -->
    </div>
  </template>

  ```html
  <!-- full screen background container -->
  <div class="min-h-screen bg-cover bg-no-repeat bg-fixed bg-center" style="background-image: url('...')">
    <!-- content div -->
    <div class="h-full flex items-center justify-center">
      ...
    </div>
    <!-- end content div -->
  </div>
  <!-- end full screen background container -->
  ```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/CnpHH4Syb1">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-header">Related</h3>

<div class="flex flex-wrap">
  <card-avatar></card-avatar>
  <card-avatar-stack></card-avatar-stack>
  <card-avatar-initial></card-avatar-initial>
</div>