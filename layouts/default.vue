<template>
    <div class="app" :class="[$store.state.isLeftPanelToggled? 'opened-left-panel': '', $store.state.isRightPanelToggled? 'opened-right-panel': '']" >
        <AppHeader/>
        <LeftPanel/>
        <RightPanel/>
        <main class="wrapper">
            <div class="wrapper__inner">
                <div class="f-container">
                    <Nuxt/>
                </div>
            </div>
            <div class="livechat"></div>
            <div class="footer"></div>
        </main>
        <BottomMenu/>
        <AppOverLay/>
        <Modal v-show="$store.state.isModal"/>

    </div>
</template>
<script>
    import AppHeader from './AppHeader.vue';
    import LeftPanel from '../components/LeftPanel.vue';
    import RightPanel from '../components/RightPanel.vue';
    import BottomMenu from '../components/BottomMenu.vue';
    import AppOverLay from './AppOverLay.vue';


    import Modal from "@/components/modals/index.vue";

    export default {
        name: 'default',
        components: {AppHeader, LeftPanel, RightPanel, BottomMenu, AppOverLay, Modal},
        created() { 
            console.log(this.$store.state.language)
        }
    }
</script>
<style lang="scss" scoped>
    .f-container {
        width: 100%;
        max-width: 1088px;
        padding-left: 24px;
        padding-right: 24px;
        margin: 0 auto;
        position: relative;
        @media (max-width: 768px) {
            padding-left: 16px;
            padding-right: 16px;
        }
    }
    .opened-left-panel {
      padding-left: 232px;
      @media(max-width:980px) {
        padding: 0px;
      }

    }
    .opened-right-panel{
        padding-right: 325px;
        @media(max-width:980px) {
        padding: 0px;
      }
    }
    .app {
        width: 100%;
        transition: padding .1s ease-in-out;
        padding-top: 64px;
        @media (max-width: 1000px){
            padding-bottom: 60px;
        }
        @media (max-width: 768px) {
            padding-bottom: 60px;
        }
        .wrapper {
            display: flex;
            flex-direction: column;
            overflow: hidden;
            min-height: 100%;
            &::-webkit-scrollbar {
                display: none;
            }
            .wrapper__inner {
                flex: 1 1;
                min-height: 400px;
                padding: 34px 0;
                &::-webkit-scrollbar {
                    display: none;
                }
                @media (max-width: 1000px){
                    padding-top: 15px;
                    padding-bottom: 15px;
                }
                @media (max-width: 768px){
                    padding-top: 10px;
                    padding-bottom: 10px;
                }
            }
        }
    }
</style>