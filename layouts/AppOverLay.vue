<template>
    <div v-if="$store.state.isLeftPanelToggled" class="app-overlay" @click="$store.commit('setLeftPanelToggle')"></div>
</template>
<script></script>
<style lang="scss" scoped>

 .app-overlay {
    position: fixed;
    z-index: 102;
    top: 0;
    left: 0;
    width: 100%;
    height: 0%;
    background-color: rgba(0,0,0,.5);
    transition: opacity .15s,height 0s linear .15s;
    opacity: 0;
    
    @media (max-width: 1200px) {
        height: 100%;
        opacity: 1;
        transition: opacity .15s,height 0s linear 0s;
    }
 }
 /* .visible {

    @media (max-width: 1200px) {

    }
} */
</style>