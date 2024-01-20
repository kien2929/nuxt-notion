<template>
  <header>
    <nav
      class="bg-white text-black dark:bg-black dark:text-white flex flex-col md:flex-row md:justify-between border-b-2 ease-linear duration-500 py-1 md:px-20 lg:px-40 xl:px-60">
      <div class="left-menu flex flex-col md:flex-row">
        <div class="mobile-bar flex flex-row justify-between items-center py-2 md:py-0">
          <div class="brand px-4 cursor-pointer font-bold">Kien Le</div>
          <div class="btn-collapse md:hidden flex items-center justify-center px-4" @click="isClick = !isClick">
            <button v-if="isShow">
              <icons-close class="stroke-black fill-black dark:stroke-white dark:fill-white"/>
            </button>
            <button v-else>
              <icons-menu class="stroke-black fill-black dark:stroke-white dark:fill-white"/>
            </button>
          </div>
        </div>
        <div v-if="isShow" class="menu-items flex flex-col md:flex-row md:gap-0">
          <div class="item hover:border-l-4 md:hover:border-l-0 md:hover:border-b-4 md:hover:-mb-1 md:pl-4 md:pr-4 flex items-center pl-4 md:pl-0 py-2 md:py-0 cursor-pointer">Blog </div>
          <div class="item hover:border-l-4 md:hover:border-l-0 md:hover:border-b-4 md:hover:-mb-1 md:pl-4 md:pr-4 flex items-center pl-4 md:pl-0 py-2 md:py-0 cursor-pointer">Me</div>
        </div>
      </div>
      <div v-if="isShow" class="right-menu flex flex-col md:flex-row md:gap-1">
        <select-mode class="pl-4 md:pl-0" />
        <div class="me flex flex-col md:flex-row md:pr-4">
          <div class="avatar pl-4 md:pl-0 py-2 md:py-0 cursor-pointer">Avatar</div>
          <div class="email pl-4 md:hidden py-2">Lê Trung Kiên</div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script lang="ts" setup>
import { useWindowSize } from '@vueuse/core'
const TAILWIND_MD_SIZE = 768
const { width } = useWindowSize({ initialWidth: 1600 })
let isClick = ref(false)
let isShow = ref(false)
onBeforeMount(() => {
  isShow.value = (width.value !== Infinity && width.value > TAILWIND_MD_SIZE) || isClick.value
})
</script>
<style scoped>
</style>
