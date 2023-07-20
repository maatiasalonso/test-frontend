<template>
  <div class="grid grid-cols-12 mt-16 md:gap-16 sm:gap-12 gap-y-10">
    <div class="col-span-12 lg:col-span-4 sm:col-span-6" v-for="video in videos" :key="video.id">
      <figure
        @click="
          ;(showVideoModal[video.id] = !showVideoModal[video.id]), setCurrentVideoId(video.id)
        "
        class="w-full bg-white shadow-md rounded-xl hover:cursor-pointer"
      >
        <div class="relative flex justify-end">
          <img
            :src="
              video.snippet.thumbnails.standard
                ? video.snippet.thumbnails.standard.url
                : video.snippet.thumbnails.default.url
            "
            :alt="video.title"
            class="w-full h-full rounded-lg"
          />

          <button
            @click.stop=";(showModal[video.id] = !showModal[video.id]), setCurrentVideoId(video.id)"
            class="absolute flex items-center justify-center px-1 py-1 mt-2 mr-2 text-white bg-gray-900"
          >
            <CloseIcon />
          </button>

          <span class="absolute flex mr-2 font-bold text-white bg-gray-900 right-2 bottom-2">
            {{ formatDuration(video.contentDetails.duration) }}
          </span>

          <DeleteModal
            v-if="showModal[video.id]"
            @close="showModal[video.id] = false"
            @cancel="hideModal"
            :videoId="video.id"
            @videoRefresh="handleVideoAdded"
          />
        </div>
      </figure>
      <VideoDetailsModal
        v-if="showVideoModal[video.id]"
        @close="showVideoModal[video.id] = false"
        @cancel="hideVideoModal"
        :videoId="video.id"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, getCurrentInstance } from 'vue'
import DeleteModal from './DeleteModal.vue'
import VideoDetailsModal from './VideoDetailsModal.vue'
import CloseIcon from './icons/CloseIcon.vue'

const showVideoModal = reactive({})
const showModal = reactive({})
const props = defineProps(['videos'])
const instance = getCurrentInstance()
const videos = ref(props.videos)
const currentVideoId = ref('')

const hideModal = () => {
  showModal[currentVideoId.value] = false
}
const hideVideoModal = () => {
  showVideoModal[currentVideoId.value] = false
}

const setCurrentVideoId = (videoId) => {
  currentVideoId.value = videoId
}

function formatDuration(duration) {
  const durationPattern = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/
  const matches = duration.match(durationPattern)
  const hours = matches[1] ? parseInt(matches[1]) : 0
  const minutes = matches[2] ? parseInt(matches[2]) : 0
  const seconds = matches[3] ? parseInt(matches[3]) : 0
  let formattedDuration = ''
  if (hours > 0) {
    formattedDuration += `${hours.toString().padStart(2, '0')}:`
  }
  formattedDuration += `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`
  return formattedDuration
}

const handleVideoAdded = () => {
  instance.emit('videoRefresh')
}
</script>
