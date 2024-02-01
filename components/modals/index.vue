<template>
  <div v-if="$store.state.isModal" class="modals-container">
    <div   class="modal-wrapper">
      <AuthModal v-if = "$store.state.modalType =='login' || $store.state.modalType =='signup'"/>
      <WalletModal v-if = "$store.state.modalType =='wallet'"/>
      <MyProfileModal v-if="$store.state.modalType == 'my-profile'"/>
      <ChangePasswordModal v-if="$store.state.modalType == 'change-password'"/>
      <WagerDetailModal v-if="$store.state.modalType == 'wagered-detail'"/>
    </div>
  </div>
</template>
<script>
  import AuthModal from "./authModal/index.vue";
  import ForgetPasswordModal from './forgotPassword/index.vue'
  import WalletModal from './walletModal/index.vue'
  import MyProfileModal from './myProfileModal/index.vue'
  import ChangePasswordModal from './changePasswordModal/index.vue'
  import WagerDetailModal from './wagerDetailModal/index.vue'
  
  export default {
    name: "ModalContainer",
    props: { type: String},
    components: { AuthModal , WalletModal, ForgetPasswordModal, MyProfileModal, ChangePasswordModal, WagerDetailModal},
  };
</script>

<style lang="scss" scoped>
  .modals-container {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 500;
    .modal-wrapper {
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      text-align: center;
      white-space: nowrap;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 16px;
      background-color: rgba(3, 11, 21, 0.85);
      > div {
        width: 100%;
        text-align: left;
        position: relative;
        white-space: normal;
        overflow: hidden;
        border-radius: 12px;
        opacity: 1;
      }
      &::before,
      > div {
        display: inline-block;
        vertical-align: middle;
      }
      &::before {
        content: "";
        height: 100%;
        width: 0;
      }
    }
  }
</style>