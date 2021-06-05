export const state = () => {
  return {
    articles: [],
  }
}

export const mutations = {
  // 第一引数にstateと書くのは決まり。第二引数でactionから値を受け取る。
  setArticles(state, articles) {
    // stateのarticlesにactionから渡ってきたarticlesの値を代入
    state.articles = articles
  },
}

export const actions = {
  async fetchArticles({ commit }) {
    const response = await this.$axios.get('api/v1/articles')
    // response.dataをarticlesに代入
    const articles = response.data
    // commitでmutationのsetArticlesというメソッドにarticlesの値を渡す
    commit('setArticles', articles)
  },
}
