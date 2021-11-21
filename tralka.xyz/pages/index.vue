<script setup>
import { reactive, useContext, useFetch } from '@nuxtjs/composition-api'
import { useMediaQuery } from '@vueuse/core'
import EarthSatModel from '~/components/EarthSatModel.vue'
import HorizontalCard from '~/components/HorizontalCard.vue'
import HorizontalContainer from '~/components/HorizontalContainer.vue'
import PageLayout from '~/components/PageLayout.vue'

const context = useContext()
const isSmallScreen = useMediaQuery('(max-width: 640px')

const cardOneContent = reactive({})
const projects = reactive({})

const { fetch, fetchState } = useFetch(async () => {
  cardOneContent.value = await context.$content('index/index-card-one').fetch()
  projects.value = await context.$content('projects').without(['body']).fetch()
})
</script>

<template>
  <div>
    <div class="relative">
      <PageLayout
        class="text-white z-[99] bg-black"
        :title="cardOneContent.value.title || ''"
        :subtitle="cardOneContent.value.subtitle || ''"
        :background-color="cardOneContent.value.backgroundColor"
        :titleColor="cardOneContent.value.titleColor"
        :subtitleColor="cardOneContent.value.subtitleColor"
      />

      <EarthSatModel class="absolute h-screen w-screen bottom-0 left-0" />
    </div>
    <div class="relative">
      <PageLayout
        title="Projects"
        subtitle="featured"
        class="bg-amber-600"
        background-color="rgba(217, 119, 6, 1)"
      >
        <HorizontalContainer
          end-scroll-text="All Projects"
          link-to-rest="/projects/"
          class="z-50 relative"
        >
          <HorizontalCard
            v-for="project in projects.value"
            :key="project.slug"
            :title="project.title || ''"
            :subtitle="project.description || ''"
            :card-link="project.path || ''"
            :links="project.links || []"
            class="news-scroll__container"
          />
        </HorizontalContainer>
      </PageLayout>
    </div>
    <PageLayout title="Skills."> TEST </PageLayout>
  </div>
</template>
<style>
.news-scroll__container > .v-hl-container > *:not(:first-child) {
  margin-left: 1rem;
}
</style>
