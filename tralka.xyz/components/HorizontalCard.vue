<script setup>
import Icon from '@/components/Icon.vue'
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
    default: '',
  },
  cardLink: {
    type: String,
    required: false,
    default: '',
  },
  links: {
    type: Array,
    required: false,
    default: () => [],
  },
})
</script>
<template>
  <nuxt-link
    :to="cardLink || ''"
    class="
      bg-white
      h-auto
      md:h-40
      w-full
      max-w-full
      md:max-w-[26rem] md:w-[26rem]
      bg-opacity-40
      rounded-2xl
      overflow-hidden
      py-6
      pr-3
      pl-4
      flex flex-col
      items-center
      justify-evenly
      space-y-9
    "
  >
    <div class="w-full space-y-1">
      <p class="text-2xl md:text-3xl font-bold text-left text-cTitle">
        {{ title || '' }}
      </p>
      <p class="text-lg md:text-xl font-medium text-gray-800">
        {{ subtitle || '' }}
      </p>
    </div>
    <div class="flex justify-evenly items-center space-x-6">
      <nuxt-link
        v-for="el in links"
        :key="el.link"
        :to="el.link"
        class="hover:underline"
      >
        <div class="flex justify-evenly items-center space-x-1">
          <Icon v-if="el.icon" :icon="el.icon" class="h-5 w-5" />
          <p class="font-light">
            {{ el.text || '' }}
          </p>
        </div>
      </nuxt-link>
      <nuxt-link :to="cardLink" class="hover:underline">
        <div class="flex justify-evenly items-center space-x-1">
          <p class="font-light">Read more</p>
        </div>
      </nuxt-link>
    </div>
  </nuxt-link>
  <!-- </nuxt-link> -->
</template>
