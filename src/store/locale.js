import { readonly, watch } from 'vue';
import { append, local } from '.';

const STORAGE = 'locale';

const locale = local(STORAGE, null);

setHtmlLang(locale.value);
watch(locale, value => setHtmlLang(value));

export const refLocale = () => locale;
export const useLocale = () => readonly(locale);

export function setLocale(value) {
  locale.value = value;
}

function setHtmlLang(lang) {
  document.querySelector('html').setAttribute('lang', lang);
}

append
.ref('locale', locale)
.actions({
  setLocale,
});
