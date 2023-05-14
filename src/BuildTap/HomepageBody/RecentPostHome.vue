<template>
  <div class="container-recent-post">
    <font-text-navigation-bar TextNavigation="Recent Post" class="left"/>
    <div class="recent-post">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
  </div>
</template>

<script>
import FontTextNavigationBar from "@/font/FontTextNavigationBar.vue";
export default {
  components: { FontTextNavigationBar },
};
</script>

<style scoped>
.container-recent-post {
  margin: 60px 0 40px 0;
}
.left {
  padding-left: 20px;
}
.recent-post {
  width: 1310px;
  height: 850px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 425px);
  grid-template-rows: repeat(2, 415px);
  gap: 17.5px;
}
.item {
  border-radius: 16px;
  background-color: aquamarine;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>