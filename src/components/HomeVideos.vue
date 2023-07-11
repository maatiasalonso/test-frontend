<template>
  <div class="mt-10">
    <h1 class="text-2xl font-semibold">Añadir nuevo video</h1>
    <AddVideoButton class="mt-5" @videoRefresh="handleVideoAdded" :emit="emit" />
  </div>
  <div v-if="loadingVideos">
    <VideoList class="mt-10" :videos="videos" @videoRefresh="handleVideoAdded" :emit="emit" />
  </div>
  <div v-else-if="!loadingVideos && videosFounded" class="mt-5">Cargando videos...</div>
  <div v-if="!videosFounded" :class="!loadingVideos && !videosFounded ? ' mt-10' : ''">
    No se encontraron videos.
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, getCurrentInstance } from 'vue'
import AddVideoButton from './AddVideoButton.vue'
import VideoList from './VideoList.vue'
import axios from 'axios'

const loadingVideos = ref(false)
const videosFounded = ref(true)
const videos = reactive([])

getCurrentInstance()

onMounted(() => {
  refreshVideoList()
})

const refreshVideoList = async () => {
  try {
    const response = await axios.get(
      'https://4j4p13sgej.execute-api.us-east-2.amazonaws.com/dev/videos'
    )
    videos.splice(0, videos.length, ...response.data)
    loadingVideos.value = true
    videosFounded.value = true
  } catch (error) {
    console.error('Error retrieving videos:', error)
    videosFounded.value = false
    loadingVideos.value = true
    if (videos.length) {
      loadingVideos.value = false
    }
  }
}
const handleVideoAdded = () => {
  refreshVideoList()
}
</script>
