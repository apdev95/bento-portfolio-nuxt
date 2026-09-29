<template>
  <Card colSpan="col-span-1 md:col-span-2 lg:col-span-3" rowSpan="lg:row-span-2">
    <div class="flex flex-col justify-between h-full relative z-10 gap-5">
      <!-- Top header status pill -->
      <div class="flex items-center justify-between gap-3 flex-wrap">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Available for Full-Stack &amp; AI Engineering</span>
        </div>

        <div class="text-xs text-gray-400 font-mono flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
          <span>📍</span> Ragusa, Sicily, Italy
        </div>
      </div>

      <!-- Main bio content -->
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div class="flex-1 space-y-2">
          <div class="flex items-center gap-2">
            <span class="text-xs font-semibold uppercase tracking-widest text-red-500">Software Developer &amp; AI Engineer</span>
            <span class="text-gray-600">•</span>
            <span class="text-xs text-gray-400 font-light">Welcome <span id="wave">👋</span></span>
          </div>

          <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Hi, I'm <span class="bg-gradient-to-r from-white via-gray-100 to-red-400 bg-clip-text text-transparent">Andrea Puglisi</span>
          </h1>

          <p class="text-gray-300 font-normal text-base leading-relaxed max-w-xl">
            Passionate <strong class="text-white font-semibold">Full-Stack Developer</strong> and <strong class="text-red-400 font-semibold">AI Solutions Engineer</strong> specializing in modern web applications (Vue 3, Nuxt 3, Laravel, Node.js) and integrating state-of-the-art <strong class="text-purple-300 font-semibold">Generative AI, LLMs &amp; Autonomous Agents</strong>. 😎
          </p>
        </div>

        <!-- Memoji Avatar & Shuffle -->
        <div class="relative shrink-0 self-center md:self-auto group">
          <div class="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-tr from-red-500/20 via-purple-500/10 to-transparent p-1 border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-sm">
            <img
              :src="'/me/' + photoSrc"
              :alt="'Andrea Puglisi - Memoji ' + photoIndex"
              width="144"
              height="144"
              class="w-full h-full object-contain select-none transition-transform duration-500 group-hover:scale-105 pointer-events-none drop-shadow-xl"
              loading="eager"
            />
            
            <button
              type="button"
              aria-label="Shuffle avatar pose"
              title="Click to randomize avatar pose"
              @click="randomizeMyPhoto"
              class="absolute bottom-2 right-2 p-1.5 rounded-lg bg-black/70 hover:bg-red-500 text-white backdrop-blur-md border border-white/10 transition-all duration-200 shadow-lg cursor-pointer active:scale-95"
            >
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
          <div class="text-center mt-1">
            <span class="text-[10px] font-mono text-gray-500">Pose {{ photoIndex }}/17 • Click 🔀</span>
          </div>
        </div>
      </div>

      <!-- Action buttons & verified social links -->
      <div class="flex items-center justify-between gap-3 flex-wrap pt-2 border-t border-white/5">
        <div class="flex items-center gap-2.5 flex-wrap">
          <a
            href="https://github.com/apdev95"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            class="custom-btn px-3.5 py-2 text-xs font-semibold text-gray-200 flex items-center gap-1.5"
          >
            <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/andrea-puglisi-9046a255/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            class="custom-btn px-3.5 py-2 text-xs font-semibold text-gray-200 flex items-center gap-1.5"
          >
            <svg class="w-4 h-4 text-[#0077b5]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.69 1.69 0 0 0 1.7-1.68c0-.93-.76-1.69-1.7-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.74v-8.37H5.07v8.37h2.78z" />
            </svg>
            <span>LinkedIn</span>
          </a>

          <button
            type="button"
            @click="copyEmail"
            aria-label="Copy email"
            class="custom-btn px-3.5 py-2 text-xs font-semibold text-gray-200 flex items-center gap-1.5 cursor-pointer"
          >
            <span>📧</span>
            <span>{{ emailCopied ? 'Copied! ✨' : 'info@andreapuglisi.io' }}</span>
          </button>
        </div>

        <div>
          <a
            href="mailto:info@andreapuglisi.io"
            class="btn-primary px-4 py-2 text-xs font-semibold rounded-xl text-white inline-flex items-center gap-1.5"
          >
            <span>Get in touch</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup>
import { ref } from 'vue';

const photoIndex = ref(10);
const photoSrc = ref('me10.webp');
const emailCopied = ref(false);

const randomizeMyPhoto = () => {
  const totalImages = 17;
  let randomIndex = Math.floor(Math.random() * totalImages) + 1;
  if (randomIndex === photoIndex.value) {
    randomIndex = (randomIndex % totalImages) + 1;
  }
  photoIndex.value = randomIndex;
  photoSrc.value = `me${randomIndex}.webp`;
};

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText('info@andreapuglisi.io');
    emailCopied.value = true;
    setTimeout(() => {
      emailCopied.value = false;
    }, 2500);
  } catch (e) {
    window.location.href = 'mailto:info@andreapuglisi.io';
  }
};
</script>