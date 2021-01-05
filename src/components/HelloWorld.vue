<template>
  <div class="hello">
    <h1 class="text-4xl">{{ app_name }}</h1>
    <h2 class="text-2xl">vue 3 + tailwind + i18n</h2>
    <h3 class="text-xl mb-3">{{ t('welcome.storage') }}</h3>
    <p>{{ t('welcome.to') }}</p>
    <p>
      {{ t('welcome.guide') }}
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">{{ t('welcome.doc', ['vue-cli']) }}</a>.
    </p>
    <h3 class="text-xl">{{ t('related') }}</h3>
    <ul class="mt-3">
      <li><a href="https://webpack.js.org/" target="_blank" rel="noopener">webpack</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener">typescript</a></li>
      <li><a href="https://github.com/vuejs/jsx-next" target="_blank" rel="noopener">JSX</a></li>
    </ul>
    <ul class="mt-3">
      <li><a href="https://v3.vuejs.org/" target="_blank" rel="noopener">Vue 3</a></li>
      <li><a href="https://tailwindcss.com/" target="_blank" rel="noopener">TailWindCSS</a></li>
      <li><a href="https://tailwindui.com/" target="_blank" rel="noopener">TailWindUI</a></li>
    </ul>
    <ul class="mt-3">
      <li><a href="https://kazupon.github.io/vue-i18n/" target="_blank" rel="noopener">vue-i18n</a></li>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { app_name } from '@/consts';
import { useI18n } from 'vue-i18n';

@Options({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  computed: {
    app_name: () => app_name,
    t: () => useI18n().t,
  },
})
export default class HelloWorld extends Vue {
  app_name!: string
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
  li {
    display: inline-block;
    margin: 0 10px;
  }
}
a {
  color: #42b983;
}
</style>
