import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import router from "@/router";
import store from "@/store";
import i18n from "@/utils/i18n";

import "@/utils/fontAwesome";

import App from "@/App.vue";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(i18n);

app.component("FontAwesomeIcon", FontAwesomeIcon);

app.mount("#app");
