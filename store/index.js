export const state = () => ({
  locales: ['ja', 'en'],
  locale: 'ja',
  drawerIsOpen: false,
})

export const actions = {
  switchLang ({ state, commit }) {
    const locale = state.locale === "ja" ? "en" : "ja"
    commit('setLang', locale)
  },
}

export const mutations = {
  setLang(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
  toggleDrawer(state) {
    state.drawerIsOpen = !state.drawerIsOpen;
  },
  setDrawer(state, val) {
    state.drawerIsOpen = val;
  }
}
