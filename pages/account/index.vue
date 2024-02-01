<template>
  <div class="page-account">
    <div class="account-head">
      <h3>Account</h3>
    </div>
    <div class="account-tab">
      <NuxtLink v-for = "(c, index) in params" :to="c.url" :key ="index" class="tab">
        <span class="tab__icon">
          <img :src="require('@/assets/images/icon/' + c.img)"/>
        </span>
        <span class ="tab__title">{{c.title}}</span>
      </NuxtLink>
    </div>
    <div class="page-account__tabs-mobile mt-3">
      <div :class="['dropdown dropdown-lg dropdown-bottomRight dropdown-fullwidth', categoryDrop ? 'dropdown-opened' : '',]" style = "margin-bottom: 10px;" >
        <div class="dropdown-trigger" @click="categoryDrop = !categoryDrop" style = "justify-content: space-between;">
            <div style="display: flex; align-item: center;">
                <span class="icon"><img :src = "require('@/assets/images/icon/' + params[selectedCategory].img)"/></span>
                <span class = "title ms-2">{{params[selectedCategory].title}}</span>
            </div>
            <font-awesome-icon icon="fa-solid fa-angle-down" class="icon-arrow"/>
        </div>
        <div class="dropdown-inner" style="width: 100%">
            <div class="dropdown-content">
                <div class="dropdown-menu-lg">
                    <ul class="dropdown-menu-inner">
                        <li v-for = "(c, index) in params" :key ="index" @click = "setRouteParams(index)" :class="index == selectedCategory ? 'dropdown-menu-link-selected': ''" class="dropdown-menu-item">
                          <button class = "dropdown-menu-link">
                              <span class="icon"><img :src ="require('@/assets/images/icon/'+ c.img)"/></span>
                              <span class = "title ms-2">{{c.title}}</span>
                          </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
    <div class="page-account__body">
      <UserInfoMyAccount v-if = "$route.query.tab == undefined"/>
      <UserInfoTransactions v-else-if="$route.query.tab == 'transactions'"/>
      <UserInfoGameHistory v-else-if="$route.query.tab == 'game-history'"/>
      <UserInfoSessions v-else-if="$route.query.tab == 'sessions'"/>
    </div>
  </div>
</template>

<script>
  import UserInfoMyAccount from '../../views/accountPage/MyAccount.vue';
  import UserInfoTransactions from './UserInfoTransactions.vue'
  import UserInfoGameHistory from './UserInfoGameHistory.vue'
  import UserInfoSessions from './UserInfoSessions.vue'

  export default {
    name: "AccountIndex",
    components: { UserInfoMyAccount, UserInfoTransactions, UserInfoGameHistory, UserInfoSessions},
    data(){
      return {
        params: [
          {url: '/account', img: 'icon-my-account.png', title: 'My Account'},
          {url: '/account?tab=transactions', img: 'icon-transactions.png', title: 'Transactions'},
          {url: '/account?tab=game-history', img: 'icon-game-history.png', title: 'Game History'},
          {url: '/account?tab=sessions', img: 'download.png', title: 'Sessions'},
        ],
        categoryDrop: false,
        selectedCategory: 0,

      }
    },
    created() { 
      this.$i18n.locale = this.$store.state.language
    },
    async mounted(){
      await this.$store.dispatch('account/checkAWSLogin')
      if (this.$store.state.account.name == '') {
        this.$toast.error('Please login first.')
        this.$router.push('/')
        this.$store.dispatch('setModalType', 'login')
      }
    },
    methods: {
      setRouteParams(index){
        this.selectedCategory = index;
        this.categoryDrop = false
        this.$router.push(this.params[this.selectedCategory].url)
      }
    }
  };
</script>

<style lang="scss">
  .page-account {
    .account-tab { // tab
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      background: linear-gradient(180deg, rgba(28, 37, 50, 0), #1c2532);
      text-align: center;
      border-radius: 0 0 10px 10px;
      @media (max-width: $fury-second-collapse) {
        display: none;
      }
      a {
        padding: 15px 25px;
        text-decoration: none;
        &.nuxt-link-exact-active {
          background: linear-gradient(
            180deg,
            rgba(34, 131, 246, 0),
            rgba(34, 131, 246, 0) 20%,
            rgba(34, 131, 246, 0.15) 60%,
            rgba(34, 131, 246, 0.4)
          );
          border-radius: 0 0 10px 10px;
        }
    
        img {
          height: 40px;
          width: 40px;
          object-fit: contain;
        }
      }
      .tab {
        padding: 15px 25px;
        flex: 1 1;
        flex-direction: column;
        justify-content: center;
        text-decoration: none;
        position: relative;
        overflow: hidden;
        -webkit-transform: translateZ(0);
        -webkit-perspective: 1000;
        border-radius: 14px;
        display: flex;
        align-items: center;
        .tab__icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          margin-bottom: 8px;
          position: relative;
          z-index: 2;
        }
        .tab__title {
          color: #fff;
          font-size: 16px;
          text-align: center;
          font-weight: 600;
          white-space: nowrap;
          z-index: 1;
        }
      }
    }
    .page-account__tabs-mobile {
      position: relative;
      z-index: 6;
      display: none;
      @media (max-width: $fury-second-collapse) {
        display: block;
      }
    }
    .page-account__body {
      margin-top: 32px;
    }

    .account-head {
      h2 {
        margin-bottom: 1rem;
        font-weight: 700;
        line-height: 1.2;
        color: #fff;
      }
    }
    // for child components

      .empty {
        min-height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .verified {
        display: flex;
        align-items: center;
        font-weight: 600;
        white-space: nowrap;
        .verified{
          color: #2ddc4b;
        }
        .not-verified{
          color: #ed1d49;
        }
        label{
          margin-left: 15px;
        }
      }
      .tr__a {
        color: #2283f6;
        text-decoration: underline;
        padding: 0;
        border: none;
        cursor: pointer;
        transition: color .1s ease-in-out;
        &:hover {
          color: #2283df;
  
        }
      }
  }
</style>
