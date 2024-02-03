<template>
  <!-- <Header></Header> -->
  <div class="login">
    <form class="login_box" @submit.prevent="login">
      <div class="login_title">
        <!-- <img src="/pic/base/logo.png" alt="Logo" class="logo_pic" /> -->
        <h3>登入</h3>
      </div>
      <div class="form-item">
        <label for="username">帳號</label>
        <input id="username" class="input" v-model="username" name="username" />
      </div>
      <div class="form-item">
        <label for="password">密碼</label>
        <input
          type="password"
          id="password"
          v-model="password"
          name="password"
          class="input"
        />
      </div>
      <div class="form-item horizontal">
        <input type="checkbox" id="remember" v-model="remember" />
        <label for="remember">記住我</label>
      </div>
      <button
        type="submit"
        :disabled="!username || !password"
        class="btn-login"
      >
        登入
      </button>
      <div class="form-item">
        <div id="register">還沒有帳號嗎？<a href="#">我要註冊</a></div>
      </div>
      <div class="form-item horizontal">
        <button
          type="submit"
          :disabled="!username || !password"
          class="btn-sso"
        >
          <img src="/pic/base/google.png" class="sso-icon" />
          使用Google登入
        </button>
        <button
          type="submit"
          :disabled="!username || !password"
          class="btn-sso"
        >
          <i class="fab fa-line"></i>
          使用Line登入
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
// import Header from "../components/base/Header.vue";

const username = ref("");
const password = ref("");
const remember = ref(false);
const sysConf = ref({ SystemName: "系統名稱" }); // 假設的系統配置，請根據實際需要調整

const login = () => {
  console.log("Login:", username.value, password.value);
  // 實現登入邏輯
};
</script>

<style scoped>
/* 頁面結構開始 */
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* 防止滾動條出現 */
  box-sizing: border-box; /* 確保內邊距和邊框包含在高度內 */
  height: calc(100vh);
}

.login_box {
  width: 40%;
  max-width: 500px;
  padding: 20px;
  box-sizing: border-box;
}

.form-item {
  display: flex;
  flex-direction: column;
}

.form-item.horizontal {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.form-item label {
  color: var(--textColor);
  margin-top: 10px; /* 为标签和输入框之间添加一些间距 */
}

/* 頁面結構結束 */

/* 標題設置開始 */
.login_title {
  display: flex;
  justify-content: center;
  align-items: center;
}

h3 {
  color: var(--textColor);
}

.logo_pic {
  max-width: 50px;
  max-height: 50px;
  align-items: center;
}

/* 標題設置結束 */

/* 帳號密碼輸入框設置開始 */

.input {
  margin: 5px 0;
  padding: 8px;
  border: 1px solid gray;
  border-radius: 8px;
  background: #fff;
  max-width: 100%;
}

/* 帳號密碼輸入框設置結束 */

/* 記住帳號設置開始 */

#remember {
  margin-top: 10px;
  margin-bottom: 0;
}

/* 記住帳號設置結束 */

/* 登入按鈕開始 */
.btn-login {
  width: 100%;
  color: #fff;
  margin: 5px 0;
  padding: 8px;
  border-radius: 8px;
  background: var(--btnColor1);
}

/* 登入按鈕結束 */

/* 註冊連結設置開始 */
#register {
  display: flex;
  justify-content: center;
  color: var(--textColor);
}

a {
  text-decoration: none;
  color: var(--btnColor1);
}

/* 註冊連結設置結束 */

/* 第三方登入按鈕設置開始 */
.btn-sso {
  width: 100%;
  color: #2a2a2a;
  padding: 8px;
  border-radius: 8px;
  background: #fff;
  flex: 1; /* 使按钮平分可用空间 */
  margin: 10px 10px; /* 为按钮添加上下外边距，并设置左右外边距以创建间隔 */
}

/* 第一个按钮左边距为0 */
.btn-sso:first-child {
  margin-left: 0;
}

/* 最后一个按钮右边距为0 */
.btn-sso:last-child {
  margin-right: 0;
}

.sso-icon {
  max-width: 20px;
  max-height: 18px;
}

.fa-line {
  color: #00b900; /* Line品牌颜色 */
}

/* 第三方登入按鈕設置結束 */

/* 手機屏幕媒體查詢 */
@media (max-width: 1000px) {
  .login_box {
    width: 90%; /* 小屏幕上寬度更大 */
  }

  h3 {
    font-size: 1.2em; /* 縮小字體大小 */
  }

  .logo_pic {
    max-width: 30px; /* 縮小圖標尺寸 */
    max-height: 30px;
  }

  .btn-login {
    padding: 10px; /* 增大按鈕內邊距 */
    font-size: 0.9em; /* 調整字體大小 */
  }
}

/* 禁用狀態的樣式 */
.disabled {
  cursor: not-allowed;
  opacity: 0.8;
}
</style>