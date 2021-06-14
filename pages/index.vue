<template>
  <div>
    <div
      :class="$style.container"
      v-for="article in articles"
      :key="article.id"
    >
      <div>{{ article.title }}</div>
      <div :class="$style.user_name">
        by {{ article.user.name }}
        <timeago
          :datetime="article.updated_at"
          :class="$style.create_time"
        ></timeago>
      </div>
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

<style lang="scss" module>
.container {
  background-color: white;
  padding: 4px;
  width: 800px;
  // 画面中央寄せ
  margin: auto;
}
.user_name {
  border-bottom: solid 2px #cac7c7;
}

.create_time {
  margin-left: 10px;
}
</style>
