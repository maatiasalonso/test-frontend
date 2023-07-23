<template>
  <TransitionRoot appear :show="isOpen" as="template" v-if="showVideoData">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex items-center justify-center min-h-full p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-6xl p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
            >
              <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                <div class="flex justify-end">
                  <button
                    type="button"
                    class="inline-flex justify-center text-xl font-bold text-black border border-transparent rounded-md"
                    @click="closeModal"
                  >
                    X
                  </button>
                </div>
              </DialogTitle>

              <DialogDescription class="flex justify-center gap-4">
                <div class="w-full h-0 pb-[56.25%] relative">
                  <iframe
                    :src="embedUrl"
                    title="Video Player"
                    class="absolute inset-0 w-full h-full"
                    allowfullscreen
                  ></iframe>
                </div>

                <div class="my-auto basis-3/5">
                  <p class="text-2xl font-semibold">{{ video.snippet.title }}</p>
                  <p class="mt-2 text-lg">{{ truncatedDescription }}</p>
                </div>
              </DialogDescription>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref, defineProps, computed, reactive, onMounted } from 'vue'
import VideosService from '../services/VideosService'
import { TransitionRoot, TransitionChild, Dialog, DialogPanel } from '@headlessui/vue'

const props = defineProps(['videoId'])
const videoId = ref(props.videoId)
const video = ref()
const showVideoData = ref(false)
const isOpen = ref(true)

onMounted(async () => {
  const data = await VideosService.get(videoId.value)
  video.value = reactive(data)
  showVideoData.value = true
})

function closeModal() {
  isOpen.value = false
  showVideoData.value = false
}

const truncatedDescription = computed(() => {
  const maxLength = 200
  if (video.value.snippet.description && video.value.snippet.description.length > maxLength) {
    return video.value.snippet.description.substring(0, maxLength) + '...'
  }
  return video.value.snippet.description
})

const embedUrl = computed(() => {
  return `https://www.youtube.com/embed/${videoId.value}`
})
</script>
