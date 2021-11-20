<script setup>
import { useMediaQuery } from '@vueuse/core'
import VueHorizontal from 'vue-horizontal'
import Icon from '~/components/Icon.vue'

const props = defineProps({
  endScrollText: {
    type: String,
    required: false,
    default: 'All',
  },
  linkToRest: {
    type: String,
    required: false,
    default: '',
  },
  showLinkToRest: {
    type: Boolean,
    required: false,
    default: true,
  },
})

const isSmallScreen = useMediaQuery('(max-width: 640px')
</script>
<template>
  <div class="w-full md:space-y-6">
    <div class="w-full overflow-hidden" :class="isSmallScreen ? 'px-10' : ''">
      <vue-horizontal
        ref="horizontal"
        :button="isSmallScreen"
        class="w-full news-scroll__container"
      >
        <slot />
        <div class="flex items-start justify-center">
          <nuxt-link
            v-if="showLinkToRest"
            :to="linkToRest"
            class="
              flex flex-row
              items-center
              justify-center
              w-48
              text-3xl
              tracking-tight
              text-cTitle
              cursor-pointer
              mt-14
              rounded-xl
              group
            "
          >
            <p
              class="
                text-lg
                font-semibold
                leading-3
                cursor-pointer
                group-hover:underline group-hover:text-gray-800
              "
            >
              {{ endScrollText || 'All' }}
            </p>
            <Icon
              icon="ic:outline-keyboard-arrow-right"
              class="
                w-6
                h-6
                cursor-pointer
                md:h-6 md:w-6
                group-hover:text-gray-800
              "
              aria-hidden="true"
            />
          </nuxt-link>
        </div>
      </vue-horizontal>
    </div>
    <div
      v-if="!isSmallScreen"
      class="
        flex flex-row
        items-center
        justify-center
        h-12
        mb-2
        -mt-3
        space-x-6
        md:space-x-2 md:mb-0
      "
    >
      <button
        class="p-4 md:p-0"
        aria-label="Previous News Stories"
        @click="$refs.horizontal.prev()"
      >
        <Icon
          icon="ic:outline-keyboard-arrow-left"
          class="
            w-12
            h-12
            cursor-pointer
            md:h-10 md:w-10
            group-hover:text-gray-800
          "
          aria-hidden="true"
        />
      </button>

      <button
        class="p-4 md:p-0"
        aria-label="Next News Stories"
        @click="$refs.horizontal.next()"
      >
        <Icon
          icon="ic:outline-keyboard-arrow-right"
          class="
            w-12
            h-12
            cursor-pointer
            md:h-10 md:w-10
            group-hover:text-gray-800
          "
          aria-hidden="true"
        />
      </button>
    </div>
  </div>
</template>
