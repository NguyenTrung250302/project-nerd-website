<template>
  <div class="home">
    <header-view />
    <!--  -->
    <footer-view />
  </div>
</template>

<script>
import HeaderView from '@/components/HeaderView.vue'
import FooterView from '@/components/FooterView.vue'
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    HeaderView,
    FooterView,
  }
}
</script>
