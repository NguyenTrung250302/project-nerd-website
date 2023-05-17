<template>
  <div class="container-recent-post">
    <div id="container-recent">
      <div>
        <font-text-cocogoose titleItem="Recent Post" />
      </div>
      <div id="b"></div>
    </div>
    <div class="recent-post">
      <!-- box 1 -->
      <div class="item img1">
        <!-- item -->
        <div class="item-above">
          <fundamental-item />
          <education-item />
          <premium-item />
        </div>
        <!-- content -->
        <div class="item-below">
          <font-text-mulish NameDesigner="by Thanh Tung" />
          <font-text-raleway ContentItemHomePage="The Bridge Series: A" />
          <font-text-raleway ContentItemHomePage="Travel Through" />
          <font-text-raleway ContentItemHomePage="Wormhole" />
        </div>
      </div>
      <!-- box 2 -->
      <div class="item img2">
        <!-- item -->
        <div class="item-above">
          <fundamental-item />
          <education-item />
          <premium-item />
        </div>
        <!-- content -->
        <div class="item-below">
          <font-text-mulish NameDesigner="by Thanh Tung" />
          <font-text-raleway ContentItemHomePage="SVB, USDC depeg," />
          <font-text-raleway ContentItemHomePage=" hệ quả của QT và bài học" />
          <font-text-raleway ContentItemHomePage="về Convexity" />
        </div>
      </div>
      <!-- box 3 -->
      <div class="item img3">
        <!-- item -->
        <div class="item-above">
          <fundamental-item />
          <education-item />
          <premium-item />
        </div>
        <!-- content -->
        <div class="item-below">
          <font-text-mulish NameDesigner="by Thanh Tung" />
          <font-text-raleway ContentItemHomePage="Arbitrum DAO and $ARB:" />
          <font-text-raleway ContentItemHomePage="đu giá đúng!" />
        </div>
      </div>
      <!-- box 4 -->
      <div class="item img4">
        <!-- item -->
        <div class="item-above">
          <fundamental-item />
          <education-item />
          <premium-item />
        </div>
        <!-- content -->
        <div class="item-below">
          <font-text-mulish NameDesigner="by Thanh Tung" />
          <font-text-raleway ContentItemHomePage="MEV Part 1 : Những điều " />
          <font-text-raleway ContentItemHomePage="cần biết" />
        </div>
      </div>
      <!-- box 5 -->
      <div class="item img5">
        <!-- item -->
        <div class="item-above">
          <fundamental-item />
          <education-item />
          <premium-item />
        </div>
        <!-- content -->
        <div class="item-below">
          <font-text-mulish NameDesigner="by Thanh Tung" />
          <font-text-raleway ContentItemHomePage="Weekly Report #3" />
        </div>
      </div>
      <!-- box 6 -->
      <div class="item img6">
        <!-- item -->
        <div class="item-above">
          <fundamental-item />
          <education-item />
          <premium-item />
        </div>
        <!-- content -->
        <div class="item-below">
          <font-text-mulish NameDesigner="by Thanh Tung" />
          <font-text-raleway ContentItemHomePage="Weekly Report #4" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FontTextCocogoose from "@/font/FontTextCocogoose.vue";
import FontTextRaleway from "@/font/FontTextRaleway.vue";
import FontTextMulish from "@/font/FontTextMulish.vue";
import PremiumItem from "./Item/PremiumItem.vue";
import FundamentalItem from "./Item/FundamentalItem.vue";
import EducationItem from "./Item/EducationItem.vue";
export default {
  components: {
    FontTextCocogoose,
    FontTextRaleway,
    FontTextMulish,
    PremiumItem,
    FundamentalItem,
    EducationItem,
  },
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
  background-color: cadetblue;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.item-above {
  display: flex;
}
.item-below {
  /*  */
}
.img1 {
  background-image: url("@/assets/img/1.png");
  background-size: cover;
  background-position: center;
}
.img2 {
  background-image: url("@/assets/img/6.png");
  background-size: cover;
  background-position: center;
}
.img3 {
  background-image: url("@/assets/img/10.png");
  background-size: cover;
  background-position: center;
}
.img4 {
  background-image: url("@/assets/img/11.png");
  background-size: cover;
  background-position: center;
}
.img5 {
  background-image: url("@/assets/img/12.png");
  background-size: cover;
  background-position: bottom;
}
.img6 {
  background-image: url("@/assets/img/12.png");
  background-size: cover;
  background-position: bottom;
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