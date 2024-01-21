<template>
  <NotionRenderer class="dark:bg-zinc-900" :blockMap="blockMap" fullPage prism />
</template>
<script lang="ts" setup>
const route = useRoute()
const { data: blockMap } = await useAsyncData(`post/${route.params.id}`,
  () => $fetch('/api/page', { query: { url: route.params.id } })
)
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
<style lang="scss">
@import "vue3-notion/dist/style.css";
@import "prismjs/themes/prism.css";
@import "katex/dist/katex.min.css";
@import "prism-theme-vars/base.css";

:root {
  --prism-foreground: #393a34;
  --prism-background: #fbfbfb;
  --prism-comment: #b8c4b8;
  --prism-string: #c67b5d;
  --prism-literal: #3a9c9b;
  --prism-keyword: #248459;
  --prism-function: #849145;
  --prism-deleted: #a14f55;
  --prism-class: #2b91af;
  --prism-builtin: #a52727;
  --prism-property: #ad502b;
  --prism-namespace: #c96880;
  --prism-punctuation: #8e8f8b;
  --prism-decorator: #bd8f8f;
  --prism-json-property: #698c96;
}

html:not(.dark) {
  --prism-foreground: #393a34;
  --prism-background: #f8f8f8;

  --prism-comment: #758575;
  --prism-namespace: #444444;
  --prism-string: #bc8671;
  --prism-punctuation: #80817d;
  --prism-literal: #36acaa;
  --prism-keyword: #248459;
  --prism-function: #849145;
  --prism-deleted: #9a050f;
  --prism-class: #2b91af;
  --prism-builtin: #800000;
  --prism-property: #ce9178;
  --prism-regex: #ad502b;
}

html.dark {
  --prism-foreground: #d4d4d4;
  --prism-background: #1e1e1e;

  --prism-namespace: #aaaaaa;
  --prism-comment: #758575;
  --prism-namespace: #444444;
  --prism-string: #ce9178;
  --prism-punctuation: #d4d4d4;
  --prism-literal: #36acaa;
  --prism-keyword: #38a776;
  --prism-function: #dcdcaa;
  --prism-deleted: #9a050f;
  --prism-class: #4ec9b0;
  --prism-builtin: #d16969;
  --prism-property: #ce9178;
  --prism-regex: #ad502b;
}

html.dark {
  .notion {
    color: #D4D4D4;
  }
  .notion-code {
    background-color: #202020;
    .token {
      text-shadow: 0 0 black;
    }
  }
}
</style>
