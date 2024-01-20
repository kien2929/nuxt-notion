<template>
  <NotionRenderer :blockMap="blockMap" darkMode fullPage />
</template>
<script lang="ts" setup>
const route = useRoute()
const { data: blockMap } = await useFetch('/api/page', { query: { url: route.params.id }})
</script>
<style>
@import "vue-notion/src/styles.css";
</style>
