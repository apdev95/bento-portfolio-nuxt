<template>
  <Card colSpan="col-span-1 md:col-span-2 lg:col-span-2" rowSpan="lg:row-span-1" title="Time zone">
    <div class="flex items-center justify-between w-full h-full">
      <div>
        <div class="flex items-center gap-1.5 mb-1">
          <span class="text-xs font-bold uppercase tracking-wider text-gray-400">Time Zone</span>
          <span class="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/5 border border-white/5 text-gray-400">
            {{ isDayTime ? '☀️ Day' : '🌙 Night' }}
          </span>
        </div>
        <p
          id="timeDisplay"
          class="text-2xl sm:text-3xl lg:text-4xl font-serif tracking-tight text-white m-0"
        >
          {{ currentDateTime }}
        </p>
      </div>

      <div class="text-right hidden sm:block">
        <p class="text-xs font-mono text-gray-300">Europe/Rome (CET)</p>
        <p class="text-[11px] font-mono text-emerald-400">📍 Sicily, Italy</p>
      </div>
    </div>
  </Card>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const currentDateTime = ref('');
const currentHour = ref(12);
let timer = null;

const updateClock = () => {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Rome',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
  currentDateTime.value = formatter.format(now) + ' CET';

  const hourFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Rome',
    hour: 'numeric',
    hour12: false
  });
  currentHour.value = parseInt(hourFormatter.format(now), 10);
};

const isDayTime = computed(() => {
  return currentHour.value >= 7 && currentHour.value < 20;
});

onMounted(() => {
  updateClock();
  timer = setInterval(updateClock, 1000);
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});
</script>
