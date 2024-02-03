<template>
  <div id="base">
    <!-- 上方導航列 開始 -->
    <img id="headerImg" src="/pic/base/動物吃雞封面圖 1.png" alt="" />
    <header id="headerBar" class="flexWrap">
      <nav id="headerBarHamburger" @click="togglePhoneNav">
        <img @click="togglePhoneNav" src="/pic/base/hamburger.svg" />
      </nav>
      <nav id="headerBarIcon" class="flexAllCenter">
        <!-- <img class="icon" src="/pic/base/logo.png" /> -->
        P l a y S p a c e
      </nav>
      <nav id="headerBarOption" class="flexWrap">
        <p @click="page1Link">{{ page1 }}</p>
        <p @click="page2Link">{{ page2 }}</p>
        <p @click="page3Link">{{ page3 }}</p>
        <p @click="page4Link">{{ page4 }}</p>
        <p @click="page5Link">{{ page5 }}</p>
      </nav>
      <nav id="headerBarUserOperation">
        <input type="text" />
        <img id="headerBarUserOperationSearchIcon" @click="search" />
        <img id="headerBarUserOperationUserIcon" :src="userIconSrc" @click="userCenter" />
      </nav>
    </header>
    <!-- 彈窗程式碼 -->
    <div class="popup-content" v-show="isUserCenterPopupOpen" ref="userCenter">
      <!-- Popup content -->
      <p>{{ popupMessage }}</p>
    </div>
    <!-- 上方導航列 結束 -->
    <!-- 手機版選單 開始 -->
    <div id="phoneNav" :style="{ left: isPhoneNavOpen ? '0' : '-200px' }">
      <div id="phoneUserCenter">
        <img id="phoneUserOperationUserIcon" :src="userIconSrc" @click="userCenter" />
      </div>
      <p @click="page1Link">{{ page1 }}</p>
      <p @click="page2Link">{{ page2 }}</p>
      <p @click="page3Link">{{ page3 }}</p>
      <p @click="page4Link">{{ page4 }}</p>
      <p @click="page5Link">{{ page5 }}</p>
    </div>

    <div id="overlay" @click="closePhoneNav" :style="{ display: isPhoneNavOpen ? 'block' : 'none' }"></div>
    <!-- 手機版選單 結束 -->
    <!-- <div id="background"> -->
    <!-- <div id="backgroundLeftImg"></div> -->
    <!-- <div id="backgroundRightImg"></div> -->
    <!-- 主要區塊 開始 -->
    <!-- <main></main> -->
    <!-- 主要區塊 結束 -->
    <!-- </div> -->
  </div>
</template>

<script setup >
import { ref, reactive } from "vue";
import router from "/src/router/index";


// 使用者中心圖片url
const userIconSrc = ref("/pic/base/userCircle.svg");

//手機欄選單

const togglePhoneNav = (event) => {
  isPhoneNavOpen.value = !isPhoneNavOpen.value;
  event.stopPropagation();
};

const closePhoneNav = () => {
  isPhoneNavOpen.value = false;
  // 其他邏輯...
};
//使用者中心彈窗
const isUserCenterPopupOpen = ref(false);
const popupMessage = "This is the user center popup content...";
const isPhoneNavOpen = ref(false);

const userCenter = (event) => {
  // alert("嘿，我還沒完工");
  isUserCenterPopupOpen.value = true;
  event.stopPropagation();
  // alert(isUserCenterPopupOpen.value);

  // 在點擊用戶中心時，添加點擊事件監聽器
  document.addEventListener("click", handleDocumentClick);
  // handleDocumentClick(event);
};
const closeUserCenterPopup = () => {
  // alert(TEST);
  // 關閉用戶中心彈窗
  isUserCenterPopupOpen.value = false;

  // 移除點擊事件監聽器
  document.removeEventListener("click", handleDocumentClick);
};
const handleDocumentClick = (event) => {
  // alert("test");
  // 如果用戶中心彈窗是打開的，並且點擊不在用戶中心元素上，則關閉彈窗
  if (
    isUserCenterPopupOpen.value &&
    !userCenter.value?.contains(event.target)
  ) {
    closeUserCenterPopup();
  }
};

//分頁內容以及跳轉到的頁面
const page1 = "首頁";
const page1Link = () => {
  router.push({ name: "App2" });
};
const page2 = "揪團";
const page2Link = () => {
  router.push({ name: "activity" });
};
const page3 = "論壇";
const page3Link = () => {
  router.push({ name: "forum" });
};
const page4 = "待補";
const page4Link = () => {
  router.push({ name: "App2" });
};
const page5 = "待補";
const page5Link = () => {
  router.push({ name: "App2" });
};
</script>
<!-- 影響父層的style，慎用 -->
<style>
:root {
  --blockColor: rgb(55, 55, 55);
  --backGroundColor: #2a2a2a;
  --textColor: whitesmoke;
}

body {
  background-color: var(--backGroundColor);
}

/* 通用設定 */
.flexWrap {
  display: flex;
  flex-wrap: wrap;
}

.flexHorizontalCenter {
  display: flex;
  justify-content: center;
}

.flexVerticalCenter {
  display: flex;
  align-items: center;
}

.flexAllCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<!-- 只影響到自己的style -->
<style scoped>
.icon {
  width: 40px;
  height: 40px;
}

/* 移到index.vue */
/* body {
  font-family: "Noto Sans TC", sans-serif;
} */

/* 上方導航列 開始 */
#headerImg {
  width: 100%;
}

#headerBar {
  background-color: var(--backGroundColor);
  /* background-color: #223466; */
  height: 50px;
  font-family: "Noto Sans TC", sans-serif;
  font-weight: 300;
  line-height: 1.5;
  color: #ffffff;
  width: 100%;
  position: sticky;
  top: 0;
}

#headerBarHamburger {
  display: none;
}

#headerBarHamburger img {
  width: 40px;
  height: 40px;
}

#headerBarIcon {
  font-size: 20px;
  width: 200px;
}

#headerBarOption {
  width: 40%;
  /* border: 1px white solid; */
  display: flex;
  justify-content: center;
}

#headerBarOption p {
  width: 15%;
  /* border: 1px white solid; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 100;
}

#headerBarOption p:hover {
  color: #bababa;
  cursor: pointer;
}

#headerBarUserOperation {
  /* border: 1px white solid; */
  width: calc(100% - 40% - 200px);
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#headerBarUserOperation input {
  display: block;
  width: 190px;
  height: 30px;
  border-radius: 5px;
  border-style: none;
  border: 1px white solid;
  background-color: var(--backGroundColor);
  color: white;
  transition: transform 0.3s ease-in-out;

  /* outline: none; */
  /* border-color: #3c6a36; */
}

#headerBarUserOperation input:focus {
  /* box-shadow: 0 0 0 0.15rem rgba(255, 255, 255, 0.25); */
  /* outline-color: #3c6a36; */
  background-color: white;
  color: #000;
  transform: scale(1.1);
  line-height: 30px;
  outline: none;
}

#headerBarUserOperationSearchIcon {
  width: 20px;
  height: 20px;
  position: relative;
  left: -30px;
  content: url("/pic/base/whiteSearch.svg");
  transition: transform 0.1s ease-in-out, left 0.2s ease-in-out;
  cursor: pointer;
}

#headerBarUserOperation input:focus+#headerBarUserOperationSearchIcon {
  content: url("/pic/base/blackSearch.svg");
  transform: scale(1.1);
  left: -25px;
}

#headerBarUserOperationUserIcon {
  width: 40px;
  height: 40px;
  margin-right: 20px;
  cursor: pointer;
}

@media screen and (max-width: 800px) {
  #headerBarHamburger {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }

  #headerBarUserOperation {
    width: calc(100% - 50px - 200px);
  }

  #headerBarOption {
    width: 0%;
    display: none;
  }
}

@media screen and (max-width: 525px) {
  #headerBarUserOperation {
    width: calc(100% - 50px);
  }

  #headerBarUserOperationUserIcon,
  #headerBarIcon {
    display: none;
  }
}

/* 彈窗 開始 */
/* Basic styling for the user center popup */

.popup-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}

/* 彈窗 結束 */

/* 上方導航列 結束 */
/* 手機版選單 開始 */
#phoneNav {
  top: 0;
  left: -200px;
  position: fixed;
  height: 100%;
  width: 200px;
  background-color: #ffffff;
  z-index: 10;
  transition: left 0.5s ease;
  /* 添加過渡效果 */
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
}

#phoneNav p {
  display: flex;
  justify-content: center;
  padding: 3px 1px;
  cursor: pointer;
}

#phoneNav p:hover {
  background-color: #2a2a2a;
  color: white;
}

#phoneUserCenter {
  height: 20%;
  width: 100%;
  background-color: #2a2a2a;
  display: flex;
  justify-content: center;
  align-items: center;
}

#phoneUserOperationUserIcon {
  cursor: pointer;
  max-height: 90%;
}

#overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: none;
  z-index: 9;
}

/* 手機版選單 結束 */

#background {
  position: relative;
  background-color: #ebebeb;
  min-height: 100vh;
  display: flex;
  justify-content: center;
}

#backgroundRightImg {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30%;
  height: auto;
  content: url("/pic/base/背景_白貓.png");
}

#backgroundLeftImg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30%;
  height: auto;
  content: url("/pic/base/背景_白狐.png");
}
</style>