<script setup>
import PostList from "../components/PostList.vue";
import getPosts from "../composibles/getPosts";
import Spinner from "../components/Spinner.vue";
import TagCloud from "../components/TagCloud.vue";

const { posts, load } = getPosts();
load();
</script>

<template>
  <div class="home">
    <div v-if="posts.length" class="layout">
      <!-- 内容页展示 -->
      <PostList :posts="posts"></PostList>
      <!-- 标签页展示 -->
      <TagCloud :posts="posts"></TagCloud>
    </div>
    <div v-else>
      <Spinner></Spinner>
    </div>
  </div>
</template>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}

.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>