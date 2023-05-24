<template>
  <button class="btn-contact">
    <p id="btn-contact-content">Connect Wallet</p>
  </button>
</template>

<script>
export default {
  components: {},
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
#btn-contact-content {
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-size: 14px;
  font-family: "mulish", sans-serif;
  font-weight: 600;
  margin: 0;
  padding: 0;
}
</style>