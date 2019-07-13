export const state = () => ({
  locales: ['ja', 'en'],
  locale: 'ja'
})

export const actions = {
  switchLang ({ state, commit }) {
    const locale = state.locale === "ja" ? "en" : "ja"
    commit('setLang', locale)
  }
}

export const mutations = {
  setLang(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}
