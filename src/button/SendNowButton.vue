<template>
  <button class="btn-send-now">
    <font-text-mulish btnSendNow="Send Now" />
  </button>
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
.btn-send-now {
  width: 145px;
  height: 48px;
  background: #000000;
  box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
}
.btn-send-now:hover {
  cursor: pointer;
}
</style>