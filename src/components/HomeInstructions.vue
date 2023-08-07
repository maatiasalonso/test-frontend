<template>
  <div>
    <h1 class="text-2xl font-semibold mt-8 px-1">Instrucciones</h1>
    <p class="mt-4 text-justify px-1">
      Con esta herramienta podrás agregar, visualizar, y eliminar videos provenientes de YouTube de
      una forma sencilla y organizada. A continuación, te proporcionamos una guía sobre cómo
      utilizar la aplicación:
    </p>
    <div class="mt-4">
      <Disclosure v-slot="{ open }" defaultOpen>
        <DisclosureButton
          class="flex w-full px-2 justify-between rounded-md bg-gray-200 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75"
        >
          <span>Lista de videos</span>
          <ChevronUpIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-gray-600"
          />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-700 text-justify">
          Encontrarás una lista de todos los videos disponibles, donde cada video se muestra con una
          miniatura y tiempo de duración.
        </DisclosurePanel>
      </Disclosure>
    </div>
    <div class="mt-2">
      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="flex w-full px-2 justify-between rounded-md bg-gray-200 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75"
        >
          <span>Añadir video</span>
          <ChevronUpIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-gray-600"
          />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-700 text-justify">
          Para agregar un nuevo video, completa el campo disponible con la URL del video. Luego haz
          clic en el botón "Añadir". Una vez que guardes la información, el nuevo video se agregará
          a la lista principal.
        </DisclosurePanel>
      </Disclosure>
    </div>
    <div class="mt-2">
      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="flex w-full px-2 justify-between rounded-md bg-gray-200 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75"
        >
          <span>Detalles de un video</span>
          <ChevronUpIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-gray-600"
          />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-700 text-justify">
          Al hacer clic en una miniatura de la lista, podrás ver más detalles del vídeo, incluyendo
          el título, la descripción y la duración. También podrás visualizar el video directamente
          en la interfaz de la aplicación.
        </DisclosurePanel>
      </Disclosure>
    </div>

    <div class="mt-2">
      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="flex w-full px-2 justify-between rounded-md bg-gray-200 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75"
        >
          <span>Eliminar video</span>
          <ChevronUpIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-gray-600"
          />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-700 text-justify">
          Para eliminar un video, haz clic en el botón ubicado en la esquina derecha de la
          miniatura. Se pedirá una confirmación para asegurar que deseas eliminar el video. Una vez
          confirmado, el video será eliminado de la lista.
        </DisclosurePanel>
      </Disclosure>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'
</script>
