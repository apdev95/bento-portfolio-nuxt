<template>
  <div class="min-h-screen relative w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
    <!-- Subtle ambient glowing orbs -->
    <div class="fixed top-20 -left-48 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
    <div class="fixed bottom-20 -right-48 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

    <main
      class="text-white mx-auto w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch"
    >
      <slot />
    </main>
  </div>
</template>