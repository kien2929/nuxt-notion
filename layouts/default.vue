<template>
  <div class="root">
    <app-bar />
    <slot />
  </div>
</template>
<style scoped lang="scss">
.root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
<style lang="scss">
html.dark {
  body {
    background-color: #18181b;
  }
}
</style>
