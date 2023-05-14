<template>
  <div>
    <p class="font-text-navigation">{{ TextNavigation }}</p>
  </div>
</template>

<script>
export default {
  props: {
    TextNavigation: String,
  },
};
</script>

<style scoped>
@import url("@/assets/globalFont.css");
.font-text-navigation {
  color: #3E3E5F;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  font-family: 'Cocogoose', sans-serif;
}
</style>