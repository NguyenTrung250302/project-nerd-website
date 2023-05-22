<template>
  <div id="container-intro">
    <div id="sider-bar">
      <sider-bar-arbitrum-intro />
      <icon-coming-soon id="font-icon1"/>
    </div>
    <!--  -->
    <div id="content-intro">
      <content-intro />
    </div>
  </div>
</template>

<script>
import IconComingSoon from '@/Icon/IconComingSoon.vue';
import SiderBarArbitrumIntro from './SiderBarArbitrumIntro.vue';
import ContentIntro from './ContentIntro.vue';
export default {
  components: {
    SiderBarArbitrumIntro,
    IconComingSoon,
    ContentIntro,
  },
};
</script>

<style scoped>
#container-intro {
  width: 1300px;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
#sider-bar {
  width: 300px;
  height: 1000px;
  /* background-color: blueviolet; */
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#content-intro {
  width: 950px;
  height: auto;
}
#font-icon1 {
  width: 270px;
  height: 320px;
}
</style>