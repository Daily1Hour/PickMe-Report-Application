declare module "@styleguide/global" {
  export {};
}

declare module "@styleguide/vue" {
  import { App } from "vue";

  const Bleed: App;

  export { Bleed };
}
