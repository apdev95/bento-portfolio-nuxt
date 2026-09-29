<template>
  <Card colSpan="col-span-1 md:col-span-2 lg:col-span-2" rowSpan="lg:row-span-2">
    <div class="flex flex-col h-full justify-between gap-3">
      <!-- Header with category pill -->
      <div class="flex items-center justify-between flex-wrap gap-2">
        <div class="flex items-center gap-2">
          <div class="p-1.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 class="text-lg font-bold text-white tracking-tight">AI &amp; Tech Stack</h2>
        </div>

        <div class="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/5 text-xs">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="[
              'px-2 py-0.5 rounded font-medium transition-all duration-150 cursor-pointer text-[11px]',
              activeTab === tab.id
                ? 'bg-red-500 text-white shadow-sm'
                : 'text-gray-400 hover:text-white'
            ]"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>

      <!-- Skills Grid Container -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 my-auto">
        <div
          v-for="skill in filteredSkills"
          :key="skill.name"
          class="flex items-center justify-between p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 transition-colors"
        >
          <div class="flex items-center gap-2 min-w-0">
            <span class="text-base shrink-0 select-none">{{ skill.icon }}</span>
            <div class="min-w-0">
              <p class="text-xs font-semibold text-gray-200 truncate">{{ skill.name }}</p>
              <p class="text-[10px] text-gray-400 truncate">{{ skill.detail }}</p>
            </div>
          </div>
          <span class="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5 shrink-0">
            {{ skill.badge }}
          </span>
        </div>
      </div>

      <div class="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400">
        <span class="flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
          <span>GenAI &amp; Full-Stack Architecture</span>
        </span>
        <span class="font-mono text-gray-500">{{ filteredSkills.length }} Technologies</span>
      </div>
    </div>
  </Card>
</template>

<script setup>
import { ref, computed } from 'vue';

const activeTab = ref('ai');

const tabs = [
  { id: 'ai', label: '🤖 AI & LLMs' },
  { id: 'frontend', label: '⚡ Frontend' },
  { id: 'backend', label: '🛠 Backend' },
  { id: 'all', label: 'All' }
];

const skills = [
  { name: 'Generative AI & LLMs', icon: '🧠', detail: 'GPT-4o, Claude 3.5, Gemini', category: 'ai', badge: 'LLMs' },
  { name: 'AI Agents & Tools', icon: '🤖', detail: 'Function Calling, Multi-Agent', category: 'ai', badge: 'Agents' },
  { name: 'RAG & Vector DBs', icon: '⚡', detail: 'Pinecone, ChromaDB, pgvector', category: 'ai', badge: 'RAG' },
  { name: 'AI SDKs & Pipelines', icon: '🔮', detail: 'Vercel AI SDK, Ollama, LangChain', category: 'ai', badge: 'Engine' },

  { name: 'Nuxt 3 & Vue 3', icon: '💚', detail: 'SSR, Composition API, Pinia', category: 'frontend', badge: 'Framework' },
  { name: 'TypeScript & JavaScript', icon: '🟦', detail: 'ESNext, Strict Types, Clean Code', category: 'frontend', badge: 'Language' },
  { name: 'Tailwind CSS & Motion', icon: '💅', detail: 'Responsive UI, Fluid Animations', category: 'frontend', badge: 'UI/UX' },
  { name: 'Vite & Performance', icon: '⚡', detail: 'Fast Bundling & Web Vitals', category: 'frontend', badge: 'Build' },

  { name: 'Laravel & PHP', icon: '🛠️', detail: 'Enterprise MVC, REST APIs', category: 'backend', badge: 'Backend' },
  { name: 'Node.js & Python', icon: '🐍', detail: 'FastAPI, Express, AI Microservices', category: 'backend', badge: 'APIs' },
  { name: 'Directus Headless CMS', icon: '🐰', detail: 'Custom APIs & Schemas', category: 'backend', badge: 'CMS' },
  { name: 'PostgreSQL, MySQL & Docker', icon: '⚙️', detail: 'Relational DBs, Containers', category: 'backend', badge: 'Infra' }
];

const filteredSkills = computed(() => {
  if (activeTab.value === 'all') return skills;
  return skills.filter(s => s.category === activeTab.value);
});
</script>
