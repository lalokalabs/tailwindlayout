<template>
  <div class="shadow rounded-lg overflow-hidden">
    <div class="flex items-center justify-center h-32 bg-white overflow-auto">
      <slot name="preview"></slot>
    </div>
    <div>
      <slot></slot>
    </div>
    <div class="px-4 py-6 bg-white">
      <slot name="source"></slot>
    </div>
  </div>
</template>