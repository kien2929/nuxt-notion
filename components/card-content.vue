<template>
  <div>
    <NuxtLink class="card-content grid grid-rows-1 md:grid-rows-2 dark:bg-zinc-700 border-zinc-300 border-2" :to="link">
      <div class="date">
        <p>{{ formatDateTime(date) }}</p>
      </div>
      <div class="title">
        <h2>{{ name }}</h2>
      </div>
      <div class="description">
        <p>{{ description }}</p>
      </div>
    </NuxtLink>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
})
const { name, link, description, date } = toRefs(props)
</script>
<style scoped lang="scss">
.card-content {
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
  transition: all 0.2s ease-in-out;
  &:hover, &:focus {
    transform: scale(1.01);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-color: #3B82F6;
  }
  >.date {
    font-size: 0.75rem;
  }
  > .title {
    color: #3B82F6
  }
}
</style>
