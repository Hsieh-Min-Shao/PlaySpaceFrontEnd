

<template>
  <Header></Header>
  <div id="indexDiv" class="flexWrap">
    <div id="homeDiv"></div>
    <div id="blankDiv"></div>
    <div id="sideBarDiv"><SideBar></SideBar></div>
  </div>
</template>

<script setup>
import Header from "../components/base/Header.vue";
import SideBar from "../components/base/sideBar.vue";
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
  /* height: 120px; */
  /* background-color: rgb(55, 55, 55); */
  padding: 50px 50px;
  box-sizing: border-box;
}

#homeDiv {
  width: 60%;
}

#blankDiv{
  width: 10%;
}

#sideBarDiv {
  width: 30%;
}</style>
