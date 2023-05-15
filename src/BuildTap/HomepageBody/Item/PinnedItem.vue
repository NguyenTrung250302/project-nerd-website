<template>
  <div class="item-text">
    <font-text-cocogoose FontTextPinned="Pinned" id="item" />
  </div>
</template>

<script>
import FontTextCocogoose from "@/font/FontTextCocogoose.vue";
export default {
  components: { FontTextCocogoose },
};
</script>

<style scoped>
.item-text {
  width: 75px;
  height: 20px;
  background: #ffffff;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px
}
</style>