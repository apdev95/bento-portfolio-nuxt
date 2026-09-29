<template>
  <Card colSpan="col-span-1 md:col-span-2 lg:col-span-4" rowSpan="lg:row-span-1">
    <div class="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
      <div class="flex items-center gap-2 flex-wrap">
        <span>Forked with ♥️ by <strong class="text-gray-200">Andrea Puglisi</strong> using <a href="https://nuxt.com/" target="_blank" rel="noopener noreferrer" class="text-red-500 hover:underline">Nuxt</a> from <a href="https://gianmarco.xyz/" target="_blank" rel="noopener noreferrer" class="text-red-500 hover:underline">Gianmarco Cavallo</a>.</span>
        <span>© {{ currentYear }}</span>
      </div>

      <div class="flex items-center gap-3">
        <a href="https://github.com/apdev95" target="_blank" rel="noopener noreferrer" class="hover:text-red-400 transition-colors">GitHub</a>
        <a href="https://www.linkedin.com/in/andrea-puglisi-9046a255/" target="_blank" rel="noopener noreferrer" class="hover:text-red-400 transition-colors">LinkedIn</a>
        <button type="button" @click="scrollToTop" class="hover:text-white transition-colors cursor-pointer flex items-center gap-1">
          <span>Back to top</span>
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  </Card>
</template>

<script setup>
const currentYear = new Date().getFullYear();

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>