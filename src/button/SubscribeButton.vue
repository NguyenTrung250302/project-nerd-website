<template>
  <button class="btn-subscribe">SUBSCRIBE</button>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.btn-subscribe {
  width: 250px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  box-shadow: 0px 2px 5px rgba(103, 110, 118, 0.08),
    0px 0px 0px 1px rgba(103, 110, 118, 0.16), 0px 1px 1px rgba(0, 0, 0, 0.12);
  margin: 40px auto;
  transition-duration: 0.25s;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  color: #000000;
  transition: transform 0.3s ease;
  transition-timing-function: ease-in-out;
  text-decoration: none;
}
.btn-subscribe:hover {
  cursor: pointer;
  color: #ffffff;
  background-color: #eb8347;
  transform: scale(1.05);
}
</style>