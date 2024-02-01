<template>
  <div class="btn-container">
    <AppHeaderRightLoggedCryptoDrop/>
    <button type="button" class="button btn-wallet button-lg button-red button-center" @click="$store.dispatch('setModalType', 'wallet')">
      <span class="button-inner">
        <span class="button-icon">
          <font-awesome-icon icon="fa-solid fa-wallet" size="1x" />
        </span>
        <span class="button-text mobile-sensitive">Wallet</span>
      </span>
    </button>
    <!-- <Modal v-show="$store.state.isModal"/> -->
    <AppHeaderRightLoggedUserInfoDrop/>
    <a @click="rightToggle()" class="notify-btn">
      <div class="notify-btn-inner" >
        <font-awesome-icon icon="fa-solid fa-bell" />
        <div class="amount">23</div>
      </div>
    </a>

    </div>
</template>
<script>
  import AppHeaderRightLoggedCryptoDrop from "./AppHeaderRightLoggedCryptoDrop.vue";
  import AppHeaderRightLoggedUserInfoDrop from "./AppHeaderRightLoggedUserInfoDrop.vue";

  export default {
    components: {AppHeaderRightLoggedCryptoDrop, AppHeaderRightLoggedUserInfoDrop},
    methods: {
      rightToggle() {
        this.$store.commit("setRightPanelToggle");
      },
    }
  }

</script>
<style lang="scss" scoped>
  .notify-btn {
    @media (max-width: 360px) {
      display: none;
    }
  }

  .button {
      border-radius: 10px;
      font-size: 14px;
      height: 40px;
      @media (max-width: 768px) {
        margin-left: 15px;
        min-width: 40px;
      }
    .btn-wallet {
      @media (max-width: 768px) {
            max-width: 40px;
        display: flex;
      }
    }
  }
</style>