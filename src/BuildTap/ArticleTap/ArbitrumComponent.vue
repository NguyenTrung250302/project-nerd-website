<template>
  <div id="container-arbitrum">
    <!-- background img -->
    <img id="img-arbitrum" src="@/assets/img/4.png" alt="loading" />
    <!-- title -->
    <div id="form-title">
      <div id="title-arbitrum">
        <!-- name tags -->
        <div id="form-tags">
            <fundamental-item-black />
            <education-item-black />
            <premium-item />
        </div>
        <!-- slogan -->
        <font-text-raleway
          titleArbitrum="Arbitrum DAO and $ARB:
        Hãy đu giá đúng!"
        />
        <!-- name design -->
        <font-text-mulish NameDesigner1="by Thanh Tung ∙ 7 min read" />
      </div>
    </div>
  </div>
</template>

<script>
import FontTextMulish from "@/font/FontTextMulish.vue";
import FontTextRaleway from "@/font/FontTextRaleway.vue";
import PremiumItem from '../HomepageBody/Item/PremiumItem.vue';
import FundamentalItemBlack from '../HomepageBody/Item/FundamentalItemBlack.vue';
import EducationItemBlack from '../HomepageBody/Item/EducationItemBlack.vue';

export default {
  components: {
    FontTextMulish,
    FontTextRaleway,
    PremiumItem,
    FundamentalItemBlack,
    EducationItemBlack,

  },
};
</script>
,
    PremiumItem
<style scoped>
#container-arbitrum {
  width: 1300px;
  height: 535px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
}
#img-arbitrum {
  width: 580px;
  height: 535px;
  border-radius: 16px;
}
#form-tags {
    display: flex;
}
#form-title {
  width: 620px;
  height: 535px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#title-arbitrum {
  width: 620px;
  height: 220px;
}
</style>