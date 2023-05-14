<template>
  <button class="btn-load-more">
    <font-text-inter btnLoadMore="LOAD MORE" />
  </button>
</template>

<script>
import FontTextInter from "@/font/FontTextInter.vue";
export default {
  components: { FontTextInter },
};
</script>

<style scoped>
.btn-load-more {
  width: 945px;
  height: 80px;
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  padding: 18px 26px;
  background: #000000;
  box-shadow: 0px 2px 5px rgba(103, 110, 118, 0.08),
    0px 0px 0px 1px rgba(103, 110, 118, 0.16), 0px 1px 1px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
    margin: 30px auto;
}
button:hover {
  cursor: pointer;
}
</style>