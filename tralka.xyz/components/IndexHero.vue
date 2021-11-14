<script setup>
import {
  computed,
  reactive,
  useContext,
  useFetch,
} from '@nuxtjs/composition-api'

// if (process.browser) {
//   const VueTyper = require('vue-typer').VueTyper
// }

const context = useContext()

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
})

const content = reactive({})

const { fetch, fetchState } = useFetch(async () => {
  content.value = await context.$content('index/index-card-one').fetch()
})

const titleOptions = computed(() => {
  content.value.titleOptions.map((el) => el.option)
})
</script>

<template>
  <div class="w-full h-screen text-accent relative bg-primary max-w-6xl">
    <div
      class="
        space-y-3
        absolute
        top-36
        left-10
        md:top-52 md:left-20
        max-w-xs
        w-xs
        md:max-w-2xl md:w-2xl md:min-w-2xl
        flex-shrink-0 flex-grow
      "
    >
      <p
        v-if="subtitle"
        class="font-medium text-xl md:text-2xl lowercase tracking-wide ml-1"
        style="color: #4a6572"
      >
        {{ content.value.subtitle }}
      </p>
      <h1
        class="text-5xl md:text-7xl tracking-wide font-extrabold"
        style="color: #232f34"
      >
        {{ content.value.titleOptions.map((el) => el.option)[0] }}
      </h1>
    </div>
  </div>
</template>
