<template>
  <!--  -->
  <p class="btn-load-more">{{ btnLoadMore }}</p>
  <!-- tap contact teams -->
  <p id="member-name">{{ memberName }}</p>
  <!-- introduction component -->
  <p id="breadcrumbs-blur">{{ BreadcrumbsBlur }}</p>
  <p id="breadcrumbs">{{ Breadcrumbs }}</p>
</template>

<script>
export default {
  props: {
    btnLoadMore: {
      type: String,
      required: true,
    },
    memberName: {
      type: String,
      required: true,
    },
    BreadcrumbsBlur: {
      type: String,
      required: true,
    },
      Breadcrumbs: {
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
#member-name {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #272e35;
  margin: 0 auto;
  padding: 0;
  text-align: center;
  position: absolute;
  width: 160px;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#breadcrumbs-blur {
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #676e76;
}
#breadcrumbs {
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
}
</style>