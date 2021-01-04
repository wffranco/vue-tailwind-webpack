import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { useTheme } from './theme';

import './assets/tailwind.css';
import './assets/main.scss';

document.body.className = useTheme().body;

createApp(App).use(router).mount('#app');
