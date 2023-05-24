<template>
  <div id="form-text2">
    <p id="name-designer-1">{{ nameDesigner }}</p>
    <p id="text-small">{{ contentSmall }}</p>
  </div>
</template>

<script>
export default {
  props: {
    nameDesigner: {
      type: String,
      requited: true,
    },
    contentSmall: {
      type: String,
      requited: true,
    },
  },
};
</script>

<style scoped>
#form-text2 {
  width: 435px;
  height: auto;
}
#name-designer-1 {
  font-family: "Mulish", sans-serif;
  font-weight: 700;
  font-size: 13px;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin: 10px 0;
}
#text-small {
  font-family: "Raleway",sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin: 0;
  width: 325px;
  margin-bottom: 10px;
}
</style>