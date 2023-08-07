<script setup>
import HomeVideos from './components/HomeVideos.vue'
import HomeInstructions from './components/HomeInstructions.vue'
</script>

<template>
  <main class="min-h-full p-6 mx-auto bg-gray-100 max-w-7xl lg:px-8">
    <h1 class="text-3xl text-center font-bold mt-4">Gestor de Videos</h1>
    <HomeInstructions />
    <HomeVideos />
  </main>
</template>
