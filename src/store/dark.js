import { readonly, watch } from 'vue';
import { append, local } from '.';

// window.matchMedia('(prefers-color-scheme: dark)').matches

const STORAGE = 'dark';

const modes = [
  {name: 'disabled', value: null, next: true},
  {name: 'dark', value: true, next: false},
  {name: 'light', value: false, next: null},
];

const dark = local(STORAGE, null);
watch(dark, updateSchema);

updateSchema(dark.value);

export const refDark = () => dark;
export const useDark = () => readonly(dark);

export function setDark(value) {
  dark.value = value;
}

export function getMode() {
  return modes.find(mode => mode.value === dark.value) || modes[0];
}

export function toggleDark() {
  setDark(getMode().next);
}

function updateSchema(dark) {
  if (![true, false].includes(dark)) dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.querySelector('html').classList[dark?'add':'remove']('dark');
}

append
.ref('dark', dark)
// .action('setDark', setDark)
.actions({
  setDark,
});
