<template>
  <div class="premium-item">
    <font-text-cocogoose FontTextPremium="PREMIUM" />
    <icon-item-premium />
  </div>
</template>

<script>
import FontTextCocogoose from "@/font/FontTextCocogoose.vue";
import IconItemPremium from '@/Icon/IconItemPremium.vue';
export default {
  components: {
    FontTextCocogoose,
    IconItemPremium,
  },
};
</script>

<style scoped>
.premium-item {
  width: 96px;
  height: 20px;
  background: #000000;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>