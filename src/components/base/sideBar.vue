<template>
    <div id="sideBar">
        <!-- <div class="oneBlock">
        <div class="blockText">最新消息</div>
        <div class="blockList">
            <div>消息一</div>
            <div>消息一</div>
        </div>
    </div> -->
        <!-- 使用 v-for 遍歷 testList -->
        <div class="oneBlock" v-for="(item, index) in testList" :key="index">
            <div class="blockText">{{ item.tile }}</div>
            <div class="blockList">
                <!-- 再次使用 v-for 遍歷每個 item 的 msgList -->
                <div v-for="oneMsg in item.msgList" @click="sideBarRedirect(oneMsg)">{{ oneMsg.msg }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const testList = reactive([
    { tile: "最新消息", msgList: [{msg:"消息一",href:"msg1"}, {msg:"消息二",href:"msg2"}, {msg:"消息三",href:"msg3"}] },
    { tile: "常見問題", msgList: [{msg:"問題一",href:"promble1"},{msg:"問題二",href:"promble2"}, {msg:"問題三",href:"promble3"}] }

])

const sideBarRedirect = (oneMsg)=>{
    console.log(oneMsg.href);
}

</script>
<style></style>
<style scoped>
#sideBar {
    background-color: var(--blockColor);
    padding: 10px 15px;
    box-sizing: border-box;
    border-radius: 10px;
    color: var(--textColor);
}

.oneBlock {
    margin-bottom: 20px;
}

.blockText {
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 20px;
}

.blockList>div {
    background-color: var(--backGroundColor);
    border-radius: 4px;
    padding: 10px 8px;
    box-sizing: border-box;
    margin-bottom: 5px;
    cursor: pointer;
}
.blockList>div:hover{
    background-color: var(--btnColor1);
}
</style>