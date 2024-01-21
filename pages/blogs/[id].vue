<template>
  <NotionRenderer class="dark:bg-zinc-900" :blockMap="blockMap" fullPage />
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
@import "vue-notion/src/styles.css";
html.dark {
  .notion {
    color: antiquewhite ;
  }
}
</style>
