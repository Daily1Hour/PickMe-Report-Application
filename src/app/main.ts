import { createApp } from "vue";
import { Quasar } from "quasar";

import router from "./router";
import App from "./App.vue";

import "quasar/src/css/index.sass";
import "@quasar/extras/material-icons/material-icons.css";

createApp(App).use(router).use(Quasar).mount("#app");
