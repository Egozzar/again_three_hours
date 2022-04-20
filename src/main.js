import { createApp } from 'vue';
import App from "@/App";
import componentsUI from '@/components/UI/script';

const app = createApp(App);
componentsUI.forEach(item => app.component(item.name, item));

const vm = app.mount('#app');
