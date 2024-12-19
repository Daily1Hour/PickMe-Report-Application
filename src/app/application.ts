import singleSpaVue from "single-spa-vue";
import { createApp, h } from "vue";
import { Quasar } from "quasar";

import router from "./router";
import App from "./App.vue";

import "quasar/src/css/index.sass";
import "@quasar/extras/material-icons/material-icons.css";

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        props: {
          name: this.name,
        },
      });
    },
  },
  handleInstance: (app) => {
    app.use(router).use(Quasar);
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
