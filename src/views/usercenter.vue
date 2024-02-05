

<template>
  <Header></Header>
  <div id="indexDiv" class="flexWrap">
    <div id="sideBarDiv">
      <userCentersideBar></userCentersideBar>
    </div>
    <div id="blankDiv"></div>
    <div id="homeDiv">
       <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import Header from "../components/base/Header.vue";
import SideBar from "../components/base/sideBar.vue";
import userCentersideBar from "../components/userCenter/userCentersideBar.vue";
</script>

<style>
img {
  max-width: 100%;
  max-height: 100%;
}

body {
  font-family: "Noto Sans TC", sans-serif;
}

#indexDiv {
  width: 100%;
  padding: 50px 50px;
  box-sizing: border-box;
}

#homeDiv {
  width: 65%;
}

#blankDiv {
  width: 5%;
}

#sideBarDiv {
  width: 20%;
}

@media screen and (max-width: 800px) {
  #blankDiv,
  #sideBarDiv {
    display: none;
  }
  #homeDiv {
    width: 100%;
  }
}
</style>
