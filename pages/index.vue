<template>
  <div>
    <div
      :class="$style.container"
      v-for="article in articles"
      :key="article.id"
    >
      <v-list-item>
        <v-list-item-avatar>
          <font-awesome-icon icon="user" style="font-size: 30px" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title :class="$style.article_title">{{
            article.title
          }}</v-list-item-title>
          <v-list-item-subtitle>
            by {{ article.user.name }}
            <timeago
              :datetime="article.updated_at"
              :class="$style.create_time"
            ></timeago>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider class="mx-4"></v-divider>
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

// .user_name {
//   border-bottom: solid 2px #cac7c7;
// }

.create_time {
  margin-left: 10px;
}
</style>
