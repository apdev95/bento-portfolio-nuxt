<template>
  <Card colSpan="col-span-1 md:col-span-2 lg:col-span-2" rowSpan="lg:row-span-2">
    <div class="flex flex-col h-full justify-between gap-3">
      <!-- Header -->
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h2 class="text-lg font-bold text-white tracking-tight">Featured Projects</h2>
        </div>

        <span class="text-xs text-gray-400 font-mono">Full-Stack &amp; AI</span>
      </div>

      <!-- Project List -->
      <div class="space-y-2 my-auto">
        <div
          v-for="project in projects"
          :key="project.title"
          class="p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-cyan-500/30 transition-all group"
        >
          <div class="flex items-start justify-between gap-2">
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-xs font-bold text-gray-200 group-hover:text-white transition-colors">
                  {{ project.title }}
                </h3>
                <span v-if="project.isAi" class="px-1 py-0.2 text-[9px] font-bold rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  AI
                </span>
              </div>
              <p class="text-[11px] text-gray-400 mt-0.5 leading-tight">
                {{ project.description }}
              </p>
            </div>
            
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="'View ' + project.title"
              class="p-1 rounded bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors shrink-0"
            >
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <div class="flex flex-wrap gap-1 mt-1.5">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="text-[9px] font-mono px-1.5 py-0.2 rounded bg-white/5 text-gray-300 border border-white/5"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <div class="pt-2 border-t border-white/5 flex items-center justify-between text-xs">
        <a
          href="https://github.com/apdev95"
          target="_blank"
          rel="noopener noreferrer"
          class="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 font-medium transition-colors"
        >
          <span>Explore repositories on GitHub</span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  </Card>
</template>

<script setup>
const projects = [
  {
    title: 'Autonomous AI Agents & RAG Pipeline',
    description: 'Multi-agent orchestration system with vector embeddings, tool calling, and live Nuxt 3 stream.',
    tags: ['Nuxt 3', 'Python', 'OpenAI', 'Pinecone', 'RAG'],
    isAi: true,
    link: 'https://github.com/apdev95'
  },
  {
    title: 'Formability Enterprise Platform',
    description: 'High-performance scalable web platform powering modern workflows and API services.',
    tags: ['Vue 3', 'Nuxt 3', 'Laravel', 'Tailwind', 'PostgreSQL'],
    isAi: false,
    link: 'https://formability.eu'
  },
  {
    title: 'Directus Headless AI CMS Engine',
    description: 'Custom content management extensions with generative AI copywriting and automated tagging.',
    tags: ['Directus', 'Node.js', 'LLMs', 'Docker'],
    isAi: true,
    link: 'https://github.com/apdev95'
  }
];
</script>
