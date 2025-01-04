import { createApp } from "vue";
import { Quasar } from "quasar";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { createPinia } from "pinia";

import router from "./router";
import App from "./App.vue";

import "quasar/src/css/index.sass";
import "@quasar/extras/material-icons/material-icons.css";

const pinia = createPinia();

// Vue 플러그인 사용
createApp(App)
  .use(router) // 라우터
  .use(pinia) // 상태 관리
  .use(VueQueryPlugin) // 서버 상태 관리
  .use(Quasar) // UI 라이브러리
  .mount("#app");
