<template>
  <div class="page-home">
    <HomeLanding v-if = "$store.state.account.name == ''"/>
    <HomeBanner v-else/>
    <HomeLobby/>
  </div>
</template>
<script>
  import HomeLanding from "@/views/homePage/HomeLanding.vue";
  import HomeLobby from "@/views/homePage/HomeLobby.vue"
  import HomeBanner from "@/views/homePage/HomeBanner.vue"

  export default {
    name: "index",
    components: {HomeLanding, HomeBanner, HomeLobby},
    created() { 
      this.$i18n.locale = this.$store.state.language
    },
    async mounted() {
      await this.$store.dispatch('account/checkAWSLogin')
    },
  };
</script>
<style lang="css">
  .splide-list {
    backface-visibility: hidden;
    display: flex;
    height: 100%;
    margin: 0!important;
    padding: 0!important;
    transform-style: preserve-3d;
  }
  .splide__arrow{
    border-radius: 25%;
    background: #93acd3;
    
  }
  .splide__slide {
    margin-right: 16px;
  }
</style>