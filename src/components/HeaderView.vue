<template>
  <div class="container-header">
    <!-- logo header -->
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
        <div id="container-tick">
        <div id="tick" v-if="item.isActive"></div>
        </div>
      </li>
    </ul>

    <!-- button contact -->
    <div id="btn-contact">
      <sign-in-button />
      <connect-button />
    </div>
  </div>
</template>

<script>
import LogoHeader from "@/Icon/LogoHeader.vue";
import FontTextNavigationBar from "@/font/FontTextNavigationBar.vue";
import SignInButton from "@/button/SignInButton.vue";
import ConnectButton from "@/button/ConnentButton.vue";

export default {
  components: {
    LogoHeader,
    FontTextNavigationBar,
    SignInButton,
    ConnectButton,
  },
  data() {
    return {
      navigationItems: [
        { text: "Articles", path: "/", isActive: false },
        { text: "Nerd Academy", path: "/academy", isActive: false },
        { text: "Weekly Reports", path: "/contactUs", isActive: false },
        { text: "Dashboard", path: "/teams", isActive: false },
        { text: "About", path: "/", isActive: false },
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
  width: 673px;
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
#container-tick {
  width: 8px;
  height: 8px;
}
#tick {
  width: 8px;
  height: 8px;
  background: rgba(62, 62, 95, 0.75);
  border-radius: 50%;
  margin: 16px 0 0 4px;
}
#btn-contact {
  display: flex;
}
</style>