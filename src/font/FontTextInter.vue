<template>
    <p class="btn-load-more">{{ btnLoadMore }}</p>
    <p class="btn-subscribe">{{ btnSubscribe }}</p>
</template>

<script>
export default {
  props: {
    btnLoadMore: {
      type: String,
      required: true,
    },
    btnSubscribe: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.btn-load-more {
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
}
.btn-subscribe {
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  color: #000000;
}
</style>