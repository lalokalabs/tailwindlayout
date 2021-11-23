<template>
  <div class="flex flex-col h-screen min-h-screen">
    <LayoutHeader></LayoutHeader>
    <div class="flex-1 flex overflow-y-hidden">
      <div
        class="hidden md:block md:w-56 w-72 flex-none border-r overflow-y-auto"
      >
        <div class="px-4 py-6">
          <sidebar></sidebar>
        </div>
      </div>
      <div class="flex-1 min-w-0 overflow-y-auto">
        <div class="p-4 sm:p-8 lg:px-12">
          <Nuxt />
        </div>
        <LayoutFooter></LayoutFooter>
      </div>
    </div>

    <drawer></drawer>
  </div>
</template>