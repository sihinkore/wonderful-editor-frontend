<template>
  <v-card>
    <template v-if="isInitialized">
      <v-btn @click="deleteArticle" text :class="$style.trash">
        <font-awesome-icon icon="trash-alt" style="font-size: 25px" />
      </v-btn>
      <div>{{ article.user.name }}</div>

      <v-card-title>{{ article.title }}</v-card-title>
      <v-card-text>{{ article.body }}</v-card-text>
    </template>
  </v-card>
</template>

<script>
export default {
  computed: {
    article: {
      get() {
        // store配下のarticle.js内のstateにあるarticleの値を引っ張ってきてね
        return this.$store.state.article.article
      },
    },
  },
  data() {
    return {
      // 初期化完了フラグ
      isInitialized: false,
      id: this.$route.params.id,
      // loading: false,
    }
  },
  async created() {
    const id = this.id
    // store配下のarticle.js内のfetchArticleDetailにdispatchしてね
    await this.$store.dispatch('article/fetchArticleDetail', id)
    this.isInitialized = true
  },
  methods: {
    async deleteArticle() {
      const id = this.id
      // 多重送信を防ぐ
      // this.loading = true
      try {
        await this.$axios.delete(`api/v1/articles/${id}`)
        this.$router.push('/')
      } catch (err) {
        alert(err.response.data.errors.full_messages)
      } finally {
        // this.loading = false
      }
    },
  },
}
</script>
<style lang="scss" module>
.trash {
  float: right;
  padding-right: 10px;
  padding-top: 5px;
}
</style>
