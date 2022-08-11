<script setup>
import SinglePost from "./SinglePost.vue";
import { onMounted, onUnmounted, onUpdated } from "vue";

onMounted(() => {
  // console.log("页面渲染之前执行,执行完毕页面刷新");
  /* 数据请求 */
});

// watchEffect()

onUnmounted(() => {
  // console.log("组件注销之前执行,执行完组件就不再页面显示");
  // 例如better-scroll 销毁掉第三方插件实例的一些对象
});

onUpdated(() => {
  // console.log("当组件内的内容发生变化,就会执行这个更新钩子函数");
});
defineProps({
  posts: Array,
});
</script>

<template>
  <div class="post-list">
    <!-- 遍历数组 -->
    <div v-for="post in posts" :key="posts.id">
      <SinglePost :post="post"></SinglePost>
    </div>
  </div>
</template>

<style scoped>
</style>