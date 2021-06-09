<template>
  <v-app>
    <header>
      <v-app-bar color="blue" dark>
        <v-toolbar-title>Wonderful Editor</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn outlined>ユーザー登録</v-btn>
        <v-btn text>ログイン</v-btn>
      </v-app-bar>
    </header>
    <v-main>
      <v-container fluid :class="$style.container">
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<style lang="scss" module>
.container {
  background-color: #ecf7fe;
  height: 100%;
}
</style>
