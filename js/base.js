window.addEventListener("load", () => {
  new Vue({
    el: "#base", // 指定 Vue 實例要管理的元素
    data() {
      return {
        page1: "首頁",
        page2: "揪團",
        page3: "論壇",
        page4: "待補",
        page5: "待補",
        isPhoneNavOpen: false,
        isUserCenterPopupOpen: false,
        popupMessage:"This is the user center popup content...",
        userIconSrc: "../pic/userCircle.svg",
      };
    },
    methods: {
      togglePhoneNav(event) {
        this.isPhoneNavOpen = !this.isPhoneNavOpen;
        event.stopPropagation();
      },
      closePhoneNav() {
        this.isPhoneNavOpen = false;
        // 其他邏輯...
      },
      page1Link() {},
      page2Link() {},
      page3Link() {},
      page4Link() {},
      page5Link() {},
      userCenter(event) {
        // alert("嘿，我還沒完工");
        this.isUserCenterPopupOpen = true;
        event.stopPropagation();

        // 在點擊用戶中心時，添加點擊事件監聽器
        document.addEventListener("click", this.handleDocumentClick);
      },
      closeUserCenterPopup() {
        // 關閉用戶中心彈窗
        this.isUserCenterPopupOpen = false;

        // 移除點擊事件監聽器
        document.removeEventListener("click", this.handleDocumentClick);
      },

      handleDocumentClick(event) {
        // 如果用戶中心彈窗是打開的，並且點擊不在用戶中心元素上，則關閉彈窗
        if (
          this.isUserCenterPopupOpen &&
          !this.$refs.userCenter.contains(event.target)
        ) {
          this.closeUserCenterPopup();
        }
      },
      search() {},
    },
  });
});
