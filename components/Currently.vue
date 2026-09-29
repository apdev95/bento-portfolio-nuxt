<template>
  <Card :colSpan="colSpan || 'col-span-1 md:col-span-1 lg:col-span-1'" :rowSpan="rowSpan || 'lg:row-span-1'">
    <div class="flex flex-col h-full justify-between gap-1.5">
      <!-- Header with live status -->
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-1.5">
          <div class="p-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <span class="text-xs font-bold uppercase tracking-wider text-gray-400">Current Role</span>
        </div>

        <span class="relative flex h-2.5 w-2.5">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
      </div>

      <!-- Role & Company -->
      <div>
        <h3 class="text-sm font-bold text-white tracking-tight leading-snug">
          Software Engineer
        </h3>
        <p class="text-xs text-gray-300 m-0">
          Working at
          <a
            href="https://formability.eu"
            target="_blank"
            rel="noopener noreferrer"
            class="text-red-400 hover:text-red-300 font-bold inline-flex items-center gap-0.5 hover:underline transition-colors"
          >
            <span>Formability</span>
            <svg class="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </p>
      </div>

      <!-- Footer status -->
      <div class="pt-1 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-400 font-mono">
        <span class="text-emerald-400 font-medium">● Active Full-Time</span>
        <span class="text-gray-400">Nuxt &amp; AI</span>
      </div>
    </div>
  </Card>
</template>

<script setup>
defineProps({
  colSpan: String,
  rowSpan: String,
});
</script>