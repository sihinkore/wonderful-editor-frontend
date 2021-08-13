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
      <v-btn @click="patchArticle" color="blue" dark> 記事を更新 </v-btn>
    </div>
  </v-card>
</template>
<script>
export default {
  // ログインしていなければ、記事編集ページに飛べない
  middleware: 'redirect_signin',
  computed: {
    articleEdit() {
      return this.$store.state.article.article
    },
  },
  data() {
    return {
      loading: false,
      title: '',
      body: '',
      id: this.$route.params.id,
    }
  },
  created() {
    const response = this.articleEdit
    this.title = response.title
    this.body = response.body
  },
  methods: {
    async patchArticle() {
      // 多重送信を防ぐ
      this.loading = true
      const id = this.id
      const params = {
        title: this.title,
        body: this.body,
        status: 'published',
      }
      try {
        await this.$axios.patch(`api/v1/articles/${id}`, params)
        this.$router.push(`/articles/${id}`)
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
