<template>
  <div class="container-coming-soon">
    <header-view />
    <!-- body -->
    <div id="icon">
      <!-- icon -->
      <icon-coming-soon />
      <!-- content -->
      <div id="content">
        <font-text-raleway contentComingSoon="Coming Soon..." />
        <font-text-mulish
          contentComingSoon1="Sorry for the dust! We know it’s taking a while but sit tight and we’ll be with you soon."
        />
      </div>
    </div>
    <footer-view />
  </div>
</template>

<script>
import HeaderView from "@/components/HeaderView.vue";
import IconComingSoon from "@/Icon/IconComingSoon.vue";
import FooterView from "@/components/FooterView.vue";
import FontTextRaleway from "@/font/FontTextRaleway.vue";
import FontTextMulish from "@/font/FontTextMulish.vue";
export default {
  components: {
    HeaderView,
    FooterView,
    IconComingSoon,
    FontTextRaleway,
    FontTextMulish,
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
</style>