---
title: Fixed at side
description: Fixed at side
alt: Fixed at side
---

<h3 class="section-header">Fixed Right Side</h3>

<base-snippet :centered_preview="false" custom_preview_class="h-56 bg-indigo-50 relative">

  <template v-slot:preview>
    <!-- right side -->
    <div
      class="absolute right-0 top-2/4 transform -translate-y-1/2 w-8 h-24 bg-indigo-500 text-white flex items-center justify-center">
    </div>
    <!-- end right side -->

  </template>

```html
<div class="relative ...">
  <!-- fixed right side -->
  <div
    class="absolute right-0 top-2/4 transform -translate-y-1/2 w-8 h-24 bg-indigo-500 text-white flex items-center justify-center"
  ></div>
  <!-- end fixed right side -->
</div>
```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/omYUfk3PeV">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-header">Fixed Left Side</h3>

<base-snippet :centered_preview="false" custom_preview_class="h-56 bg-indigo-50 relative">

  <template v-slot:preview>
    <!-- left side -->
    <div
      class="absolute top-2/4 left-0 transform -translate-y-1/2 w-8 h-24 bg-indigo-500 text-white flex items-center justify-center">
    </div>
    <!-- end left side -->

  </template>

```html
<div class="relative ...">
  <!-- fixed left side -->
  <div
    class="absolute top-0 left-2/4 transform -translate-x-1/2 w-48 h-8 bg-indigo-500 text-white flex items-center justify-center"
  ></div>
  <!-- end fixed left side -->
</div>
```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/omYUfk3PeV">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-header">Fixed Top Side</h3>

<base-snippet :centered_preview="false" custom_preview_class="h-56 bg-indigo-50 relative">

  <template v-slot:preview>
    <!-- top side -->
    <div
      class="absolute top-0 left-2/4 transform -translate-x-1/2 w-48 h-8 bg-indigo-500 text-white flex items-center justify-center">
    </div>
    <!-- end top side -->

  </template>

```html
<div class="relative ...">
  <!-- fixed top side -->
  <div
    class="absolute top-0 left-2/4 transform -translate-x-1/2 w-48 h-8 bg-indigo-500 text-white flex items-center justify-center"
  ></div>
  <!-- end fixed top side -->
</div>
```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/omYUfk3PeV">Live Edit</a>
  </template>

</base-snippet>

<h3 class="section-header">Fixed Bottom Side</h3>

<base-snippet :centered_preview="false" custom_preview_class="h-56 bg-indigo-50 relative">

  <template v-slot:preview>
    <!-- bottom side -->
    <div
      class="absolute bottom-0 left-2/4 transform -translate-x-1/2 w-48 h-8 bg-indigo-500 text-white flex items-center justify-center">
    </div>
    <!-- end bottom side -->

  </template>

```html
<div class="relative ...">
  <!-- fixed bottom side -->
  <div
    class="absolute bottom-0 left-2/4 transform -translate-x-1/2 w-48 h-8 bg-indigo-500 text-white flex items-center justify-center"
  ></div>
  <!-- end fixed bottom side -->
</div>
```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/omYUfk3PeV">Live Edit</a>
  </template>

</base-snippet>

<related-ui search_key="fixed"></related-ui>
