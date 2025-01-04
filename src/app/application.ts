import singleSpaVue from "single-spa-vue";
import { createApp, h } from "vue";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { createPinia } from "pinia";
import { Quasar } from "quasar";

import router from "./router";
import App from "./App.vue";

const pinia = createPinia();

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
    app.use(router).use(VueQueryPlugin).use(pinia).use(Quasar);
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
