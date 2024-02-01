<template>
  <div class="header">

    <div class = "header__left-block">
      <div class = "logo">
        <div class="logo__inner">
          <!-- left panel hide by nur -->
          <!-- <button v-if = "$store.state.device.isDesktop" @click="leftToggle()" aria-label="Open menu" class="hamburger mobile-sensitive">
            <font-awesome-icon icon="fa-solid fa-bars-staggered" class= "mobile-sensitive"/>
          </button> -->
          <NuxtLink to="/" class="logo__link">
            <picture class="logo__picture">
              <source srcset="@/assets/images/logo-mobile.svg" media="(max-width: 473px)" width="49" height="37">
              <img width="188" height="39" src="@/assets/images/logo.svg" alt="BetFury.io" class="logo__img">
            </picture>
          </NuxtLink>
        </div>
      </div>
      <!-- <div v-if = "$store.state.device.isDesktop" class="binary-switcher casino-sport-selector mobile-sensitive"> -->
      <div class="binary-switcher casino-sport-selector mobile-sensitive">
          <button :class="leftSelected? 'selected':'' " @click="leftSelected = true" class="px-4">
            <font-awesome-icon icon="fa-solid fa-heart" size="1x" class="px-1"/>
            <span>Gaming</span>
          </button>
          <button :class="leftSelected? '':'selected' " @click="leftSelected = false">
            <img v-if="leftSelected" src="@/assets/images/icon/piggy_inactive.png" class="me-1" style="margin-left: -11px; border-radius: 50%; height: 25px"/>
            <img v-if="!leftSelected" src="@/assets/images/icon/piggy_active.png" class="me-1" style="margin-left: -11px; border-radius: 50%; height: 25px"/>

            <span>Earn</span>
          </button>
      </div>
    </div>
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <AppHeaderRight/>
      <LanguageContainer/>
    </div>
  </div>
</template>
  
<script>
  import AppHeaderRight from "./AppHeaderRight.vue";
  import LanguageContainer from '@/components/views/LanguageContainer.vue';

  export default {
    name: "Header",
    components: {AppHeaderRight, LanguageContainer},
    data() {
      return {
        leftSelected: true,

        language: {
          code: "en",
          name: "English",
          imgUrl: "en.png"
        },
      };
    },
    created() {
      this.language = this.$i18n.locales.find(({ code }) => code === this.$i18n.locale)
    },
    mounted() {
     
    },
    methods: {
      leftToggle(){
        this.$store.commit("setLeftPanelToggle");
      },
      setLanguage(locale) {
        this.language = locale
        this.$router.replace(this.switchLocalePath(locale.code));
      },
    },
  };
</script>

<style lang="scss" scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #161f2c;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    height: 64px;
    padding-left: 24px;
    padding-right: 24px;
    z-index: 104;
    @media (max-width: 780px){
      padding-left: 12px;
      padding-right: 12px;
    }
    .header__left-block{
      display: flex;
      align-items: center;
      @media (max-width: 380px){
        display: none;
      }
      .logo {
        background-color: #202a39;
        border-radius: 10px;
        transform: skewY(-3deg) skewX(-17deg);
        padding: 36px 25px 16px 66px;
        margin: -30px 0 -20px -65px;
        @media (max-width: 576px) {
          transform: none;
          padding: 0 0 0 66px;
          margin: 0 0 0 -65px;
          background-color: transparent;
        }
        .logo__inner{
          transform: skewY(3deg) skewX(17deg);
          display: flex;
          align-items: center;
          @media (max-width: 576px) {
            transform: none;
          }
          .hamburger {
            margin-right: 6px;
            width: 32px;
            height: 32px;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            color: $fury-font-color;
            @media (max-width: 980px) {
              width: 0px;
              height: 0px;
              display: none;
            }
          }
          .logo__link {
            margin-right: 10px;
            padding: 0;
            border: none;
            background-color: transparent;
            display: block;
            .logo__picture {
              display: block;
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
              padding: 0;
              margin: 0;
              .logo__img {
                border: none;
                padding: 0;
                background-color: transparent;
                display: block;
              }
            }
          }
        }
      }
      .casino-sport-selector {
        margin-left: 32px;
        @media (max-width: 780px){
          visibility: hidden;
          display: none;
        }
      }
    }

  }

 

    
</style>
  