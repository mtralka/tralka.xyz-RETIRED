<script setup>
import { reactive, useContext, useFetch } from '@nuxtjs/composition-api'
import { useMediaQuery } from '@vueuse/core'
import HorizontalCard from '~/components/HorizontalCard.vue'

const context = useContext()
const isSmallScreen = useMediaQuery('(max-width: 640px')

const projects = reactive({})
const { fetch, fetchState } = useFetch(async () => {
  const test = await context.$content('projects').without(['body']).fetch()
  console.log(test)
  projects.value = test
})
</script>

<template>
  <div class="bg-cool-gray-200 h-screen">
    <div class="flex flex-col items-center">
      <div
        class="
          grid grid-cols-1
          gap-6
          p-10
          mx-auto
          md:w-9/12
          sm:grid-cols-1
          md:grid-cols-2
          lg:grid-cols-2
          xl:grid-cols-2
        "
      >
        <HorizontalCard
          v-for="project in projects.value"
          :key="project.slug"
          :title="project.title || ''"
          :subtitle="project.description || ''"
          :card-link="project.path || ''"
          :links="project.links || []"
        />
      </div>
    </div>
  </div>
</template>
