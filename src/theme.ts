import { reactive, readonly } from 'vue';
import { deepMerge } from './utils';

export const theme = reactive({
  body: 'text-gray-500 bg-white dark:text-gray-300 dark:bg-gray-700',
  text: {
    primary: '',
  },
  button: {
    primary: 'border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700',
  },
  NavBar: {
    border: 'border-gray-100 dark:border-gray-600',
    icon: {
      primary: 'text-indigo-600',
      secondary: 'text-gray-400 dark:text-gray-300',
    },
    primary: 'text-gray-500 bg-white dark:text-gray-200 dark:bg-gray-700',
    secondary: '',
    option: {
      main: 'text-gray-500',
      active: 'text-gray-900 dark:text-gray-300',
      enabled: 'hover:text-gray-900 dark:hover:text-gray-400 focus:ring-indigo-500',
      disabled: 'text-gray-400 dark:text-gray-600',
    },
    submenu: {
      primary: 'text-gray-500 bg-white dark:text-gray-200 dark:bg-gray-700',
      secondary: 'text-gray-500 bg-gray-50 dark:text-gray-200 dark:bg-gray-600',
      item: {
        primary: 'hover:bg-gray-50 dark:hover:bg-gray-600',
        secondary: 'text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-500',
      },
    },
  },
});

export const useTheme = () => readonly(theme);

export function configTheme(options = {}) {
  return deepMerge(theme, options);
}
