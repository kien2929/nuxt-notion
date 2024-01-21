<template>
  <NotionRenderer class="dark:bg-zinc-900" :blockMap="blockMap" fullPage prism/>
</template>
<script lang="ts" setup>
const route = useRoute()
const { data: blockMap } = await useAsyncData(`post/${route.params.id}`,
  () => $fetch('/api/page', { query: { url: route.params.id } })
)
useHead({
  title: 'Kien Le 😴',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Kien Le - Blog',
    },
  ],
})
</script>
<style lang="scss">
@import "vue3-notion/dist/style.css";
@import "prismjs/themes/prism.css";
@import "katex/dist/katex.min.css";
html.dark {
  .notion {
    color: antiquewhite ;
  }
}
</style>
