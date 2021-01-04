<template>
  <a href="#" class="ml-5 text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-400" :title="title" @click="toggleDark">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path v-if="mode === true" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      <path v-else-if="mode === false" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  </a>
</template>

<script>
import { computed } from 'vue';
import { getMode, toggleDark } from '@/store/dark';

const titles = {
  null: 'Change to browser default',
  true: 'Change to dark mode',
  false: 'Change to light mode',
};

export default {
  name: 'DarkMode',
  setup() {
    const title = computed(() => titles[getMode().next]);
    const mode = computed(() => getMode().value);
    return { getMode, mode, title, toggleDark };
  },
};
</script>

<style lang="scss" scoped>
svg {
  height: 1.5em;
}
</style>
