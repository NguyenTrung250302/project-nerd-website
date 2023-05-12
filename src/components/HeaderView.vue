<template>
  <div class="container-header">
    <!-- logo -->
    <logo-header />
    <!-- navigation bar -->
    <ul class="navigation-bar">
      <li><font-text-navigation-bar :TextNavigation="navigation1" /></li>
      <li><font-text-navigation-bar :TextNavigation="navigation2" /></li>
      <li><font-text-navigation-bar :TextNavigation="navigation3" /></li>
      <li><font-text-navigation-bar :TextNavigation="navigation4" /></li>
      <li><font-text-navigation-bar :TextNavigation="navigation5" /></li>
    </ul>
    <!-- button contact -->
    <div class="button">
      <sign-in-button />
      <contact-button />
    </div>
  </div>
</template>

<script>
import LogoHeader from "@/Icon/LogoHeader.vue";
import FontTextNavigationBar from "@/font/FontTextNavigationBar.vue";
import SignInButton from '@/button/SignInButton.vue';
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
      navigation1: "Articles",
      navigation2: "Nerd Academy",
      navigation3: "Weekly Reports",
      navigation4: "Dashboard",
      navigation5: "About",
    };
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
.button {
  display: flex;
}
</style>