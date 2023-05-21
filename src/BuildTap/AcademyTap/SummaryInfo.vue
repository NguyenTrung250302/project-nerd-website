<template>
  <div id="container-summary">
    <div id="summary-info">
      <icon-clock />
      <font-text-mulish :contentResults="content1" />
    </div>
    <div id="summary-info">
      <icon-label />
      <font-text-mulish :contentResults="content2" />
    </div>
    <div id="summary-info">
      <icon-user-1 />
      <font-text-mulish :contentResults="content3" />
    </div>
  </div>
</template>

<script>
import IconClock from "@/Icon/iconClock.vue";
import IconLabel from "@/Icon/IconLabel.vue";
import FontTextMulish from "@/font/FontTextMulish.vue";
import IconUser1 from '@/Icon/IconUser1.vue';
export default {
  components: {
    IconClock,
    IconUser1,
    IconLabel,
    FontTextMulish,
  },
  props:['content1','content2','content3'],
};
</script>

<style scoped>
#container-summary {
  width: 450px;
  display: flex;
  justify-content: space-between;
}
#summary-info {
  display: flex;
  align-items: center;
}
</style>