import { createApp } from 'vue';
import App from "@/App";
import componentsUI from '@/components/UI/script';
import router from "@/router/router";
import MyNavigation from "@/components/MyNavigation";

const app = createApp(App);
componentsUI.forEach(item => app.component(item.name, item));
app.component('my-navigation', MyNavigation);
app.use(router);

const vm = app.mount('#app');
