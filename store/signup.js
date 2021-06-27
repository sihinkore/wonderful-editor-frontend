export const state = () => {
  return {
    headers: [],
  }
}

export const mutations = {
  // 第一引数にstateと書くのは決まり。第二引数でactionから値を受け取る。
  setHeaders(state, loginInfoHeaders) {
    // stateのheadersにactionから渡ってきたloginInfoHeadersの値を代入
    state.headers = loginInfoHeaders
  },
}

export const actions = {
  fetchHeaders({ commit }, response) {
    const headers = response.headers

    const loginInfoHeaders = {
      'access-token': headers['access-token'],
      client: headers.client,
      expiry: headers.expiry,
      uid: headers.uid,
      'token-type': headers['token-type'],
    }
    commit('setHeaders', loginInfoHeaders)
  },
}
