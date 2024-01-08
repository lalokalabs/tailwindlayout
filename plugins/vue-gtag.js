import Vue from "vue";
import VueGtag from "vue-gtag";

export default ({ app }) => {
  Vue.use(
    VueGtag,
    {
      config: { id: process.env.GOOGLE_ANALYTICS_ID }
    },
    app.router
  );
};
