import { createStore } from "vuex";
import i18nConstants from "@/constants/i18n";

import resumeModule from "./modules/resume";

export default createStore({
  state: {
    locale:
      localStorage.getItem(i18nConstants.localeStorageKey) ||
      i18nConstants.defaultLocale,
    isMenuOpened: false,
  },
  getters: {
    getLocale: (state) => state.locale,
    getMenuOpened: (state) => state.isMenuOpened,
  },
  mutations: {
    setLocale(state, locale) {
      state.locale = locale;
    },
    toggleMenuOpened(state) {
      state.isMenuOpened = !state.isMenuOpened;
    },
  },
  actions: {
    setLocale({ commit }, locale) {
      localStorage.setItem(i18nConstants.localeStorageKey, locale);
      commit("setLocale", locale);
    },
    toggleMenuOpened({ commit }) {
      commit("toggleMenuOpened");
    },
  },
  modules: {
    resume: resumeModule,
  },
});
