<template>
  <div class="container-featured">
    <font-text-cocogoose titleItem="Featured" />
    <div class="pinned-wrap">
      <!-- row 1 -->
      <div class="row">
        <!-- box 1 -->
        <div class="pinned-item img1">
          <!-- item -->
          <div class="form-item-above">
            <pinned-item />
            <premium-item />
          </div>
          <!-- content -->
          <div class="form-item-below">
            <font-text-mulish NameDesigner="by Thanh Tung" />
            <font-text-raleway ContentItemHomePage="The Bridge Series: A" />
            <font-text-raleway ContentItemHomePage="Travel Through" />
            <font-text-raleway ContentItemHomePage="Wormhole" />
          </div>
        </div>
        <!-- box 2 -->
        <div class="pinned-item">
          <div class="pinned-item-small">
            <!-- item -->
            <div class="form-item-above">
              <pinned-item />
              <premium-item />
            </div>
            <!-- content -->
            <div class="form-item-below">
              <font-text-mulish NameDesigner="by Tran Thuan" />
              <font-text-raleway
                ContentItemSmall="The Bridge Series: The Designs"
              />
            </div>
          </div>
          <!-- box 3 -->
          <div class="pinned-item-small">
            <!-- item -->
            <div class="form-item-above">
              <pinned-item />
              <premium-item />
            </div>
            <!-- content -->
            <div class="form-item-below">
              <font-text-mulish NameDesigner="by yy.#0101" />
              <font-text-raleway
                ContentItemSmall="Arbitrum DAO and $ARB: Hãy đu giá đúng!"
              />
            </div>
          </div>
        </div>
        <!-- box 4 -->
        <div class="pinned-item">
          <div class="pinned-item-small">
            <!-- item -->
            <div class="form-item-above">
              <pinned-item />
              <premium-item />
            </div>
            <!-- content -->
            <div class="form-item-below">
              <font-text-mulish NameDesigner="by Thanh Tung" />
              <font-text-raleway ContentItemSmall="In B(ank)TC We Trust" />
            </div>
          </div>
          <!-- box 5 -->
          <div class="pinned-item-small">
            <!-- item -->
            <div class="form-item-above">
              <pinned-item />
              <premium-item />
            </div>
            <!-- content -->
            <div class="form-item-below">
              <font-text-mulish NameDesigner="by Tran Thuan" />
              <font-text-raleway
                ContentItemSmall="Transaction Order Flows & MEV"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- row 2 -->
      <div class="row">
        <!-- box 6 -->
        <div class="pinned-item-small">
          <!-- item -->
          <div class="form-item-above">
            <pinned-item />
            <premium-item />
          </div>
          <!-- content -->
          <div class="form-item-below">
            <font-text-mulish NameDesigner="by yy.#0101" />
            <font-text-raleway
              ContentItemSmall="SVB, USDC depeg, hệ quả của QT và bài học về Convexity"
            />
          </div>
        </div>
        <!-- box 7 -->
        <div class="pinned-item-small">
          <!-- item -->
          <div class="form-item-above">
            <pinned-item />
            <premium-item />
          </div>
          <!-- content -->
          <div class="form-item-below">
            <font-text-mulish NameDesigner="by Thanh Tung" />
            <font-text-raleway
              ContentItemSmall="InfinityPools: Leverage to infinity and beyond"
            />
          </div>
        </div>
        <!-- box 8 -->
        <div class="pinned-item-small">
          <!-- item -->
          <div class="form-item-above">
            <pinned-item />
            <premium-item />
          </div>
          <!-- content -->
          <div class="form-item-below">
            <font-text-mulish NameDesigner="by Tran Thuan" />
            <font-text-raleway
              ContentItemSmall="MEV Part 1 : Những điều cần biết"
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
import FontTextCocogoose from "@/font/FontTextCocogoose.vue";
import FontTextMulish from "@/font/FontTextMulish.vue";
import FontTextRaleway from "@/font/FontTextRaleway.vue";
export default {
  components: {
    PinnedItem,
    PremiumItem,
    FontTextCocogoose,
    FontTextMulish,
    FontTextRaleway,
  },
};
</script>

<style scoped>
.contain {
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
}
.pinned-item-small {
  width: 425px;
  height: 200px;
  border-radius: 16px;
  background-color: rgb(186, 189, 187);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.form-item-above {
  display: flex;
  padding: 20px 20px;
}
.form-item-below {
  padding: 20px 20px;
}
.img1 {
  background-color: cadetblue;
}
</style>