<template>
    <featured-home />
    <!--  -->
    <recent-post-home />
    <!-- btn -->
    <load-more-button />
    <!-- info see more -->
    <info-see-more />
</template>

<script>
import LoadMoreButton from '@/button/LoadMoreButton.vue';
import FeaturedHome from './FeaturedHome.vue';
import InfoSeeMore from './InfoSeeMore.vue';
import RecentPostHome from './RecentPostHome.vue';
export default {
  components: { FeaturedHome, RecentPostHome, InfoSeeMore, LoadMoreButton,  },

}
</script>