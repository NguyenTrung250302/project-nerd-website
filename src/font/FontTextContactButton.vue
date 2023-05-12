<template>
  <div>
    <p class="font-text-navigation">{{ TextContactButton }}</p>
  </div>
</template>

<script>
export default {
  props: {
    TextContactButton: String,
  },
};
</script>

<style scoped>
.font-text-navigation {
  color: #ffffff;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  font-size: 14px;
  font-family: "mulish", sans-serif;
  font-weight: 600;
}
</style>