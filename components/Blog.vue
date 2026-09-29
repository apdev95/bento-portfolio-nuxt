<template>
  <Card colSpan="col-span-1 md:col-span-1 lg:col-span-1" rowSpan="lg:row-span-2">
    <div class="flex flex-col h-full justify-between gap-2">
      <div>
        <div class="flex items-center gap-2 mb-1.5">
          <div class="p-1 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <h2 class="text-lg font-bold text-white tracking-tight">Articles &amp; Notes</h2>
        </div>

        <div class="space-y-1.5 mt-2">
          <article
            v-for="(post, index) in posts"
            :key="index"
            class="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-red-500/30 transition-all cursor-pointer"
            @click="activePost = post"
          >
            <div class="flex items-center justify-between text-[9px] text-gray-400 font-mono mb-0.5">
              <span class="text-red-400 font-semibold">{{ post.category }}</span>
              <span>{{ post.readTime }}</span>
            </div>
            <h3 class="text-xs font-semibold text-gray-200 hover:text-white transition-colors leading-tight">
              {{ post.title }}
            </h3>
          </article>
        </div>
      </div>

      <div class="pt-1.5 border-t border-white/5">
        <a
          href="https://github.com/apdev95"
          target="_blank"
          rel="noopener noreferrer"
          class="text-xs text-red-400 hover:text-red-300 font-medium inline-flex items-center gap-1 transition-colors"
        >
          <span>More on GitHub</span>
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

      <!-- Article Modal -->
      <div
        v-if="activePost"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        @click.self="activePost = null"
      >
        <div class="bg-[#171717] border border-white/10 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl relative">
          <button
            type="button"
            @click="activePost = null"
            class="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="space-y-1">
            <div class="flex items-center gap-2 text-xs font-mono text-red-400">
              <span>{{ activePost.category }}</span>
              <span>•</span>
              <span>{{ activePost.readTime }}</span>
            </div>
            <h3 class="text-lg font-bold text-white">{{ activePost.title }}</h3>
          </div>

          <p class="text-xs text-gray-300 leading-relaxed whitespace-pre-line font-normal">
            {{ activePost.content }}
          </p>

          <div class="pt-3 border-t border-white/10 flex justify-end">
            <button
              type="button"
              @click="activePost = null"
              class="custom-btn px-4 py-1.5 text-xs font-medium text-white cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup>
import { ref } from 'vue';

const activePost = ref(null);

const posts = [
  {
    title: 'Building Production AI Agents with Nuxt 3 & Tool Calling',
    category: 'AI & Full-Stack',
    readTime: '4 min read',
    content: `Integrating Large Language Models into enterprise applications requires more than simple prompt chaining. By combining Nuxt 3's server Nitro routes with function-calling capabilities and streaming responses, we can build responsive, resilient AI agents.\n\nKey takeaways:\n1. Use structured outputs (JSON schema) for deterministic downstream workflows.\n2. Stream tokens to UI via Server-Sent Events (SSE) to achieve sub-second TTFB.\n3. Implement semantic guardrails and fallback handlers for edge cases.`
  },
  {
    title: 'Vue 3 + Pinia Architecture for Enterprise State Management',
    category: 'Frontend',
    readTime: '3 min read',
    content: `Clean state management in modern Vue 3 applications starts with modular Pinia stores. Breaking business logic into domain-driven stores keeps components lean and testable.`
  },
  {
    title: 'Optimizing RAG Pipelines with Vector Embeddings & Hybrid Search',
    category: 'GenAI & RAG',
    readTime: '5 min read',
    content: `Retrieval-Augmented Generation (RAG) is the backbone of knowledge-driven AI assistants. Combining dense vector embeddings (e.g. OpenAI text-embedding-3) with sparse keyword retrieval (BM25) ensures accurate context extraction without hallucination.`
  }
];
</script>