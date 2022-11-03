import { createStore } from "vuex";
import i18nConstants from "@/constants/i18n";

import resumeModule from "./modules/resume";

export default createStore({
  state: {
    locale:
      localStorage.getItem(i18nConstants.localeStorageKey) ||
      i18nConstants.defaultLocale,
  },
  getters: {
    getLocale: (state) => state.locale,
  },
  mutations: {
    setLocale(state, locale) {
      state.locale = locale;
    },
  },
  actions: {
    setLocale({ commit }, locale) {
      localStorage.setItem(i18nConstants.localeStorageKey, locale);
      commit("setLocale", locale);
    },
  },
  modules: {
    resume: resumeModule,
  },
});
