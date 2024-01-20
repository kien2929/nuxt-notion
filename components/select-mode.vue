<template>
  <div>
    <div class="round flex">
      <div class="mode h-8 w-8 flex items-center justify-center cursor-pointer dark:text-white"
        :class="$colorMode.preference === 'light' ? '-selected' : ''" @click="setMode('light')" value="light">
        <icons-light class="icon-light stroke-black fill-white dark:stroke-white dark:fill-black"/>
      </div>
      <div class="mode h-8 w-8 flex items-center justify-center cursor-pointer"
        :class="$colorMode.preference === 'system' ? '-selected' : ''" @click="setMode('system')" value="system">
        <icons-system class="icon-system stroke-black fill-white dark:stroke-white dark:fill-black"/>
      </div>
      <div class="mode h-8 w-8 flex items-center justify-center cursor-pointer"
        :class="$colorMode.preference === 'dark' ? '-selected' : ''" @click="setMode('dark')" value="dark">
        <icons-dark class="icon-dark stroke-black fill-white dark:stroke-white dark:fill-black"/>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const colorMode = useColorMode()
const setMode = (value: string) => {
  colorMode.preference = value
}
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
