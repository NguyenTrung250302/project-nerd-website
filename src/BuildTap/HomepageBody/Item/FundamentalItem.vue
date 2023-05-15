<template>
  <div id="fundamental">
    <font-text-mulish FundamentalItem="Fundamental" />
  </div>
</template>

<script>
import FontTextMulish from "@/font/FontTextMulish.vue";
export default {
  components: {
    FontTextMulish,
  },
};
</script>

<style scoped>
#fundamental {
  border: 1px solid #ffffff;
  border-radius: 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4px 8.69px 5.39px 9px;
  width: auto;
  height: 20px;
  margin-right: 5px;
}
</style>