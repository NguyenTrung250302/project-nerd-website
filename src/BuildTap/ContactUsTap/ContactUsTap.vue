<template>
  <div>
    <header-view />
    <!-- body -->
    <div id="contact-us">

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
    }
}
</script>

<style scoped>
#contact-us {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
</style>