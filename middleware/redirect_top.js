export default function ({ store, redirect }) {
  // isSigendInがtrueの場合の処理
  const isSignedIn = store.getters['user/isSignedIn']
  if (isSignedIn) {
    return redirect('/')
  }
}
