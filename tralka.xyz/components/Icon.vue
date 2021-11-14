<template>
  <div ref="el" :class="$attrs.class" style="vertical-align: text-bottom" />
</template>

<script>
import '@purge-icons/generated'
import Iconify from '@iconify/iconify'
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  watch: {
    icon: {
      handler() {
        this.update()
      },
      immediate: true,
    },
  },
  methods: {
    update() {
      // eslint-disable-next-line
      this.$nextTick(async () => {
        const el = this.$refs.el
        if (el) {
          const svg = Iconify.renderSVG(this.icon, {})
          if (svg) {
            el.textContent = ''
            el.appendChild(svg)
          } else {
            const span = document.createElement('span')
            span.className = 'iconify'
            span.dataset.icon = this.icon
            el.textContent = ''
            el.appendChild(span)
          }
        }
      })
    },
  },
}
</script>

<style>
span.iconify,
svg.iconify {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background: inherit;
}
</style>
