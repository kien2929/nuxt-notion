<template>
  <div class="main-page bg-slate-50 dark:bg-zinc-900 dark:text-white p-4 md:px-20 lg:px-40 xl:px-60">
    <div class="flex flex-col items-center w-full md:flex-row md:gap-40 ">
      <nuxt-img class="object-cover rounded-full h-100 w-100 image" loading="lazy" src="/img/avatar.png" />
      <div class="info flex md:!items-start">
        <div class="text">HI THERE! I'M <span>KIEN LE</span></div>
        <div class="text md:mt-20">A <span>full stack developer</span> passionate about creating interactive applications and
          experiences on the web.</div>
        <div class="flex gap-10 items-center mt-10 flex-row">
          <button class="button">
            <span class="button-content">Resume</span>
          </button>
          <div class="flex gap-10 icons">
            <nuxt-link
              to="https://www.linkedin.com/in/ltk98" target="_blank"
              class="icon border-1 dark:bg-blue-950 rounded-lg shadow-lg w-10 h-10 flex justify-center items-center cursor-pointer">
              <icons-linkedin class="text-xl" />
            </nuxt-link>
            <nuxt-link
              to="https://www.github.com/kien2929" target="_blank"
              class="icon border-1 dark:bg-blue-950 rounded-lg shadow-lg w-10 h-10 flex justify-center items-center cursor-pointer">
              <icons-github class="text-xl" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
useHead({
  title: 'Kien Le 😴',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Kien Le - Blog',
    },
  ],
  htmlAttrs: {
    lang: 'vi',
  }
})
</script>
<style scoped lang="scss">
.main-page {
  display: flex;
  flex: 1;

  .image {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background-color: pink;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    .text {
      margin-top: 10px;
      font-size: 20px;
      font-weight: 500;

      span {
        color: #f6ad55;
      }
    }

    .button {
      position: relative;
      overflow: hidden;
      height: 3rem;
      padding: 0 2rem;
      border-radius: 1.5rem;
      background: #3d3a4e;
      background-size: 400%;
      color: #fff;
      border: none;
      cursor: pointer;
    }

    .button:hover::before {
      transform: scaleX(1);
    }

    .button-content {
      position: relative;
      z-index: 1;
    }

    .button::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      transform: scaleX(0);
      transform-origin: 0 50%;
      width: 100%;
      height: inherit;
      border-radius: inherit;
      background: linear-gradient(82.3deg,
          rgba(150, 93, 233, 1) 10.8%,
          rgba(99, 88, 238, 1) 94.3%);
      transition: all 0.475s;
    }
  }

}
</style>
