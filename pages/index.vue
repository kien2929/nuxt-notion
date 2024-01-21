<template>
  <div class="h-screen dark:bg-zinc-900 dark:text-white p-4 md:px-20 lg:px-40 xl:px-60">
    <div class="content">
      <div class="title mt-10">Một chiếc blog zui zẻ nơi chia sẻ về kiến thức tự học lập trình của mình 😴</div>
      <div class="posts grid grid-cols-1 lg:grid-cols-2 mt-5">
        <card-content v-for="post in posts" :key="post.id" v-bind="post"/>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const { data: posts } = await useAsyncData('posts', () => $fetch('/api/posts'))
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
