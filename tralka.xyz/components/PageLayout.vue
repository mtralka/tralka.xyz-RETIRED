<script setup>
import Icon from '~/components/Icon.vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  titleColor: {
    type: String,
    required: false,
    default: '#232f34',
  },
  subtitle: {
    type: String,
    required: false,
    default: '',
  },
  subtitleColor: {
    type: String,
    required: false,
    default: '#4a6572',
  },
  sideLink: {
    type: Object,
    required: false,
    default: null,
  },
})
</script>

<template>
  <div class="w-full h-screen text-accent relative bg-primary">
    <div class="max-w-6xl">
      <div class="pt-36 md:pt-52 md:pl-20 w-full h-full space-y-14">
        <div
          class="space-y-3 flex-shrink-0 flex-grow max-w-xs md:max-w-xl pl-10"
        >
          <p
            v-if="subtitle"
            class="
              font-medium
              text-xl
              md:text-2xl
              uppercase
              tracking-wide
              ml-1
              z-50
              relative
            "
            :style="{ color: subtitleColor }"
          >
            {{ subtitle }}
          </p>
          <div
            class="
              flex flex-col
              justify-center
              md:flex-row md:space-x-10 md:space-y-0
              space-y-7
              md:justify-start
            "
          >
            <h1
              class="text-5xl md:text-7xl tracking-wide font-extrabold z-50"
              :style="{
                color: titleColor,
              }"
            >
              {{ title }}
            </h1>
            <nuxt-link
              v-if="sideLink"
              :to="sideLink.link"
              class="
                flex flex-row
                items-center
                self-start
                justify-around
                md:self-end
                group
              "
            >
              <p
                class="
                  text-sm
                  font-semibold
                  leading-3
                  text-cTitle
                  cursor-pointer
                  uppercase
                  md:text-lg
                  group-hover:underline group-hover:text-gray-800
                "
              >
                {{ sideLink.text }}
              </p>
              <Icon
                icon="ic:keyboard-arrow-right"
                class="
                  w-4
                  h-4
                  cursor-pointer
                  md:h-6 md:w-6
                  group-hover:text-gray-800
                "
                aria-hidden="true"
              />
            </nuxt-link>
          </div>
        </div>
        <div class="w-full h-full px-10">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
