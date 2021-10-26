<template>
  <div>
    <LayoutHeader></LayoutHeader>
    <div class="container mx-auto flex shadow-md">
      <div class="md:w-56 w-72 flex-none border-r">
        <div class="px-4 py-6">
          <sidebar></sidebar>
        </div>
      </div>
      <div class="flex-1 min-w-0 overflow-y-auto bg-gray-100">
        <div class="px-4 py-6">
          <Nuxt />
        </div>
      </div>
    </div>
    <LayoutFooter></LayoutFooter>
  </div>
</template>