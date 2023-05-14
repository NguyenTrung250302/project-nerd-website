<template>
  <div class="button-black">
    <button class="btn-contact">
      <font-text-contact-button :TextContactButton="textButton" />
    </button>
  </div>
</template>

<script>
import FontTextContactButton from "@/font/FontTextContactButton.vue";
export default {
  components: {
    FontTextContactButton,
  },
  data() {
    return {
      textButton: "Connect Wallet",
    };
  },
};
</script>

<style scoped>
.btn-contact {
  width: 140px;
  height: 40px;
  border-radius: 8px;
  border: none;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: #000000;
  box-shadow: 0px 2px 5px rgba(103, 110, 118, 0.08),
    0px 0px 0px 1px rgba(103, 110, 118, 0.16), 0px 1px 1px rgba(0, 0, 0, 0.12);
}
.btn-contact:hover {
  cursor: pointer;
}
</style>