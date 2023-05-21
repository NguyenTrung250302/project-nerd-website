<template>
  <!-- featured -->
  <div id="container-title">
    <font-text-cocogoose titleItem="Featured" />
    <div id="a"></div>
  </div>
  <featured-home />
  <!-- recent post home -->
  <div id="container-recent">
    <font-text-cocogoose titleItem="Recent Post" />
    <div id="b"></div>
  </div>
  <recent-post-home />
  <!-- btn -->
  <load-more-button />
  <!-- info see more -->
  <info-see-more />
</template>

<script>
import LoadMoreButton from "@/button/LoadMoreButton.vue";
import FeaturedHome from "./FeaturedHome.vue";
import InfoSeeMore from "./InfoSeeMore.vue";
import RecentPostHome from "./RecentPostHome.vue";
import FontTextCocogoose from "@/font/FontTextCocogoose.vue";
export default {
  components: {
    FeaturedHome,
    RecentPostHome,
    InfoSeeMore,
    LoadMoreButton,
    FontTextCocogoose,
  },
};
</script>

<style scoped>
#container-title {
  width: 1300px;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
#a {
  width: 10px;
  height: 20px;
}
#container-recent {
  width: 1300px;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
#b {
  width: 10px;
  height: 20px;
}
</style>