<template>
    <div class="header__right-block">

        <AppHeaderRightLogged v-if="$store.state.account.name"/>
        <div class="btn-container no-logged" v-else>
            <button @click="$store.dispatch('setModalType', 'login')" class="fury-btn fury-btn-primary">{{ $t("login") }}</button>
            <button @click="$store.dispatch('setModalType', 'signup')" class="fury-btn fury-btn-danger">{{ $t("signup") }}</button>
        </div>
        <!-- <LanguageContainer/> -->
    </div>
</template>
<script>
    import LanguageContainer from '@/components/views/LanguageContainer.vue';
    import AppHeaderRightLogged from './AppHeaderRightLogged.vue'
    export default {
        components: {AppHeaderRightLogged, LanguageContainer},
    }
</script>
<style lang="scss" scoped>
    .header__right-block {
      display: flex;
      align-items: center;
      @media (max-width: 380px) {
        width: 100%;
        justify-content: center;
      }
      .btn-container {
        all: inherit;
      }
    }


</style>