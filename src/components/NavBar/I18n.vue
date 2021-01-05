<template>
  <div class="relative grid p-2" :class="nav.submenu.primary">
    <template v-for="(lang, key) in langs" :key="key">
      <button
        type="button"
        class="p-2 flex items-start rounded-lg"
        :class="nav.submenu.item.primary"
        @click="$emit('change', changeLocale(key))"
      >
        <span class="dropdown-item" role="button">
          <Icon :type="key === locale ? 'check-circle-fill' : 'circle'" class="h-5 w-5 transform translate-y-0.5" />
        </span>
        <div class="ml-4">
          {{ lang }}
        </div>
      </button>
    </template>
  </div>
</template>

<script>
import { computed, onBeforeMount, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { langs } from '@/i18n';
import { useTheme } from '@/theme';
import { refLocale, setLocale } from '@/store/locale';
import Icon from '@/components/Icon';

export default {
  name: 'I18n',
  components: {
    Icon,
  },
  emits: ['change'],
  setup() {
    const theme = useTheme();
    const nav = computed(() => theme.NavBar);

    const { locale } = useI18n();
    watch(locale, value => setLocale(value));

    function changeLocale(key) {
      if (locale.value !== key) return locale.value = key;
      return locale.value;
    }

    onBeforeMount(() => {
      const rlocale = refLocale();
      locale.value = rlocale.value;
    });

    return { langs, locale, nav, changeLocale };
  },
};
</script>

<style>
</style>
