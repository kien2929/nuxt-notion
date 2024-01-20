<template>
  <div class="h-screen grid grid-cols-1 lg:grid-cols-2 dark:bg-black dark:text-white p-4 md:px-20 lg:px-40 xl:px-60">
    <div class="content">
      <div class="posts">
        <card-content v-for="post in posts" :key="post.id" v-bind="post"/>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const { data: posts } = await useFetch('/api/posts')
</script>
