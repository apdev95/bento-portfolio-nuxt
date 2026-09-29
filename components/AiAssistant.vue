<template>
  <Card colSpan="col-span-1 md:col-span-2 lg:col-span-2" rowSpan="lg:row-span-2">
    <div class="flex flex-col h-full justify-between gap-2.5">
      <!-- Terminal Header -->
      <div class="flex items-center justify-between pb-2 border-b border-white/10">
        <div class="flex items-center gap-2">
          <div class="flex items-center gap-1.5">
            <span class="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
          </div>
          <span class="font-mono text-xs font-semibold text-gray-300 ml-1">andrea-ai@agent:~</span>
        </div>
        <div class="flex items-center gap-1 px-2 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[10px] font-mono">
          <span class="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping"></span>
          <span>AI Assistant Live</span>
        </div>
      </div>

      <!-- Quick Prompt Chips -->
      <div class="flex items-center gap-1.5 overflow-x-auto pb-0.5 text-xs">
        <button
          v-for="(prompt, idx) in promptPresets"
          :key="idx"
          @click="askPreset(prompt)"
          :disabled="isGenerating"
          class="shrink-0 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer text-[11px] disabled:opacity-50"
        >
          {{ prompt.icon }} {{ prompt.shortTitle }}
        </button>
      </div>

      <!-- Terminal Output Window -->
      <div class="flex-1 min-h-[120px] max-h-[170px] overflow-y-auto rounded-xl bg-black/40 border border-white/5 p-3 font-mono text-xs text-gray-300 space-y-2">
        <div class="text-gray-400 text-[11px] flex items-center justify-between">
          <span>Query: <strong class="text-white font-semibold">{{ currentQuery }}</strong></span>
          <span v-if="isGenerating" class="text-purple-400 animate-pulse">Streaming...</span>
        </div>

        <div class="text-gray-200 leading-relaxed whitespace-pre-line text-xs">
          {{ displayedText }}
          <span v-if="isGenerating" class="inline-block w-1.5 h-3.5 bg-red-400 animate-pulse ml-0.5 align-middle"></span>
        </div>
      </div>

      <!-- Input Bar -->
      <div class="flex items-center gap-2 pt-0.5">
        <input
          v-model="userCustomPrompt"
          type="text"
          placeholder="Ask Andrea's AI anything (e.g. 'skills', 'experience')..."
          @keyup.enter="handleCustomSubmit"
          :disabled="isGenerating"
          class="flex-1 px-3 py-1.5 text-xs rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 font-mono transition-colors"
        />

        <button
          type="button"
          @click="handleCustomSubmit"
          :disabled="isGenerating || !userCustomPrompt.trim()"
          class="btn-primary px-3 py-1.5 text-xs font-semibold rounded-lg text-white disabled:opacity-40 cursor-pointer"
        >
          Ask
        </button>
      </div>
    </div>
  </Card>
</template>

<script setup>
import { ref } from 'vue';

const promptPresets = [
  {
    icon: '🤖',
    shortTitle: 'AI Skills',
    query: 'What are Andrea\'s AI & LLM capabilities?',
    answer: `• LLMs: OpenAI (GPT-4o, o3), Claude 3.5 Sonnet, Gemini 2.0, DeepSeek, Local Ollama.
• RAG & Vector DBs: Pinecone, ChromaDB, pgvector semantic search.
• Autonomous Agents: Function Calling, Multi-Agent pipelines, LangChain.
• Full-Stack AI: Nuxt 3 AI SDK streaming & Python/FastAPI microservices.`
  },
  {
    icon: '💼',
    shortTitle: 'Experience',
    query: 'What is Andrea\'s current role and background?',
    answer: `Andrea is a Software Engineer at Formability (https://formability.eu), based in Sicily, Italy.
He builds high-performance web platforms with Vue 3 / Nuxt 3, scalable backends with Laravel & Node.js, and integrates cutting-edge AI automation.`
  },
  {
    icon: '🚀',
    shortTitle: 'Tech Stack',
    query: 'What technologies does Andrea use daily?',
    answer: `Primary Toolbox:
• Frontend: Vue 3, Nuxt 3, TypeScript, Pinia, Tailwind CSS.
• Backend: Laravel, PHP 8+, Node.js, Python, Directus CMS.
• Databases & Cloud: PostgreSQL, MySQL, Docker, Redis, Plesk, Linux.`
  },
  {
    icon: '📬',
    shortTitle: 'Contact',
    query: 'How to get in touch with Andrea?',
    answer: `Reach out anytime:
📧 Email: info@andreapuglisi.io
📱 Phone: +39 331 149 58 34
📍 Location: Ragusa, Sicily, Italy`
  }
];

const currentQuery = ref(promptPresets[0].query);
const displayedText = ref(promptPresets[0].answer);
const isGenerating = ref(false);
const userCustomPrompt = ref('');

const typeWriterEffect = (fullText) => {
  isGenerating.value = true;
  displayedText.value = '';
  let idx = 0;
  const speed = 10;

  const interval = setInterval(() => {
    if (idx < fullText.length) {
      displayedText.value += fullText.charAt(idx);
      idx++;
    } else {
      clearInterval(interval);
      isGenerating.value = false;
    }
  }, speed);
};

const askPreset = (preset) => {
  if (isGenerating.value) return;
  currentQuery.value = preset.query;
  typeWriterEffect(preset.answer);
};

const handleCustomSubmit = () => {
  if (!userCustomPrompt.value.trim() || isGenerating.value) return;
  const q = userCustomPrompt.value.trim().toLowerCase();
  currentQuery.value = userCustomPrompt.value.trim();
  userCustomPrompt.value = '';

  let response = '';
  if (q.includes('ai') || q.includes('llm') || q.includes('gpt') || q.includes('rag')) {
    response = promptPresets[0].answer;
  } else if (q.includes('work') || q.includes('job') || q.includes('experience') || q.includes('formability')) {
    response = promptPresets[1].answer;
  } else if (q.includes('stack') || q.includes('tech') || q.includes('vue') || q.includes('laravel')) {
    response = promptPresets[2].answer;
  } else if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('phone')) {
    response = promptPresets[3].answer;
  } else {
    response = `Andrea is a Software Developer & AI Solutions Engineer based in Italy. Reach him directly at info@andreapuglisi.io or +39 331 149 58 34!`;
  }

  typeWriterEffect(response);
};
</script>
