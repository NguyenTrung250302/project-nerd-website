<template>
  <div id="container-academy">
    <header-view />
    <!-- introduction detail -->
    <introduction-academy-detail />
    <!-- course detail -->
    <course-description />
    <!-- btn -->
    <div id="container-btn">
    <register-button />
    </div>
    <!-- see more info -->
    <info-see-more id="distance"/>
    <!--  -->
    <footer-view />
  </div>
</template>

<script>
import HeaderView from "@/components/HeaderView.vue";
import FooterView from "@/components/FooterView.vue";
import InfoSeeMore from '../HomepageBody/InfoSeeMore.vue';
import RegisterButton from '@/button/RegisterButton.vue';
import IntroductionAcademyDetail from './IntroductionAcademyDetail.vue';
import CourseDescription from './CourseDescription.vue';
export default {
  components: {
    HeaderView,
    FooterView,
    InfoSeeMore,
    RegisterButton,
    IntroductionAcademyDetail,
    CourseDescription,
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