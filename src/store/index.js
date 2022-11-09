import { createStore } from "vuex";
import i18nConstants from "@/constants/i18n";

import resumeModule from "./modules/resume";

export default createStore({
  state: {
    locale:
      localStorage.getItem(i18nConstants.localeStorageKey) ||
      i18nConstants.defaultLocale,
    isMenuOpen: false,
    isLoading: false,
  },
  getters: {
    locale: (state) => state.locale,
    isMenuOpen: (state) => state.isMenuOpen,
    isLoading: (state) => state.isLoading,
  },
  mutations: {
    setLocale(state, locale) {
      state.locale = locale;
    },
    setMenuOpen(state, menuOpen) {
      state.isMenuOpen = menuOpen;
    },
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
  },
  actions: {
    setLocale({ commit }, locale) {
      localStorage.setItem(i18nConstants.localeStorageKey, locale);
      commit("setLocale", locale);
    },
    closeMenu({ commit }) {
      commit("setMenuOpen", false);
    },
    openMenu({ commit }) {
      commit("setMenuOpen", true);
    },
    showLoading({ commit }) {
      commit("setLoading", true);
    },
    hideLoading({ commit }) {
      commit("setLoading", false);
    },
  },
  modules: {
    resume: resumeModule,
  },
});
