export default function ({ store, redirect }) {
  // isSigendInがfalseの場合の処理
  if (!store.getters['user/isSignedIn']) {
    return redirect('/sign_in')
  }
}
