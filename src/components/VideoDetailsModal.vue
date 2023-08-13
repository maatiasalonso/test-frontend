<template>
  <TransitionRoot appear :show="isOpen" as="template">
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
                    class="inline-flex justify-center text-xl font-bold text-black border border-transparent rounded-md"
                    @click="closeModal"
                    v-tooltip.top="'Cerrar'"
                    type="text"
                    placeholder="Top"
                  >
                    X
                  </button>
                </div>
              </DialogTitle>

              <DialogDescription>
                <div v-if="!showVideoData">
                  <LoadingVideoDetails />
                </div>
                <div class="sm:flex justify-center gap-4" v-else>
                  <div class="w-full h-0 pb-[56.25%] relative mt-4 sm:mt-0">
                    <iframe
                      :src="embedUrl"
                      title="Video Player"
                      class="absolute inset-0 w-full h-full"
                      allowfullscreen
                    ></iframe>
                  </div>

                  <div class="basis-3/5 mt-5 sm:my-auto">
                    <p class="text-2xl font-semibold">{{ video.snippet.title }}</p>
                    <ScrollPanel class="mt-2" style="width: 100%; height: 200px">
                      <p>{{ video.snippet.description }}</p>
                    </ScrollPanel>
                  </div>
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
import ScrollPanel from 'primevue/scrollpanel'
import { TransitionRoot, TransitionChild, Dialog, DialogPanel } from '@headlessui/vue'
import LoadingVideoDetails from './LoadingVideoDetails.vue'

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

const embedUrl = computed(() => {
  return `https://www.youtube.com/embed/${videoId.value}`
})
</script>
