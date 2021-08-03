<template>
  <v-card>
    <div>{{ article.user.name }}</div>
    <v-card-title>{{ article.title }}</v-card-title>
    <v-card-text>{{ article.body }}</v-card-text>
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
    }
  },
  async created() {
    const id = this.id
    // store配下のarticle.js内のfetchArticleDetailにdispatchしてね
    await this.$store.dispatch('article/fetchArticleDetail', id)
    this.isInitialized = true
  },
}
</script>
