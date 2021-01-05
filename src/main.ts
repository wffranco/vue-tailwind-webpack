import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createI18n } from './i18n';
import { useTheme } from './theme';

import './assets/tailwind.css';
import './assets/main.scss';

document.body.className = useTheme().body;

const i18n = createI18n();

createApp(App)
.use(i18n)
.use(router)
.mount('#app');
