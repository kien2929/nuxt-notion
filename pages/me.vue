<template>
  <div class="main-page dark:bg-zinc-900 dark:text-white p-4 md:px-20 lg:px-40 xl:px-60">
    Me
  </div>
</template>
<script lang="ts" setup>
useHead({
  title: 'Kien Le 😴',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Kien Le - Blog',
    },
  ],
  htmlAttrs: {
    lang: 'vi',
  }
})
</script>
<style scoped lang="scss">
.main-page {
  min-height: calc(100vh - 53px);
  @media only screen and (min-width: 768px) {
    min-height: calc(100vh - 49px);
  }
}
</style>
