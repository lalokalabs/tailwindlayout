<template>
  <div class="min-h-screen flex flex-col">
    <LayoutHeader></LayoutHeader>
    <div class="flex-1 container max-w-7xl mx-auto">
      <Nuxt />
    </div>
    <div
      class="
        bg-indigo-50 bg-opacity-50
        border-t border-indigo-50
        px-2
        py-2
        text-center
      "
    >
      <a
        class="text-sm text-indigo-500 font-medium hover:underline"
        href="https://kafkai.com/en/?utm_source=lalokalayouts"
        >SEO-Enhanced Content at Your Fingertips: Try <span class="font-bold">Kafkai</span> for Just $1!</a
      >
    </div>
    <LayoutFooter></LayoutFooter>
    <drawer></drawer>
  </div>
</template>