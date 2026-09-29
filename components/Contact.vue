<template>
  <Card colSpan="col-span-1 md:col-span-1 lg:col-span-1" rowSpan="lg:row-span-2">
    <div class="flex flex-col h-full justify-between gap-3">
      <!-- Top header -->
      <div>
        <div class="flex items-center gap-2 mb-1">
          <div class="p-1 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h2 class="text-lg font-bold text-white tracking-tight">Let's Connect</h2>
        </div>
        <p class="text-[11px] text-gray-400 leading-tight">Direct channels &amp; social profiles</p>
      </div>

      <!-- Contact methods -->
      <div class="space-y-1.5">
        <button
          type="button"
          @click="copyText('info@andreapuglisi.io', 'email')"
          class="w-full flex items-center justify-between p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-red-500/30 transition-all text-left cursor-pointer group"
        >
          <div class="flex items-center gap-2 min-w-0">
            <span class="text-xs">📧</span>
            <div class="min-w-0">
              <p class="text-[9px] text-gray-400 uppercase tracking-wider font-mono">Email</p>
              <p class="text-xs text-gray-200 truncate group-hover:text-white font-medium">info@andreapuglisi.io</p>
            </div>
          </div>
          <span class="text-[9px] font-mono text-gray-400 group-hover:text-red-400 shrink-0">
            {{ copiedField === 'email' ? '✓ Copied' : 'Copy' }}
          </span>
        </button>

        <button
          type="button"
          @click="copyText('+39 331 149 58 34', 'phone')"
          class="w-full flex items-center justify-between p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-red-500/30 transition-all text-left cursor-pointer group"
        >
          <div class="flex items-center gap-2 min-w-0">
            <span class="text-xs">📲</span>
            <div class="min-w-0">
              <p class="text-[9px] text-gray-400 uppercase tracking-wider font-mono">Phone / WhatsApp</p>
              <p class="text-xs text-gray-200 truncate group-hover:text-white font-medium">+39 331 149 58 34</p>
            </div>
          </div>
          <span class="text-[9px] font-mono text-gray-400 group-hover:text-red-400 shrink-0">
            {{ copiedField === 'phone' ? '✓ Copied' : 'Copy' }}
          </span>
        </button>
      </div>

      <!-- Social profiles immediately below contacts -->
      <div class="space-y-1">
        <p class="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Social Profiles</p>
        <div class="grid grid-cols-2 gap-1.5 text-xs">
          <a
            href="https://www.linkedin.com/in/andrea-puglisi-9046a255/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-between p-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/10 text-gray-300 hover:text-white transition-all text-[11px] group"
          >
            <span class="flex items-center gap-1.5 truncate">
              <span class="text-[#0077b5]">💼</span>
              <span class="truncate">LinkedIn</span>
            </span>
            <span class="text-[10px] text-gray-500 group-hover:text-gray-300">↗</span>
          </a>

          <a
            href="https://github.com/apdev95"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-between p-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/10 text-gray-300 hover:text-white transition-all text-[11px] group"
          >
            <span class="flex items-center gap-1.5 truncate">
              <span class="text-gray-200">🐙</span>
              <span class="truncate">GitHub</span>
            </span>
            <span class="text-[10px] text-gray-500 group-hover:text-gray-300">↗</span>
          </a>

          <a
            href="https://www.instagram.com/andreapuglisi"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-between p-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/10 text-gray-300 hover:text-white transition-all text-[11px] group"
          >
            <span class="flex items-center gap-1.5 truncate">
              <span class="text-pink-400">📸</span>
              <span class="truncate">Instagram</span>
            </span>
            <span class="text-[10px] text-gray-500 group-hover:text-gray-300">↗</span>
          </a>

          <a
            href="https://www.facebook.com/andrea.puglisi.95/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-between p-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/10 text-gray-300 hover:text-white transition-all text-[11px] group"
          >
            <span class="flex items-center gap-1.5 truncate">
              <span class="text-blue-400">👤</span>
              <span class="truncate">Facebook</span>
            </span>
            <span class="text-[10px] text-gray-500 group-hover:text-gray-300">↗</span>
          </a>
        </div>
      </div>

      <!-- Bottom Location / Availability note -->
      <div class="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-400 font-mono">
        <span>📍 Ragusa, Sicily, Italy</span>
        <span class="text-emerald-400 font-medium">Remote &amp; Global</span>
      </div>
    </div>
  </Card>
</template>

<script setup>
import { ref } from 'vue';

const copiedField = ref('');

const copyText = async (text, field) => {
  try {
    await navigator.clipboard.writeText(text);
    copiedField.value = field;
    setTimeout(() => {
      copiedField.value = '';
    }, 2000);
  } catch (err) {
    if (field === 'email') window.location.href = `mailto:${text}`;
  }
};
</script>