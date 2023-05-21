<template>
  <header-view />
  <!-- Arbitrum  -->
    <arbitrum-component />
  <!-- more -->
  <div id="title-a">
    <font-text-cocogoose titleItem="You MIGHt ALSO LIKE" />
  </div>
  <div id="featured-home">
    <featured-home />
  </div>
  <!--  -->
  <footer-view />
</template>

<script>
import FooterView from "@/components/FooterView.vue";
import HeaderView from "@/components/HeaderView.vue";
import FeaturedHome from "../HomepageBody/FeaturedHome.vue";
import FontTextCocogoose from '@/font/FontTextCocogoose.vue';
import ArbitrumComponent from './ArbitrumComponent.vue';

export default {
  components: {
    HeaderView,
    FooterView,
    FeaturedHome,
    FontTextCocogoose,
    ArbitrumComponent
  },
};
</script>

<style scoped>
#featured-home {
  margin: 0 auto 100px auto;
}
#title-a {
  width: 1300px;
  height: auto;
  display: flex;
  justify-content: center;
  margin: 0 auto;
}
</style>