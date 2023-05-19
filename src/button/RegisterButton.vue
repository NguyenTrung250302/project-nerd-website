<template>
  <button id="btn-register">
    <font-text-mulish btnRegister="REGISTER NOW"/>
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
#btn-register {
  width: 650px;
  height: 70px;
  padding: 12px 40px;
  gap: 8px;
  background: #000000;
  box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  border: none;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
#btn-register:hover {
    cursor: pointer;
}
</style>