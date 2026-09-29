<template>
  <div
    :class="`bento-card card group overflow-hidden p-6 align-start flex flex-col justify-between relative w-full col-span-1 h-full ${colSpan || 'md:col-span-2'} ${rowSpan || ''}`"
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  colSpan: String,
  rowSpan: String,
});
</script>
