<template>
    <div id="homePage">
        <div class="bigImg objectFitCoverImg">
            <img src="/pic/base/動物吃雞封面圖 1.png" alt="">
        </div>
        <div class="titleText">房間清單</div>
        <div class="flexWrap flexHorizontalCenter">
            <!-- 使用 v-for 指令來迭代 roomList -->
            <div class="room flexWrap flexVerticalCenter" v-for="room in roomList" :key="room.id">
                <div class="roomImg objectFitCoverImg">
                    <img :src="room.image" alt="">
                </div>
                <div class="roomBlank"></div>
                <div class="roomText">
                    <div class="roomTitle">{{ room.title }}</div>
                    <div class="rooomMsg">{{ room.message }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const roomList = reactive([
    { id: 1, title: "寧靜山谷", message: "傻逼勿來傻逼勿來傻逼勿來傻逼勿來", image: "/pic/base/背景_白貓.png" },
    { id: 2, title: "繁忙都市", message: "現代都市的繁忙生活", image: "/pic/base/背景_白貓.png" },
    { id: 3, title: "海邊日落", message: "美麗的海邊日落景象", image: "/pic/base/背景_白狐.png" }
])
</script>
<style></style>
<style scoped>
.objectFitCoverImg {
    overflow: hidden;
    /* 確保圖片超出部分不會顯示 */
}

.objectFitCoverImg>img {
    width: 100%;
    /* 使圖片寬度等於容器的寬度 */
    height: 100%;
    /* 使圖片高度等於容器的高度 */
    object-fit: cover;
    /* 保持圖片的比例，並確保圖片覆蓋整個容器 */
}

#homePage {}

.bigImg {
    border-radius: 10px;
    height: 300px;
    box-sizing: border-box;
    margin-bottom: 30px;
}

.titleText {
    color: var(--textColor);
    font-size: 26px;
    margin-bottom: 10px;
}


.room {
    width: 250px;
    height: 70px;
    background-color: var(--blockColor);
    border-radius: 10px;
    margin: 7px 7px;
    padding: 5px 8px;
    box-sizing: border-box;
    cursor: pointer;
}

.room:hover {
    background-color: var(--btnColor1);
}
.room:hover  .rooomMsg{
    color: var(--backGroundColor);
}

.roomImg {
    height: 50px;
    width: 50px;
    background-color: var(--backGroundColor);
    border-radius: 4px;
    padding: 5px;
    box-sizing: border-box;
}

.roomBlank {
    width: 10px;
}

.roomText {
    color: var(--textColor);
    width: 150px;
}

.rooomMsg {
    font-size: 12px;
    color: rgb(174, 174, 174);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

</style>