<template>
  <div class="container-featured">
    <font-text-navigation-bar TextNavigation="Featured" class="left"/>
    <div class="pinned-wrap">
      <div class="row">
        <div class="pinned-item img1"></div>
        <div class="pinned-item">
          <div class="pinned-item-small"></div>
          <div class="pinned-item-small"></div>
        </div>
        <div class="pinned-item">
          <div class="pinned-item-small"></div>
          <div class="pinned-item-small"></div>
        </div>
      </div>
      <!--  -->
      <div class="row">
        <div class="pinned-item-small"></div>
        <div class="pinned-item-small"></div>
        <div class="pinned-item-small"></div>
      </div>
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
.container-featured {
  margin-top: 60px;
}
.left {
  padding-left: 20px;
}
.pinned-wrap {
  width: 1310px;
  height: 632px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
.pinned-item {
  width: 425px;
  height: 415px;
  border-radius: 16px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 15px;
}
.pinned-item-small {
  width: 425px;
  height: 200px;
  border-radius: 16px;
  background-color: rgb(186, 189, 187);
}
.img1 {
  background-image: url("@/assets/img/amen.png");
  background-size: cover;
}
</style>