<template>
  <!-- arbitrum component -->
  <p id="title-arbitrum">{{ titleArbitrum }}</p>
  <p id="title-intro">{{ titleIntro }}</p>
</template>

<script>
export default {
  props: {
    titleArbitrum: {
      type: String,
      required: true,
    },
    titleIntro: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}
#title-arbitrum {
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 62px;
  display: flex;
  align-items: center;
  color: #3e3e5f;
  /* margin: 20px 0; */
}
#title-intro {
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 32px;
  color: #3e3e5f;
  margin: 0;
  padding: 0;
}
</style>