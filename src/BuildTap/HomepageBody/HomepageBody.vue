<template>
    <featured-home />
    <!--  -->
    <recent-post-home />
    <!-- info see more -->
    <info-see-more />
</template>

<script>
import FeaturedHome from './FeaturedHome.vue';
import InfoSeeMore from './InfoSeeMore.vue';
import RecentPostHome from './RecentPostHome.vue';
export default {
  components: { FeaturedHome, RecentPostHome, InfoSeeMore,  },

}
</script>