<template>
  <div class="page-home__lobby-wrapper">
    <div class="lobby">
      <HomeLobbyGames/>
      <HomeLobbyStatistics/>
    </div>
  </div>
</template>
  
<script>
  import HomeLobbyGames from './HomeLobbyGames.vue'
  import HomeLobbyStatistics from './HomeLobbyStatistics.vue'
  export default {
    name: "HomeLobby",
    components: {HomeLobbyGames, HomeLobbyStatistics},
  };
</script>
<style lang="scss" scoped>
  .page-home__lobby-wrapper {
    min-height: 100vh;
    
  }
</style>