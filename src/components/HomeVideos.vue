<template>
  <div class="mt-10">
    <h1 class="text-2xl font-semibold">Añadir nuevo video</h1>
    <AddVideoButton class="mt-5" @videoRefresh="handleVideoAdded" :emit="emit" />
  </div>
  <div v-if="loadingVideos" class="mt-5">Cargando videos...</div>
  <div v-else class="mt-10">
    <div v-if="videos.length">
      <VideoList :videos="videos" @videoRefresh="handleVideoAdded" :emit="emit" />
    </div>
    <div v-else>No se encontraron videos.</div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, getCurrentInstance } from 'vue'
import AddVideoButton from './AddVideoButton.vue'
import VideoList from './VideoList.vue'
import VideosService from '../services/VideosService'

const loadingVideos = ref(true)
const videos = reactive([])

getCurrentInstance()

onMounted(() => {
  refreshVideoList()
})

const refreshVideoList = async () => {
  const data = await VideosService.getAll()
  videos.splice(0, videos.length, ...data)
  loadingVideos.value = false
}

const handleVideoAdded = () => {
  refreshVideoList()
}
</script>
