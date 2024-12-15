import { createApp } from "vue";
import { Quasar } from "quasar";

import App from "./App.vue";

import "quasar/src/css/index.sass";
import "@quasar/extras/material-icons/material-icons.css";

createApp(App).use(Quasar).mount("#app");
