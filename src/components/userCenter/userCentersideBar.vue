<template>
  <div id="sideBar">
    <div class="oneBlock">
      <div class="blockList">
       <div @click="$router.push('/setting')">編輯會員資料</div>
        <div @click="$router.push('/mailbox')" >站內信</div>
        <div @click="$router.push('/activityList')" >揪團</div>
        <div @click="$router.push('/articleCollect')">收藏文章</div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
<style>
body{
   color: var(--textColor);
}
</style>
<style scoped>
#sideBar {
  background-color: var(--blockColor);
  padding: 10px 15px;
  box-sizing: border-box;
  border-radius: 10px;
  color: var(--textColor);
}

.blockText {
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 20px;
}

.blockList > div {
  background-color: var(--backGroundColor);
  border-radius: 4px;
  padding: 15px 8px;
  box-sizing: border-box;
  margin-bottom: 5px;
  cursor: pointer;
}

.blockList > div:hover {
  background-color: var(--btnColor1);
  font-weight: 900;
}
</style>