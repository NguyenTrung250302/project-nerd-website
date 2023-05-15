<template>
  <p id="font-text">{{ TextContactButton }}</p>
  <p id="name-designer">{{ NameDesigner }}</p>
  <p id="fundamental-item">{{ FundamentalItem }}</p>
  <p id="coming-content">{{ contentComingSoon1 }}</p>
</template>

<script>
export default {
  props: {
    TextContactButton: {
      type: String,
      requited: true,
    },
    NameDesigner: {
      type: String,
      requited: true,
    },
    FundamentalItem: {
      type: String,
      requited: true,
    },
    contentComingSoon1: {
      type: String,
      requited: true,
    },
  },
};
</script>

<style scoped>
#font-text {
  color: #ffffff;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  font-size: 14px;
  font-family: "mulish", sans-serif;
  font-weight: 600;
}
#name-designer {
  font-family: "Mulish", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin-bottom: 15px;
}
#fundamental-item {
  margin: 0 0;
  font-family: "Mulish", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 8px;
  display: flex;
  align-items: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
}
#coming-content {
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  color: rgba(62, 62, 95, 0.655);
  margin: 0;
  padding: 0;
}
</style>