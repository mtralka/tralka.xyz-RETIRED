<script setup>
import { useMediaQuery } from '@vueuse/core'
import HorizontalCard from '~/components/HorizontalCard.vue'
import HorizontalContainer from '~/components/HorizontalContainer.vue'
import IndexModel from '~/components/IndexModel.vue'
import PageLayout from '~/components/PageLayout.vue'
const data = [
  { link: 'www.google.com', text: 'Github', icon: 'mdi:github' },
  { link: 'www.link.com', text: 'Read more', icon: 'mdi:info' },
]

const isSmallScreen = useMediaQuery('(max-width: 640px')
</script>

<template>
  <div>
    <div class="relative">
      <PageLayout
        class="text-white"
        title="Geospatial Software Engineer"
        subtitle="Matthew Tralka"
      />

      <IndexModel
        class="absolute bottom-0 md:right-0 -right-40 overflow-x-hidden"
      />
    </div>

    <!-- :side-link="{ text: 'all', link: '/projects' }" -->
    <PageLayout
      title="Projects"
      subtitle="featured"
      class="bg-red-700 bg-orange-600"
    >
      <HorizontalContainer end-scroll-text="All Projects">
        <HorizontalCard
          v-for="idx in 4"
          :key="idx"
          title="EOPlatform"
          subtitle="Remote sensing made easy"
          :links="data"
          class="news-scroll__container"
        />
      </HorizontalContainer>
    </PageLayout>
    <PageLayout title="Skills."> TEST </PageLayout>
  </div>
</template>
<style>
.news-scroll__container > .v-hl-container > *:not(:first-child) {
  margin-left: 1rem;
}
</style>
