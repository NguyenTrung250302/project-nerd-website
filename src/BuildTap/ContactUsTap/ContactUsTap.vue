<template>
  <div>
    <header-view />
    <!-- title -->
    <div>
      <h1>contact us</h1>
    </div>
    <!-- body -->
    <div id="contact-us">
      <div class="left">
        <h1>left</h1>
      </div>
      <div class="right">
        <h1>right</h1>
      </div>
    </div>
    <!--  -->
    <footer-view />
  </div>
</template>

<script>
import HeaderView from "@/components/HeaderView.vue";
import FooterView from "@/components/FooterView.vue";
export default {
  components: {
    HeaderView,
    FooterView,
  },
};
</script>

<style scoped>
#contact-us {
  width: 100%;
  height: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.left {
display: flex;
justify-content: center;
align-items: center;
}
.right {
display: flex;
justify-content: center;
align-items: center;
}
</style>