<template>
  <Card :colSpan="colSpan || 'col-span-1 md:col-span-2 lg:col-span-2'" :rowSpan="rowSpan || 'lg:row-span-1'">
    <div class="flex items-center justify-between w-full h-full relative z-10">
      <div>
        <div class="flex items-center gap-1.5 mb-1">
          <span class="text-xs font-bold uppercase tracking-wider text-gray-400">Ragusa Weather</span>
          <span class="text-[10px] font-mono text-gray-400">36.92°N 14.71°E</span>
        </div>
        <p class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight m-0">
          {{ weather.temperature }}
        </p>
      </div>
      <div class="text-3xl sm:text-4xl select-none">
        {{ weather.emoji }}
      </div>
    </div>
    <div class="h-full w-full absolute inset-0 -z-10 overflow-hidden pointer-events-none rounded-xl">
      <img
        class="world-img"
        src="../assets/mdrg.jpg"
        alt="Ragusa Ibla Sicily"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/60 to-transparent"></div>
    </div>
  </Card>
</template>

<script setup>
import { reactive, onMounted } from 'vue';

defineProps({
  colSpan: String,
  rowSpan: String,
});

const weather = reactive({
  temperature: '22 °C',
  emoji: '☀️'
});

const fetchWeather = async () => {
  try {
    const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=36.9273&longitude=14.7145&current=temperature_2m,weather_code');
    if (res.ok) {
      const data = await res.json();
      const temp = Math.round(data.current.temperature_2m);
      const code = data.current.weather_code;
      let emoji = '☀️';
      if (code > 0 && code <= 3) emoji = '⛅';
      else if (code > 3 && code <= 67) emoji = '🌧️';
      else if (code > 67) emoji = '⛈️';

      weather.temperature = `${temp} °C`;
      weather.emoji = emoji;
    }
  } catch (err) {}
};

onMounted(fetchWeather);
</script>