<template>
  <div id="container-academy">
    <header-view />
    <!-- introduction -->
    <introduction-academy-main />
    <!-- list introduction -->
    <list-introduction-academy />
    <!--  -->
    <footer-view />
  </div>
</template>

<script>
import HeaderView from "@/components/HeaderView.vue";
import FooterView from "@/components/FooterView.vue";
import IntroductionAcademyMain from './IntroductionAcademyMain.vue';
import ListIntroductionAcademy from './ListIntroductionAcademy.vue';

export default {
  components: {
    HeaderView,
    FooterView,
    IntroductionAcademyMain,
    ListIntroductionAcademy,

  },
};
</script>

<style scoped>
#container-btn {
  width: 1100px;
  margin: 0 auto;
}
#distance {
  margin-top: 50px;
}
</style>