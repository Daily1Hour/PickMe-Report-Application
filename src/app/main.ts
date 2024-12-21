import { createApp } from "vue";
import { Quasar } from "quasar";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { createPinia } from 'pinia'

import router from "./router";
import App from "./App.vue";

import "quasar/src/css/index.sass";
import "@quasar/extras/material-icons/material-icons.css";

const pinia = createPinia();

// Vue 인스턴스에 라우터 및 Quasar 인터페이스 적용
createApp(App).use(router).use(VueQueryPlugin).use(pinia).use(Quasar).mount("#app");
