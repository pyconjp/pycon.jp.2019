export const state = () => ({
  locales: ['ja', 'en'],
  locale: 'ja',
  news_list: [],
})

export const getters = {
  locale (state) { return state.locale},
  news_list (state) { return state.news_list }
}

/* for Session API's URI */
export const actions = {
  async FETCH_NEWS ({ commit }) {
    console.log(process.env.newsApiEndpoint)
    const response = await fetch(process.env.newsApiEndpoint)
    const json = await response.json()
    const data = json.item
    commit('FETCH_NEWS', data)
  }
}

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  FETCH_NEWS(state, data) {
    state.news_list = data
  }
}
