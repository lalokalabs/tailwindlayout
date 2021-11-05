---
title: Centering
description: Centering
alt: Centering
---

<h3 class="section-header">Preview</h3>

<base-snippet :centered_preview="false" custom_preview_class="h-56 flex items-center justify-center bg-indigo-50">

  <template v-slot:preview>
    <div class="p-2 bg-indigo-400 w-32 h-32">
    </div>
  </template>

```html
<div class="flex items-center justify-center">
  <!-- centered content -->

  <div class="...">
    ...
  </div>

  <!-- end centered content -->
</div>
```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/luraw1qDxs">Live Edit</a>
  </template>

</base-snippet>

<related-ui search_key="centering"></related-ui>
