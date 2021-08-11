<template>
  <v-card flat :class="$style.card">
    <v-text-field
      placeholder="タイトル"
      outlined
      v-model="title"
    ></v-text-field>
    <v-textarea
      placeholder="記事の内容を入力してください"
      no-resize
      outlined
      v-model="body"
    ></v-textarea>
    <div class="text-right">
      <v-btn @click="post" color="blue" dark> 投稿する </v-btn>
    </div>
  </v-card>
</template>
<script>
export default {
  // ログインしていなければ、記事作成ページに飛べない
  middleware: 'redirect_signin',
  data() {
    return {
      loading: false,
      title: '',
      body: '',
    }
  },
  methods: {
    async post() {
      // 多重送信を防ぐ
      this.loading = true
      const params = {
        title: this.title,
        body: this.body,
        status: 'published',
      }
      try {
        await this.$axios.post('api/v1/articles', params)
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
  margin: auto;
  padding: 30px 70px;
}
</style>
