<template>
  <div class="container-recent-post">
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
          <form-text-1
            thanhTung="by Thanh Tung"
            ContentBig="The Bridge Series: A Travel Through Wormhole"
          />
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
          <form-text-1
            thanhTung="by Thanh Tung"
            ContentBig="SVB, USDC depeg, 
            hệ quả của QT và bài học 
            về Convexity"
          />
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
          <form-text-1
            thanhTung="by Thanh Tung"
            ContentBig="Arbitrum DAO and $ARB: 
            Hãy đu giá đúng!"
          />
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
          <form-text-1
            thanhTung="by Thanh Tung"
            ContentBig="MEV Part 1 : Những điều 
            cần biết"
          />
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
          <form-text-1
            thanhTung="by Thanh Tung"
            ContentBig="Weekly Report #3"
          />
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
          <form-text-1
            thanhTung="by Thanh Tung"
            ContentBig="Weekly Report #4"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PremiumItem from "./Item/PremiumItem.vue";
import FundamentalItem from "./Item/FundamentalItem.vue";
import EducationItem from "./Item/EducationItem.vue";
import FormText1 from "./Item/FormText1.vue";
export default {
  components: {
    PremiumItem,
    FundamentalItem,
    EducationItem,
    FormText1,
  },
};
</script>

<style scoped>
.container-recent-post {
  margin: 0 0 40px 0;
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
</style>