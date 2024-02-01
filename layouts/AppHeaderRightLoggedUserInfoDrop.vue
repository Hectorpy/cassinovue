<template>
  <div @mouseover="user_drop = 'dropdown-opened'" @mouseleave="user_drop =''"  class="profile-wrapper dropdown dropdown-lg dropdown-bottomRight" :class="user_drop">
    <div class="dropdown__trigger-custom" >
      <Avatar :size = "44"/>
      <i class="notify-text">17</i>
      <div class="font-icon-wrapper">
        <font-awesome-icon icon="fa-solid fa-angle-down" class="icon-arrow"/>
      </div>
    </div>
    <div class="dropdown-inner" style="top:82%!important">
      <div class="dropdown-content" >
        
          <div class="profile-preview" >
            <Avatar :size ="64" :levelShow="true" :fontSize="8" :nameShow="true"/>
          </div>
          <div class="profile-progress">
            <div class="head">
              <span>1 lvl</span>
              <span>2 lvl</span>
            </div>
            <div class="inner">
              <div class="progress-wrapper" style="width: 100%; background-color: #202A39;">
                <progress class="progress" max = "100" value="0" style="height: 8px; border-radius: 4px">0</progress>
              </div>
              <img src="@/assets/images/icon/gift.png"  />
              <span>0%</span>
            </div>
          </div>
          <div class="profile-menu">
            <div class="vertical-menu">
              <ul class="vertical-menu__inner">
                <li class="vertical-menu__item" @click="rightToggle()">
                  <button class="link vertical-menu__link">
                    <font-awesome-icon icon="fa-solid fa-user" class="profile-menu-icon"/>
                    <span>Notifications</span>
                    <i class="vertical-menu__notify">16</i>
                  </button>
                </li>
                <li>
                  <a @click="$store.dispatch('setModalType', 'my-profile')" class="link">
                    <font-awesome-icon icon="fa-solid fa-user" class="profile-menu-icon"/><span>My profile</span>
                  </a>
                </li>
                <li>
                  <a @click="accountRoute()" class="link"><font-awesome-icon icon="fa-solid fa-id-card" class="profile-menu-icon"/><span>Account</span></a>
                </li>
                <li>
                  <a class="link" @click="transactionsRoute()">
                    <font-awesome-icon icon="fa-solid fa-id-card" class="profile-menu-icon"/><span>Transactions</span>
                  </a>
                </li>
                <li>
                  <a class="link" @click="gameHistoryRoute()">
                    <font-awesome-icon icon="fa-solid fa-id-card" class="profile-menu-icon"/><span>Game History</span>
                  </a>
                </li>
                <li>
                  <a class="link" @click="sessionRoute()">
                    <font-awesome-icon icon="fa-solid fa-id-card" class="profile-menu-icon"/><span>Sessions</span>
                  </a>
                </li>
                <li>
                  <a class="link">
                    <font-awesome-icon icon="fa-solid fa-id-card" class="profile-menu-icon"/><span>Vault</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a  @click="userLogout" class="link" style="font-size: 12px;">Log out</a>
      </div>
    </div>
  </div>
</template>
<script>
  import Avatar from "@/components/views/Avatar.vue";

  export default {
    components: {Avatar},

    data(){
        return {
          cryptoSelectOpened: false,
          networkSelectOpened: false,
          cryptos: [],
          selectedCrypto: {},
          currentNetworkIndex: -1,
          url: null,
          user_drop : '',
          searchKey : '',
          modalType: '',

        }
    },
    methods: {
      rightToggle() {
        this.user_drop = ''
        this.$store.commit("setRightPanelToggle");
      },
      userLogout(){
        this.$store.dispatch('account/resetState')
        this.$router.push('/');
      },
      accountRoute(){
        this.user_drop = '';
        this.$router.push('/account');
      },
      transactionsRoute(){
        this.user_drop = '';
        this.$router.push('/account?tab=transactions');
      },
      gameHistoryRoute(){
        this.user_drop = '';
        this.$router.push('/account?tab=game-history');
      },
      sessionRoute(){
        this.user_drop = '';
        this.$router.push('/account?tab=sessions');
      }

    }
  }
</script>
<style lang="scss" scoped>
.notify-text {
  display: none;
  @media (max-width: 360px) {
    display: block;
    margin-right: 24px;
    
  }
}
.vertical-menu__inner {
  // &:first-child {
  //   display: none;
  // }
  .vertical-menu__link {
      position: relative;
      -moz-appearance: none;
      -webkit-appearance: none;
      text-decoration: none;
      align-items: center;
      display: inline-flex;
      vertical-align: middle;
      justify-content: flex-start;
      font-weight: 600;
      line-height: 1.5;
      cursor: pointer;
      text-align: center;
      white-space: nowrap;
      font-size: 14px;
      border-radius: 10px;
      padding: 6px;
      color: #93acd3;
      width: 100%;
      transition: color .1s ease-in-out,background-color .1s ease-in-out;
        &:first-child {
    display: none;
    @media (max-width: 360px) {
      display: initial;
    }
  }
      .vertical-menu__notify {
        position: relative!important;
        top: auto!important;
        right: auto!important;
        margin-left: 4px;
        color: #fff;
      }
  }
}
.profile-wrapper {
    margin-left: 20px;
    position: relative;
    i {
      border-radius: 10px;
      position: absolute;
      top: -6px;
      right: -40px;
      background-color: #1bb83d;
      font-family: Numbers,Montserrat;
      font-style: normal;
      white-space: nowrap;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      padding: 2px 6px;
    }
}
.dropdown__trigger-custom {
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 20px;
  background-color: #202a39;
  padding-right: 8px;
}
.dropdown-content {
  padding: 12px;
}
.profile-preview{
  display:flex;
  justify-content: center;
  align-items: center;
}
    .profile-progress {
      margin-bottom: 8px;
      .head{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 8px;
        margin-bottom: 4px;
        > span{
          font-weight: 600;
          font-size: 11px;
          color: #93acd3;
        }
      }
      .inner{
        padding: 8px;
        background-color: #2a3546;
        border-radius: 12px;
        display: flex;
        align-items: center;
        > div{
          display: block;
        }
        > img {
          width: 11px;
          height: 11px;
          position: relative;
          z-index: 2;
          margin: -4px 0 -4px -5px;
        }
        > span {
          font-weight: 600;
          font-size: 11px;
          color: #fff;
          margin: -4px 0 -4px 4px;
        }
      }
    }
    .profile-menu{
      background-color: #2a3546;
    border-radius: 12px;
    margin-bottom: 8px;
    }
    .link{
      position: relative;
      text-decoration: none;
      align-items: center;
      display: inline-flex;
      vertical-align: middle;
      justify-content: flex-start;
      font-weight: 600;
      line-height: 1.5;
      cursor: pointer;
      text-align: center;
      white-space: nowrap;
      font-size: 16px;
      border-radius: 10px;
      padding: 6px;
      color: #93acd3;
      width: 100%;
      transition: color .1s ease-in-out,background-color .1s ease-in-out;
      &:hover {
        color: #fff;
      }
      span {
        margin-left: 15px;
      }
    }
</style>