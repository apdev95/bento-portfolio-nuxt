<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: 'bg-[#0f1015] text-white min-h-screen antialiased overflow-x-hidden overflow-y-auto selection:bg-red-500/30 selection:text-white',
  },
});
</script>
