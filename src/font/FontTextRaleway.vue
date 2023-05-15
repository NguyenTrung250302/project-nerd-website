<template>
  <p class="content-item">{{ ContentItemHomePage }}</p>
  <!--  -->
  <p class="small-content">{{ ContentItemSmall }}</p>
</template>

<script>
export default {
  props: {
    ContentItemHomePage: {
      type: String,
      requited: true,
    },
    ContentItemSmall: {
      type: String,
      requited: true,
    },
  },
};
</script>

<style scoped>
.content-item {
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin: 5px 0;
}
.small-content {
  font-family: "Raleway",sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  width: 325px;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin: 5px 0;
  padding: 0 0;
}
</style>