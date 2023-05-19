<template>
  <div class="container-info">
    <div class="text-info">
      <p class="text1">Subscribe to see what we're thinking</p>
      <p class="text2">Start your day of crypto with NERD</p>
    </div>
    <!--  -->
    <div class="frame-input">
      <input class="input-email" placeholder="Your email address" type="text" required/>
    </div>
    <!--  -->
    <subscribe-button />
  </div>
</template>

<script>
import SubscribeButton from "@/button/SubscribeButton.vue";
export default {
  components: { SubscribeButton },
};
</script>

<style scoped>
.container-info {
  margin-bottom: 150px;
}
.text-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.text1 {
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  line-height: 55px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #3e3e5f;
}
.text2 {
  font-family: "Mulish", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: rgba(62, 62, 95, 0.655);
}
.frame-input {
  width: 475px;
  height: 45px;
  box-sizing: border-box;
  border-bottom: 2px solid #3e3e5f;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 9.5px 9px 11.5px;
  margin: 0 auto;
}
.input-email {
  width: 300px;
  height: 25px;
  font-family: "Mulish", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  color: #6c6c70;
  border: none;
  outline: none;
}
</style>