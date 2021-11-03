---
title: Layout Sidebar
description: Layout Sidebar
alt: Layout Sidebar
---

<base-snippet :centered_preview="false" custom_preview_class="h-72">

  <template v-slot:preview>
    <div class="h-full flex">
      <nav class="w-20 sm:w-56 flex-none bg-indigo-200 p-2">
        Sidebar
      </nav>
      <main class="flex-1 min-w-0 overflow-auto bg-indigo-50 p-2">
        <div class="mb-12">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a
          type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
          containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
          versions
          of Lorem Ipsum.
        </div>
        <div class="mb-12">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a
          type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
          containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
          versions
          of Lorem Ipsum.
        </div>
      </main>
    </div>
  </template>

  ```html
  <div class="min-h-screen flex">
    <nav class="w-56 flex-none ...">
      Sidebar
    </nav>

    <main class="flex-1 min-w-0 overflow-auto ...">
      ...
    </main>
  </div>
  ```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/DajrsYdd40">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-header">Related</h3>

<div class="flex flex-wrap">
  <card-avatar></card-avatar>
  <card-avatar-stack></card-avatar-stack>
  <card-avatar-initial></card-avatar-initial>
</div>