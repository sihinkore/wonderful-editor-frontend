<template>
  <v-card flat :class="$style.card">
    <v-card-title> ユーザー登録 </v-card-title>
    <v-text-field
      label="アカウント名"
      placeholder="お名前"
      outlined
      v-model="name"
    ></v-text-field>
    <v-text-field
      label="メールアドレス"
      placeholder="test@example.com"
      outlined
      v-model="email"
    ></v-text-field>
    <v-text-field
      label="パスワード(半角英数字)"
      placeholder="*******"
      outlined
      v-model="password"
    ></v-text-field>
    <div class="text-center">
      <v-btn @click="submit" rounded color="primary" dark block> 登録 </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  middleware: 'redirect_top',
  data() {
    return {
      loading: false,
      name: '',
      email: '',
      password: '',
    }
  },
  methods: {
    async submit() {
      // 多重送信を防ぐ
      this.loading = true
      const params = {
        name: this.name,
        email: this.email,
        password: this.password,
      }
      try {
        await this.$store.dispatch('user/signUp', params)
        this.$router.push('/')
      } catch (err) {
        alert(err.response.data.errors.full_messages)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
<style lang="scss" module>
.card {
  width: 600px;
  margin: auto;
  padding: 30px 70px;
}
</style>
