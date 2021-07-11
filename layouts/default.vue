<template>
  <v-app>
    <!-- ログインしていない時のヘッダーをv-ifで分岐 -->
    <!-- ログインしていない時のヘッダー -->
    <header v-if="login == false">
      <v-app-bar color="blue" dark>
        <v-toolbar-title>Wonderful Editor</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn outlined>ユーザー登録</v-btn>
        <v-btn text>ログイン</v-btn>
      </v-app-bar>
    </header>
    <!-- ログインしている時のヘッダー -->
    <header v-else>
      <v-app-bar color="blue" dark>
        <v-toolbar-title>Wonderful Editor</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn outlined>投稿する</v-btn>
        <v-btn text>ログアウト</v-btn>
      </v-app-bar>
    </header>
    <v-main>
      <v-container fluid :class="$style.container">
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  computed: {
    get() {
      return this.$store.state.user.login
    },
  },
}
</script>

<style lang="scss" module>
.container {
  background-color: #ecf7fe;
  height: 100%;
}
</style>
