<template>
  <Card :colSpan="colSpan || 'col-span-1 md:col-span-1 lg:col-span-1'" :rowSpan="rowSpan || 'lg:row-span-1'">
    <div class="flex flex-col h-full justify-between gap-1.5">
      <div class="flex items-center gap-1.5">
        <div class="p-1 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <h2 class="text-xs font-bold uppercase tracking-wider text-gray-400">About Me</h2>
      </div>

      <p class="text-xs text-gray-300 leading-snug font-light m-0">
        Hi, I'm <strong class="text-white font-medium">Andrea</strong>, a software developer &amp; AI engineer from Sicily, bridging full-stack web platforms with <strong class="text-purple-300 font-medium">Generative AI &amp; Autonomous Agents</strong>. ✨
      </p>

      <div class="pt-1 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-400 font-mono">
        <span>📍 Ragusa, Italy</span>
        <span class="text-red-400 font-medium">Italian &amp; English</span>
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