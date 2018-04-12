import Util from '@/libs/util'

const Home = {
  namespaced: true,
  state: {
    info: 112
  },
  getters: {},
  mutations: {
    save (state, payload) {
      state.info = payload.data
    }
  },
  actions: {
    async fetch ({commit}, payload) {
      var data = await Util.get('index/search/hot-words', {
        ...payload
      })
      if (data.code === 0) {
        commit('save', {
          data: data.data
        })
        return data
      } else {
        return ''
      }
    }
  }
}
export default Home
