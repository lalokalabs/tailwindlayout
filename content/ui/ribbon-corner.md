---
title: Ribbon at corner
description: Ribbon at corner
alt: Ribbon at corner
---

<h3 class="section-header">Ribbon at corner</h3>

<base-snippet :centered_preview="false" custom_preview_class="flex items-center justify-center h-64">

  <template v-slot:preview>
    <div class="relative bg-indigo-50 border w-56 h-56 overflow-hidden">
      <div class="absolute left-0 top-0 h-16 w-16">
        <div class="absolute transform -rotate-45 bg-indigo-600 text-center text-white font-semibold py-1"
          style="left: -34px;top: 32px;width: 170px;">Popular</div>
      </div>
    </div>
  </template>

```html
<div class="relative overflow-hidden w-56 h-56 bg-white border">
  <div class="absolute left-0 top-0 h-16 w-16">
    <div
      class="absolute transform -rotate-45 bg-gray-600 text-center text-white font-semibold py-1"
      style="left: -34px;top: 32px;width: 170px;"
    >
      Popular
    </div>
  </div>
</div>
```

  <template v-slot:source>
    <a class="btn btn-primary btn-lg" href="https://play.tailwindcss.com/QzuVb3fznZ">Live Edit</a>
  </template>

</base-snippet>

<related-ui search_key="corner"></related-ui>
