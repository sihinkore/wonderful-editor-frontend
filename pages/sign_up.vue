<template>
  <v-card tile flat :class="$style.card">
    <v-card-title> ユーザー登録 </v-card-title>
    <v-text-field
      label="アカウント名"
      placeholder="お名前"
      outlined
    ></v-text-field>
    <v-text-field
      label="メールアドレス"
      placeholder="test@example.com"
      outlined
    ></v-text-field>
    <v-text-field
      label="パスワード(半角英数字)"
      placeholder="*******"
      outlined
    ></v-text-field>
    <div class="text-center">
      <v-btn rounded color="primary" dark block> 登録 </v-btn>
    </div>
  </v-card>
</template>
<style lang="scss" module>
.card {
  width: 600px;
  margin: auto;
  padding: 30px 70px;
}
</style>
