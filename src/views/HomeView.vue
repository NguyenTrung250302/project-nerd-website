<template>
  <div class="home">
    <header-view />
    <!--  -->
    <homepage-body />
    <!--  -->
    <footer-view />
  </div>
</template>

<script>
import HeaderView from '@/components/HeaderView.vue'
import FooterView from '@/components/FooterView.vue'
import HomepageBody from '@/BuildTap/HomepageBody/HomepageBody.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderView,
    FooterView,
    HomepageBody,
  }
}
</script>
