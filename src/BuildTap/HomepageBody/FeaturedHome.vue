<template>
  <div class="container-featured">
    <div class="pinned-wrap">

      <div class="row">

        <div class="pinned-item img1">

          <div class="form-item-above">
            <pinned-item />
            <premium-item />
          </div>

          <div class="form-item-below">
            <form-text-1
              thanhTung="by Thanh Tung"
              ContentBig="The Bridge Series: A Travel Through Wormhole"
            />
          </div>
        </div>
        <div class="pinned-item">

          <div class="pinned-item-small img2">

            <div class="form-item-above">
              <pinned-item />
              <premium-item />
            </div>

            <div class="form-item-below">
              <form-text-2
                nameDesigner="by Thanh Tung"
                contentSmall="The Bridge Series: The Designs"
              />
            </div>
          </div>

          <div class="pinned-item-small img3" @click="changeClick">

            <div class="form-item-above">
              <pinned-item />
              <premium-item />
            </div>

            <div class="form-item-below">
              <form-text-2
                nameDesigner="by Thanh Tung"
                contentSmall="Arbitrum DAO and $ARB: Hãy đu giá đúng!"
              />
            </div>
          </div>
        </div>
        <div class="pinned-item">
          <!-- box 4 -->
          <div class="pinned-item-small img4">
            <!-- item -->
            <div class="form-item-above">
              <pinned-item />
              <premium-item />
            </div>
            <!-- content -->
            <div class="form-item-below">
              <form-text-2
                nameDesigner="by yy.#0101"
                contentSmall="In B(ank)TC We Trust"
              />
            </div>
          </div>
          <!-- box 5 -->
          <div class="pinned-item-small img5">
            <!-- item -->
            <div class="form-item-above">
              <pinned-item />
              <premium-item />
            </div>
            <!-- content -->
            <div class="form-item-below">
              <form-text-2
                nameDesigner="by Tran Thuan"
                contentSmall="Transaction Order Flows & MEV"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- row 2 -->
      <div class="row">
        <!-- box 6 -->
        <div class="pinned-item-small img6">
          <!-- item -->
          <div class="form-item-above">
            <pinned-item />
            <premium-item />
          </div>

          <div class="form-item-below">
            <form-text-2
              nameDesigner="by yy.#0101"
              contentSmall="SVB, USDC depeg, hệ quả của QT và bài học về Convexity"
            />
          </div>
        </div>

        <div class="pinned-item-small img7">

          <div class="form-item-above">
            <pinned-item />
            <premium-item />
          </div>

          <div class="form-item-below">
            <form-text-2
              nameDesigner="by Thanh Tung"
              contentSmall="InfinityPools: Leverage to infinity and beyond"
            />
          </div>
        </div>

        <div class="pinned-item-small img8">

          <div class="form-item-above">
            <pinned-item />
            <premium-item />
          </div>

          <div class="form-item-below">
            <form-text-2
              nameDesigner="by Tran Thuan"
              contentSmall="MEV Part 1 : Những điều cần biết"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PinnedItem from "./Item/PinnedItem.vue";
import PremiumItem from "./Item/PremiumItem.vue";
import FormText1 from "./Item/FormText1.vue";
import FormText2 from "@/BuildTap/HomepageBody/Item/FormText2.vue";
export default {
  components: {
    PinnedItem,
    PremiumItem,
    FormText1,
    FormText2,
  },
  methods: {
    changeClick() {
      this.$router.push("/articleDetail");
    },
  },
};
</script>

<style scoped>
.contain-featured {
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;
}
.pinned-item-small {
  width: 425px;
  height: 200px;
  border-radius: 16px;
  background-color: rgb(1, 6, 25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;
}
.form-item-above {
  display: flex;
  padding: 20px 20px;
}
.form-item-below {
  padding: 20px 20px;
}
.img1 {
  background-image: url("@/assets/img/1.png");
  background-size: cover;
  background-position: center;
  cursor: pointer;
}
.img1:hover {
  transform: scale(1.02);
}
.img2 {
  background-image: url("@/assets/img/2.png");
  background-size: cover;
  background-position: center;
  cursor: pointer;
}
.img2:hover {
  transform: scale(1.03);
}
.img3 {
  background-image: url("@/assets/img/4.png");
  background-size: cover;
  background-position: center;
  cursor: pointer;
}
.img3:hover {
  transform: scale(1.03);
}
.img4 {
  background-image: url("@/assets/img/3.png");
  background-size: cover;
  background-position: center;
  cursor: pointer;
}
.img4:hover {
  transform: scale(1.03);
}
.img5 {
  background-image: url("@/assets/img/5.png");
  background-size: cover;
  background-position: center;
  cursor: pointer;
}
.img5:hover {
  transform: scale(1.03);
}
.img6 {
  background-image: url("@/assets/img/6.png");
  background-size: cover;
  background-position: center;
  cursor: pointer;
}
.img6:hover {
  transform: scale(1.03);
}
.img7 {
  background-image: url("@/assets/img/7.png");
  background-size: cover;
  background-position: center;
  cursor: pointer;
}
.img7:hover {
  transform: scale(1.03);
}
.img8 {
  background-image: url("@/assets/img/11.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
}
.img8:hover {
  transform: scale(1.03);
}
</style>