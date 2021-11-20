<template>
  <span
    class="
      px-3
      py-1
      text-xs
      font-bold
      tracking-tight
      text-white
      bg-indigo-500
      md:text-sm
      rounded-2xl
    "
  >
    {{ text }}
  </span>
</template>
<script>
export default {
  name: 'Pill',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>
