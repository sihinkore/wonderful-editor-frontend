<template>
  <v-app>
    <!-- ログインしていない時のヘッダーをv-ifで分岐 -->
    <!-- ログインしている時のヘッダー -->
    <header v-if="isSignedIn">
      <v-app-bar color="blue" dark>
        <nuxt-link to="/" :class="$style.header_link">
          <v-toolbar-title :class="$style.toolbar_title"
            >Wonderful Editor</v-toolbar-title
          >
        </nuxt-link>
        <v-spacer></v-spacer>
        <nuxt-link to="/article">
          <v-btn outlined>投稿する</v-btn>
        </nuxt-link>
        <v-btn text @click="logout">ログアウト</v-btn>
      </v-app-bar>
    </header>
    <!-- ログインしていない時のヘッダー -->
    <header v-else>
      <v-app-bar color="blue" dark>
        <v-toolbar-title>Wonderful Editor</v-toolbar-title>
        <v-spacer></v-spacer>
        <nuxt-link to="/sign_up">
          <v-btn outlined>ユーザー登録</v-btn>
        </nuxt-link>
        <nuxt-link to="/sign_in">
          <v-btn text>ログイン</v-btn>
        </nuxt-link>
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
    isSignedIn() {
      return this.$store.getters['user/isSignedIn']
    },
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logOut')
      this.$router.push('/sign_in')
    },
  },
}
</script>

<style lang="scss" module>
.container {
  background-color: #ecf7fe;
  height: 100%;
}
.header_link {
  text-decoration: none;
}
.toolbar_title {
  color: white;
}
</style>
