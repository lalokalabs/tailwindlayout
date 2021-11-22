---
title: Vertical Scroll
description: Vertical Scroll Layout
alt: Vertical Scroll
---

<h3 class="section-header">Preview</h3>

<base-snippet :centered_preview="false" custom_preview_class="bg-indigo-50 h-56 flex items-center justify-center">
  <template v-slot:preview>
    <div class="bg-white shadow-md p-3 w-56 max-h-20 overflow-y-auto">
      This is a very short content with vertical scroll. Scroll down to see the end. <br />
      The end
    </div>
  </template>

  ```html
  <!-- 
    1. Set the container max height, eg max-h-20
    2. Enable vertical scroll overflow-y-auto
    3. When the content exceed max height, vertical scroll will be shown
  -->
  <div class="max-h-20 overflow-y-auto ...">
    This is a very short content with vertical scroll. Scroll down to see the end. <br />
    The end
  </div>
  ```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/ifMnUJqq2v">Live Edit</a>
  </template>

</base-snippet>

<related-ui search_key="layout"></related-ui>