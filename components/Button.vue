<template>
  <button :class="buttonClasses" :aria-label="ariaLabel">
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  rounded: Boolean,
  ariaLabel: String,
});

const buttonClasses = computed(() => {
  return `custom-btn text-xl max-h-[50px] shadow-custom active:shadow-none active:translate-x-[2px] active:translate-y-[2px] text-gray-200 px-5 py-2 border border-primary-500 hover:text-primary-500 transition-colors duration-100 ease-in-out bg-gray-900 cursor-pointer flex items-center justify-center ${
    props.rounded ? 'rounded-full' : 'rounded-lg'
  }`;
});
</script>