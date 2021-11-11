<template>
  <div class="">
    <LayoutHeader></LayoutHeader>
    <div class="max-w-7xl mx-auto flex">
      <div class="hidden md:block md:w-56 w-72 flex-none border-r">
        <div class="px-4 py-6">
          <sidebar></sidebar>
        </div>
      </div>
      <div class="flex-1 min-w-0 overflow-y-auto">
        <div class="px-4 py-6">
          <Nuxt />
        </div>
      </div>
    </div>
    <LayoutFooter></LayoutFooter>
    <drawer></drawer>
  </div>
</template>