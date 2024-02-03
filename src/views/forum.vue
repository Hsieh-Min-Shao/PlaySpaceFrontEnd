<script setup>
import Header from "../components/base/Header.vue";
import sideBar from "../components/base/sideBar.vue";
</script>

<template>
  <Header></Header>
  <div class="forum-posts-table">
    <table>
      <thead>
        <tr>
          <th>發文分類</th>
          <th>發文主題</th>
          <th>點擊數</th>
          <th>最後回覆時間</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id">
          <td>{{ post.category }}</td>
          <td>{{ post.topic }}</td>
          <td>{{ post.clicks }}</td>
          <td>{{ post.lastReply }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from "vue";

const posts = ref([
  // 假設的初始帖子數據
  {
    id: 1,
    category: "綜合討論",
    topic: "開始遊戲隊友就秒退",
    clicks: 100,
    lastReply: "2023-01-01 12:34",
  },
  {
    id: 2,
    category: "情報",
    topic: "沒有喪屍模式了嗎?",
    clicks: 150,
    lastReply: "2023-01-02 15:48",
  },
]);

const newPost = ref({
  title: "",
  content: "",
});

const submitPost = () => {
  const postId = posts.value.length + 1;
  posts.value.push({ id: postId, ...newPost.value });
  newPost.value = { title: "", content: "" }; // 重置表單
};
</script>

<style scope>
.forum-posts-table {
   display: flex;
  width: 60%;
  border-collapse: collapse;
  background-color: var(--blockColor);
  color: var(--textColor);
  justify-content: center;
  align-items: center;
}

.forum-posts-table th,
.forum-posts-table td {
  border-top: 1px solid #ddd; /* 保留上边框 */
  border-bottom: 1px solid #ddd; /* 保留下边框 */
  border-left: 0; /* 移除左边框 */
  border-right: 0; /* 移除右边框 */
  padding: 8px;
  text-align: left;
}
</style>