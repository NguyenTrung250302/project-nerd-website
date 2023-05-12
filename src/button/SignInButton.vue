<template>
  <div class="button-white">
    <button class="btn-login">Sign In</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.btn-login {
  margin: 0 10px;
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "mulish", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: rgba(0, 0, 0, 1);
  background-color: rgba(255, 255, 255, 1);
  border: solid 0.1px silver;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(103, 110, 118, 0.08),
    0px 0px 0px 1px rgba(103, 110, 118, 0.16), 0px 1px 1px rgba(0, 0, 0, 0.12);
}
.btn-login:hover {
  cursor: pointer;
}
</style>