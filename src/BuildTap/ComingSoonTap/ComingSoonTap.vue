<template>
  <div class="container-coming-soon">
    <header-view />
    <!-- body -->
    <div id="icon">
      <!-- icon -->
      <div></div>
      <icon-coming-soon />
      <!-- content -->
      <div id="content">
        <h1 id="outstanding-text">Coming Soon...</h1>
        <p id="advice">Sorry for the dust! We know it’s taking a while but sit tight and we’ll be with you soon.</p>
      </div>
    </div>
    <footer-view />
  </div>
</template>

<script>
import HeaderView from "@/components/HeaderView.vue";
import IconComingSoon from "@/Icon/IconComingSoon.vue";
import FooterView from "@/components/FooterView.vue";
export default {
  components: {
    HeaderView,
    FooterView,
    IconComingSoon,
  },
};
</script>

<style scoped>
#icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
}
#content {
  margin: 50px 0;
}
#outstanding-text {
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #3e3e5f;
  margin: 0;
}
#advice {
  font-family: "Mulish", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  color: rgba(62, 62, 95, 0.655);
  margin: 10px 0;
  padding: 0;
}
</style>