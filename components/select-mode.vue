<template>
  <div>
    <div class="round flex">
      <div class="mode -light h-8 w-8 flex items-center justify-center cursor-pointer dark:text-white"
        :class="{ '-selected' : preference === 'light' }" @click="preference = 'light'" value="light">
        <icons-light class="icon-light stroke-black fill-white dark:stroke-white dark:fill-black"/>
      </div>
      <div class="mode -system h-8 w-8 flex items-center justify-center cursor-pointer"
        :class="{ '-selected' : preference === 'system' }" @click="preference = 'system'" value="system">
        <icons-system class="icon-system stroke-black fill-white dark:stroke-white dark:fill-black"/>
      </div>
      <div class="mode -dark h-8 w-8 flex items-center justify-center cursor-pointer"
        :class="{ '-selected' : preference === 'dark' }" @click="preference = 'dark'" value="dark">
        <icons-dark class="icon-dark stroke-black fill-white dark:stroke-white dark:fill-black"/>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const colorMode = useColorMode()
const preference = ref('')
onMounted(() => {
  preference.value = colorMode.preference
})
watch((preference), () => {
  colorMode.preference = preference.value
})
</script>
<style scoped lang="scss">
.round {
  border-radius: 9999px;
  overflow: hidden;
  border: 1px solid #ccc;
  padding: 0.1rem;
  width: fit-content;
}

.mode.-selected {
  background-color: #ccc;
  border-radius: 9999px;
  > .icon-light {
    stroke: black;
    fill: black;
  }
  > .icon-system {
    stroke: black;
    fill: black;
  }
  > .icon-dark {
    stroke: black;
    fill: black;
  }
}
</style>
