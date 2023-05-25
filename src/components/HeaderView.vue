<template>
  <div class="container-header">
    <!-- logo -->
    <logo-header />

    <!-- navigation bar -->
    <ul class="navigation-bar">
      <!-- Render each navigation item -->
      <li class="nav" v-for="(item, index) in navigationItems" :key="index">
        <!-- FontTextNavigationBar component -->
        <font-text-navigation-bar
          :TextNavigation="item.text"
          :isActive="item.isActive"
          @click="toggleNavItem(index)"
        />
        <!-- Render the ellipse if the item is active -->
        <div id="tick" v-if="item.isActive"></div>
      </li>
    </ul>

    <!-- button contact -->
    <div id="btn-contact">
      <sign-in-button />
      <contact-button />
    </div>
  </div>
</template>

<script>
import LogoHeader from "@/Icon/LogoHeader.vue";
import FontTextNavigationBar from "@/font/FontTextNavigationBar.vue";
import SignInButton from "@/button/SignInButton.vue";
import ContactButton from "@/button/ContactButton.vue";

export default {
  components: {
    LogoHeader,
    FontTextNavigationBar,
    SignInButton,
    ContactButton,
  },
  data() {
    return {
      navigationItems: [
        { text: "Articles", path: "/articleDetail", isActive: false },
        { text: "Nerd Academy", path: "/academy", isActive: false },
        { text: "Weekly Reports", path: "/contactUs", isActive: false },
        { text: "Dashboard", path: "/teams", isActive: false },
        { text: "About", path: "/about", isActive: false },
      ],
    };
  },
  created() {
    // Khôi phục trạng thái dấu chấm đánh dấu từ Local Storage
    const activeNavItem = localStorage.getItem("activeNavItem");
    if (activeNavItem) {
      this.navigationItems.forEach((item) => {
        item.isActive = item.text === JSON.parse(activeNavItem).text;
      });
    }
  },

  methods: {
    toggleNavItem(index) {
      this.navigationItems.forEach((item, i) => {
        if (i === index) {
          item.isActive = true;
        } else {
          item.isActive = false;
        }
      });

      // Lưu trạng thái dấu chấm đánh dấu vào Local Storage
      localStorage.setItem(
        "activeNavItem",
        JSON.stringify(this.navigationItems[index])
      );
      this.$router.push(this.navigationItems[index].path);
    },
  },
};
</script>

<style scoped>
.container-header {
  margin: 15px 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navigation-bar {
  width: 665px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav {
  background-color: #ffffff;
  outline: none;
  border: none;
  width: auto;
  height: auto;
  display: flex;
}
.nav:hover {
  cursor: pointer;
}
#tick {
  width: 8px;
  height: 8px;
  left: 217.5px;
  top: 14px;
  background: rgba(62, 62, 95, 0.75);
  border-radius: 50%;
  margin-top: 13px;
}
#btn-contact {
  display: flex;
}
</style>