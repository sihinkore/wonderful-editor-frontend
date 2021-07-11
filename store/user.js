export const state = () => {
  return {
    headers: {},
    isSignedIn: false,
  }
}

export const getters = {
  headers: (state) => state.headers,
  login: (state) => state.isSignedIn,
}

export const mutations = {
  // 第一引数にstateと書くのは決まり。第二引数でactionから値を受け取る。
  setHeaders(state, loginInfoHeaders) {
    // stateのheadersにactionから渡ってきたloginInfoHeadersの値を代入
    state.headers = loginInfoHeaders
  },
  // 第一引数にstateと書くのは決まり。第二引数でactionから値を受け取る。
  setSigunInState(state, signInState) {
    state.isSignedIn = signInState
  },
}

export const actions = {
  async signUp({ commit }, params) {
    const response = await this.$axios.post('api/v1/auth', params)
    const headers = response.headers
    const loginInfoHeaders = {
      'access-token': headers['access-token'],
      client: headers.client,
      expiry: headers.expiry,
      uid: headers.uid,
      'token-type': headers['token-type'],
    }
    commit('setHeaders', loginInfoHeaders)
    // 新規登録した時ログインと同様trueの値を送る
    commit('setSignInState', true)
  },
  async signIn({ commit }, params) {
    const response = await this.$axios.post('api/v1/auth/sign_in', params)
    const headers = response.headers
    const loginInfoHeaders = {
      'access-token': headers['access-token'],
      client: headers.client,
      expiry: headers.expiry,
      uid: headers.uid,
      'token-type': headers['token-type'],
    }
    commit('setHeaders', loginInfoHeaders)
    // 新規登録した時ログインと同様trueの値を送る
    commit('setSignInState', true)
  },
}
