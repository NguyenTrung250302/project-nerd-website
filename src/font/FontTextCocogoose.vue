<template>
  <p id="title-item">{{ titleItem }}</p>
  <p id="text-pinned">{{ FontTextPinned }}</p>
  <p id="text-premium">{{ FontTextPremium }}</p>
</template>

<script>
export default {
  props: {
    titleItem: {
      type: String,
      required: true,
    },
    FontTextPinned: {
      type: String,
      required: true,
    },
    FontTextPremium: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
#title-item {
  font-family: "Cocogoose", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #3e3e5f;
  margin-top: 50px;
}
#text-pinned {
  font-family: "Cocogoose", sans-serif;
  font-weight: 400;
  font-size: 8px;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #3e3e5f;
  margin: 2px 0 0 -20px;
  padding-left: 25px;
}
#text-premium {
  font-family: "Cocogoose", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
  margin: 2px 0 0 0;
  padding: 0 0;
}
</style>