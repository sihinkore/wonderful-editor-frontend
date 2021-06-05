<template>
  <div>
    <div v-for="article in articles" :key="article.id">
      <div>{{ article }}</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    articles: {
      get() {
        // store配下のarticle.js内のstateにあるarticlesの値を引っ張ってきてね
        return this.$store.state.article.articles
      },
    },
  },
  created() {
    // store配下のarticle.js内のfetchArticlesにdispatchしてね
    this.$store.dispatch('article/fetchArticles')
  },
}
</script>
