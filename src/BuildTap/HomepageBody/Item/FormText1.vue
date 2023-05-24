<template>
  <div id="container-form-text">
    <p id="name-designer">{{ thanhTung }}</p>
    <p id="font-big">{{ ContentBig }}</p>
  </div>
</template>

<script>
export default {
  props: {
    thanhTung: {
      type: String,
      requited: true,
    },
    ContentBig: {
      type: String,
      requited: true,
    },
  },
};
</script>

<style scoped>
#container-form-text {
  width: 425px;
  height: auto;
}
#name-designer {
  font-family: "Mulish", sans-serif;
  font-weight: 700;
  font-size: 13px;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin: 10px 0;
}
#font-big {
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 30px;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin: 0;
  width: 370px;
  line-height: 50px;
}
</style>