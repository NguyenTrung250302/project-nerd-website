<template>
  <div id="container-shider-bar">
    <!-- 1 -->
    <div class="font-nav">
      <div class="jamb"></div>
      <font-text-mulish fontBtnBlod="Intro1" />
    </div>
    <!-- 2 -->
    <div class="font-nav">
      <div class="jamb"></div>
      <font-text-mulish fontBtnBlod="Arbitrum DAO" />
    </div>
    <!-- 3 -->
    <div class="font-nav">
      <div class="jamb"></div>
      <font-text-mulish fontBtnBlod="Arbitrum Orbit" />
    </div>
    <!-- 4 -->
    <div class="font-nav">
      <div class="jamb"></div>
      <font-text-mulish fontBtnBlod="The fair value of $ARB" />
    </div>
    <!-- 5 -->
    <div class="font-nav">
      <div class="jamb"></div>
      <font-text-mulish fontBtnBlod="Vài dòng cuối" />
    </div>
  </div>
</template>

<script>
import FontTextMulish from "@/font/FontTextMulish.vue";
export default {
  components: { FontTextMulish },
  data() {
    return {
      
    };
  },
  methods: {
    
  },
};
</script>

<style scoped>
#container-shider-bar {
  width: 270px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.font-nav {
  display: flex;
  align-items: center;
}
.jamb {
  width: 2px;
  height: 35px;
  background: #000000;
  opacity: 0.1;
}
</style>