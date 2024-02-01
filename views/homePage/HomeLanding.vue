<template>
  <div class="intro-wrapper">
    <LandingIntro/>
    <LandingFeatures/>
    <LandingStatistics/>
  </div>
</template>

<script>
    import LandingIntro from './landing/HomeIntro.vue'
    import LandingFeatures from './landing/HomeFeatures.vue'
    import LandingStatistics from './landing/LandingStatistics.vue'


  export default {
      name: "HomeLanding",
      components: { LandingIntro, LandingFeatures, LandingStatistics},
  };
</script>

<style lang="scss" scoped>
 
  .intro-wrapper{
    margin-top: -34px;
    @media (max-width: 1000px) {
        margin-top: -15px;
    }
}
</style>
