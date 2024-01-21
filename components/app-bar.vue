<template>
  <header>
    <nav
      class="nav-bar bg-white text-black dark:bg-zinc-900 dark:text-white flex flex-col md:flex-row md:justify-between py-1 md:px-20 lg:px-40 xl:px-60">
      <div class="left-menu flex flex-col md:flex-row">
        <div class="mobile-bar flex flex-row justify-between items-center md:py-0 pb-1">
          <NuxtLink to="/" class="brand px-4 cursor-pointer font-bold">Kien Le</NuxtLink>
          <button
            class="btn border-0 btn-collapse md:hidden flex items-center justify-center mr-2 w-10 h-10 flex items-center justify-center focus:outline-none focus:ring focus:border-blue-500 rounded-lg"
            @click="isClick = !isClick">
            <div class="btn border-0 is-show hidden">
              <icons-close class="stroke-black fill-black dark:stroke-white dark:fill-white" />
            </div>
            <div class=" btn border-0 is-hide">
              <icons-menu class="stroke-black fill-black dark:stroke-white dark:fill-white" />
            </div>
          </button>
        </div>
        <div class="is-show hidden md:flex menu-items flex flex-col md:flex-row md:gap-0">
          <NuxtLink to="/"
            class="item hover:border-l-4 md:hover:border-l-0 md:hover:border-b-4 md:hover:-mb-1 md:pl-4 md:pr-4 flex items-center pl-4 md:pl-0 py-2 md:py-0 cursor-pointer"
            :class="{ '-selected': path === '/' }">📄 Blog </NuxtLink>
          <NuxtLink to="/me"
            class="item hover:border-l-4 md:hover:border-l-0 md:hover:border-b-4 md:hover:-mb-1 md:pl-4 md:pr-4 flex items-center pl-4 md:pl-0 py-2 md:py-0 cursor-pointer"
            :class="{ '-selected': path === '/me' }">👨🏻‍💻 Me</NuxtLink>
        </div>
      </div>
      <div
        class="is-show hidden md:flex right-menu flex flex-col md:items-center items-start md:flex-row py-2 md:py-0 gap-4">
        <select-mode class="pl-4 md:pl-0 " />
        <NuxtLink to="/me" class="me flex w-full md:flex-row md:pr-4 items-center py-2 pt-4 md:py-0 pl-4 md:pl-0">
          <div class="flex items-center">
            <nuxt-img src="/img/avatar_small.jpg" loading="lazy"
              class="object-cover rounded-lg avatar h-12 w-12 md:h-10 md:w-10 md:py-0 cursor-pointer" />
            <div class="email pl-4 md:hidden py-2">Lê Trung Kiên</div>
          </div>
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
<script lang="ts" setup>
let route = useRoute()
let path = toRef(route, 'path')
let isClick = ref(false)
watch((isClick), () => {
  document.querySelectorAll('.is-show').forEach((element) => {
    element.classList.toggle('hidden')
  })
  document.querySelectorAll('.is-hide').forEach((element) => {
    element.classList.toggle('hidden')
  })
})
</script>
<style scoped lang="scss">
.nav-bar {
  border-bottom: 1px solid #ccc;
  color: #171717;
}

.menu-items {
  >.item {
    border-color: #FAFAFA;
    border-left-width: 4px;

    @media only screen and (min-width: 768px) {
      background-color: unset;
      border-left-width: 0px;
      margin-bottom: calc(4px + -0.35rem);
    }
  }

  >.item:hover {
    background-color: #FAFAFA;
    border-color: #BFBFBF;

    @media only screen and (min-width: 768px) {
      background-color: unset;
      border-left-width: 0px;
      border-bottom-width: 4px;
      margin-bottom: -0.35rem;
    }
  }

  >.item.-selected {
    background-color: #EEF6FF;
    border-left-width: 4px;
    border-color: #3B80F3;

    @media only screen and (min-width: 768px) {
      background-color: unset;
      border-left-width: 0px;
      border-bottom-width: 4px;
      margin-bottom: -0.35rem;
    }
  }
}

.right-menu {
  >.me {
    border-top: 1px solid #ccc;

    @media only screen and (min-width: 768px) {
      border-top: 0px;
    }
  }
}
</style>
<style lang="scss">
html.dark {
  .nav-bar {
    color: #FAFAFA;
  }

  .menu-items {
    >.item {
      border-color: #18181B;
    }
    >.item:hover {
      background-color: #404040;

      @media only screen and (min-width: 768px) {
        background-color: unset;
      }
    }

    >.item.-selected {
      background-color: #404040;

      @media only screen and (min-width: 768px) {
        background-color: unset;
      }
    }
  }
}
</style>
