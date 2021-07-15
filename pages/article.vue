<template>
  <v-card flat :class="$style.card">
    <v-text-field
      placeholder="タイトル"
      outlined
      v-model="title"
    ></v-text-field>
    <v-textarea
      placeholder="記事の内容を入力してください"
      outlined
      v-model="body"
    ></v-textarea>
    <div class="text-right">
      <v-btn @click="submit" color="blue" dark> 投稿する </v-btn>
    </div>
  </v-card>
</template>

<style lang="scss" module>
.card {
  margin: auto;
  padding: 30px 70px;
}
</style>
