<template>
    <div class="my-account">
        <!-- hide account info -->
      <!-- <div class="dashboard">
        <div class="dashboard__item dashboard__item_user">
            <div class="userpick">
                <img src="@/assets/images/dashboard-icon/sprite.png"/>
            </div>
            <div class="right-block">
                <p>User3175069</p>
                <NuxtLink to="/" style="color: #2072D3; text-decoration:underline;">Change</NuxtLink>
            </div>
        </div>
        <div class="dashboard__item dashboard__item_rank">
          <img src="@/assets/images/dashboard-icon/rank.png" class="rank_item"/>
          <div class ="right-block">
              <p>My Rank : <span>Newcomer</span></p>
              <div class="adc-progress-box">
                <Progress :percentage="35" :number = "true"/>
                <img src="@/assets/images/dashboard-icon/gift.png"/>
            </div>
            <NuxtLink to="/" style="color: #2072D3;">View All Rank</NuxtLink>
          </div>
        </div>
        <div class="dashboard__item dashboard__item_my-cashback">
            <img src="@/assets/images/dashboard-icon/cash-back-bg.png" class="mask-img"/>
            <img src="@/assets/images/dashboard-icon/cash-back.png"/>
            <div class="right-block">
                <p>My Cashback:</p>
                <div class="cashback-progress">
                    <span class="cashback-progress__item cashback-progress__item_active">1%</span>
                    <img src="@/assets/images/dashboard-icon/download.png" class="arrow-img"/>
                    <span class="cashback-progress__item">2%</span>
                </div>
            </div>
        </div>
      </div>
      <div class="account-setting">
          <div class="grid">
              <div class="item">
                  <div class="title">
                      <font-awesome-icon icon="fa-solid fa-envelope-circle-check"/>
                      <label>My Email</label>
                      <div class = "verified" style="margin-left: auto;">
                          <div class="verified">
                              <font-awesome-icon icon="fa-solid fa-check" />
                              <label>verified</label>
                          </div>
                      </div>
                  </div>
                  <p class="description">Set the email to have access to your account anytime. Use this email to open the platform on any device.</p>
                  <div class="body">
                      <label class = "checkbox" style="margin-bottom: 15px;">
                          <input type="checkbox" />
                          <span>Receive Email Promos</span>
                      </label>
                      <div class="input dep-address input-md">
                          <div class="input-inner input-inner-readonly">
                              <input autocomplete="off" readonly="readonly" type="email" class="input-tag" value="younglady19931114@gmail.com"/>
                              <button :class="1 > 2 ? 'input-btn-clear visible' : 'input-btn-clear'" type="button">
                              <font-awesome-icon icon="fa-solid fa-xmark" />
                              </button>
                              <div class="input-btn-successful">
                              <font-awesome-icon icon="fa-solid fa-check" />
                              </div>
                              <button type="button" class="button button-sm button-blue button-center button-only-icon">
                              <span class="button-inner">
                                  <span class="button-icon">
                                  <font-awesome-icon icon="fa-solid fa-clone" />
                                  </span>
                              </span>
                              </button>
                          </div>
                      </div>

                  </div>
              </div>
              <div class="item">
                  <div class="title">
                      <font-awesome-icon icon="fa-solid fa-lock" />
                      <label>Password</label>
                      <div class = "verified" style="margin-left: auto;">
                          <div class="verified">
                              <font-awesome-icon icon="fa-solid fa-check" />
                              <label>verified</label>
                          </div>
                      </div>
                  </div>
                  <p class="description">Must contain at least 8 characters: a combination of letters and characters</p>
                  <button class="btn btn-primary" style="margin-top:auto" @click="$store.dispatch('setModalType', 'change-password')">Change</button>
              </div>
              <div class="item">
                  <div class="title">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18px" height="18px">
                          <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                          <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                          <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                          <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                      </svg>
                      <label>2FA</label>
                      <div class = "verified" style="margin-left: auto;">
                          <div class="not-verified">
                              <font-awesome-icon icon="fa-solid fa-xmark" />
                              <label>2FA Not activated</label>
                          </div>
                      </div>
                  </div>
                  <p class="description">2nd security layer of your BetFury account. Set 2FA to protect your account (available only when signed up with Google or when email and password are set)</p>
                  <button class="btn btn-danger" style="margin-top:auto">Activate</button>
              </div>
          </div>

      </div> -->

      <div class="account-setting">
          <div class="grid">
            <div class="item">
                <div class="userpick" style="display: flex; justify-content:center">
                    <img src="@/assets/images/dashboard-icon/sprite.png" style="width: 35%;"/>
                </div>
                <div class="right-block" style="display: flex; justify-content:space-between">
                    <p>{{$store.state.account.name}}</p>
                    <NuxtLink to="/" style="color: #2072D3; text-decoration:underline;">Change</NuxtLink>
                </div>
            </div>
            <div class="item">
                <div class="title">
                    <font-awesome-icon icon="fa-solid fa-envelope-circle-check"/>
                    <label>My Email</label>
                    <div  class = "verified" style="margin-left: auto;">
                        <div v-if="userData.emailVerified" class="verified">
                            <font-awesome-icon icon="fa-solid fa-check" />
                            <label>verified</label>
                        </div>
                        <div v-else class="not-verified">
                                  <font-awesome-icon icon="fa-solid fa-xmark" />
                                  <label>Not verified</label>
                              </div>
                    </div>
                </div>
                <p class="description">Set the email to have access to your account anytime. Use this email to open the platform on any device.</p>
                <div class="body">
                    <!-- <label class = "checkbox" style="margin-bottom: 15px;">
                        <input type="checkbox" />
                        <span>Receive Email Promos</span>
                    </label> -->
                    <div class="input dep-address input-md">
                        <div class="input-inner input-inner-readonly">
                            <input autocomplete="off" readonly="readonly" type="email" class="input-tag" :value="userData.email"/>
                            <button :class="1 > 2 ? 'input-btn-clear visible' : 'input-btn-clear'" type="button">
                            <font-awesome-icon icon="fa-solid fa-xmark" />
                            </button>
                            <div class="input-btn-successful">
                            <font-awesome-icon icon="fa-solid fa-check" />
                            </div>
                            <button type="button" class="button button-sm button-blue button-center button-only-icon">
                            <span class="button-inner">
                                <span class="button-icon">
                                <font-awesome-icon icon="fa-solid fa-clone" />
                                </span>
                            </span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
              <div class="item">
                  <div class="title">
                      <font-awesome-icon icon="fa-solid fa-lock" />
                      <label>Password</label>
                      <div class = "verified" style="margin-left: auto;">
                          <div class="verified">
                              <font-awesome-icon icon="fa-solid fa-check" />
                              <label>verified</label>
                          </div>
                      </div>
                  </div>
                  <p class="description">Must contain at least 8 characters: a combination of letters and characters</p>
                  <button class="btn btn-primary" style="margin-top:auto" @click="$store.dispatch('setModalType', 'change-password')">Change</button>
              </div>
              
          </div>

      </div>





      <div class="statistic">
          <!-- <div class="statistic__personal-settings">
              <p style="font-size: 18px;">Settings</p>
              <div class="personal-settings">
                  <label class="title text-center"><font-awesome-icon icon="fa fa-cog" /> Personal Info Settings</label>
                  <label class="description">Players will be able to see information about your account. Choose what information you do not want to display about your profile.</label>
                  <label class = "checkbox" style="margin-bottom: 15px;">
                      <input type="checkbox" />
                      <span>Hide statistics</span>
                  </label>
                  <label class = "checkbox" style="margin-bottom: 15px;">
                      <input type="checkbox" />
                      <span>Hide activity</span>
                  </label>
                  <label class = "checkbox" style="margin-bottom: 15px;">
                      <input type="checkbox" />
                      <span>Hide played games</span>
                  </label>
                  <label class = "checkbox" style="margin-bottom: 15px;">
                      <input type="checkbox" />
                      <span>Hide battles rewards</span>
                  </label>
                  <label class = "checkbox" style="margin-bottom: 15px;">
                      <input type="checkbox" />
                      <span>Hide All profile data</span>
                  </label>
              </div>
              <button class="btn btn-info" style="width: 100%;"><font-awesome-icon icon="fa-solid fa-hands" /> Responsible Gambling</button>
          </div> -->
          <div class="statistic__games">
            <p style="font-size: 18px;">Gaming Statistics</p>
            <div class="statistic-table">
                <div class="statistic-table__head">
                    <div class="head">
                        <div class="head__item">
                            <span class="head__label">
                                Total Wager:
                                <font-awesome-icon icon="fa fa-question-circle" class="ps-2"/>
                                <a style="color: #2072D3; text-decoration: underline;" @click="$store.dispatch('setModalType', 'wagered-detail')">All currencies</a>
                            </span>
                            <span class="head__body">
                                <span class="currency">
                                    <img src="@/assets/images/crypto-icon/usdt.svg" width="24" height="24" class="currency-icon" />
                                    <span style="color: rgb(255, 255, 255);">{{userData.gameStat.totalWager}}</span>
                                </span>
                            </span>
                        </div>
                        <div class="head__item">
                            <span class="head__label">
                                Total Wins:
                            </span>
                            <span class="head__body">
                                <span class="currency">
                                    <span style="color: rgb(255, 255, 255);">{{userData.gameStat.totalWins}}</span>
                                </span>
                            </span>
                        </div>
                        <div class="head__item">
                            <span class="head__label">
                                Total Bets:
                            </span>
                            <span class="head__body">
                                <span>
                                    <span class="currency">
                                        <span style="color: rgb(255, 255, 255);">{{userData.gameStat.totalBets}}</span>
                                    </span>
                                </span>
                            </span>
                            <button class="btn-details">Details <font-awesome-icon icon="fa-solid fa-angle-down" class="icon-arrow"/></button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <MyAccountGamesStatistics/> -->

              <!-- <p style="font-size: 18px;">Activity</p>
              <div class="statistic-table">
                  <div class="statistic-table__head">
                      <div class="head">
                          <div class="head__item">
                              <span class="head__label">
                                  Total Tips:
                              </span>
                              <span class="head__body">
                                  <span class="currency">
                                      <img src="@/assets/images/crypto-icon/usdt.svg" width="24" height="24" class="currency-icon" />
                                      <span style="color: rgb(255, 255, 255);">0.00000</span>
                                  </span>
                              </span>
                          </div>
                          <div class="head__item">
                              <span class="head__label">
                                  Rains & Drops
                              </span>
                              <span class="head__body">
                                  <span class="currency">
                                      <img src="@/assets/images/crypto-icon/usdt.svg" width="24" height="24" class="currency-icon" />
                                      <span style="color: rgb(255, 255, 255);">0.00000</span>
                                  </span>
                              </span>
                          </div>
                          <div class="head__item">
                              <span class="head__label">
                                  Messages in chat
                              </span>
                              <span class="head__body">
                                  <span>
                                      <span class="currency">
                                          <span style="color: rgb(255, 255, 255);">0</span>
                                      </span>
                                  </span>
                              </span>
                          </div>
                      </div>
                  </div>
              </div> -->
              <p style="font-size: 18px;">Top Played Games</p>
              <FavoriteGames style ="    background: #111923;border-radius: 14px; padding: 24px;"/>
              <!-- <p style="font-size: 18px;">TOP Battles Rewards</p>
              <div class="battles-rewards">
                  <div class="table">
                      <div class = "no-data">
                          <span>No information</span>
                      </div>
                  </div>
              </div> -->
            </div>
      </div>
        
    </div>
</template>
  
<script>
  import Progress from "@/components/views/Progress.vue";
  import MyAccountGamesStatistics from './MyAccountGameStatistics.vue'
  import FavoriteGames from './FavoriteGames.vue'

  export default {
    name: "UserInfoMyAccount",
    components: {Progress, MyAccountGamesStatistics, FavoriteGames},
    data() {
      return {
        isChecked: false,
        userData: {
            gameStat: {}
        }
      };
    },
    mounted() {
        this.getUserProfileData()
    },
    methods: {
        async getUserProfileData() {
            const config = {
                headers:{
                    Authorization: window.sessionStorage.getItem("token")
                }
            }
            const res = await this.$api.auth.getUserProfileData(config)
            console.log(res.body)
            this.userData = res.body
        },
        checkedHandler: function () {
            this.isChecked = !this.isChecked;
        },
    },
    mounted() {
    },
  };
</script>
  
<style lang="scss">
    .statistic-table__body {
        padding: 24px;
        background-color: #111923;
        .body {
            .body__head {
                display: flex;
                align-items: center;
                justify-content: space-between;
                position: relative;
                z-index: 2;
                margin-bottom: 24px;
            }
            .body__table {
                max-height: 220px;
                overflow-y: auto;
                position: relative;
                &::-webkit-scrollbar {
                    width: 4px;
                    height: 4px;
                }
                &:hover {
                    &::-webkit-scrollbar-thumb {
                    background-color: #2a3546;
                    border-radius: 2px;
                    }

                    &::-webkit-scrollbar-track {
                    background-color: rgba(13, 19, 28, 0.8);
                    border-radius: 2px;

                    }
                }

            }
        }
    }
  .my-account {
    .dashboard {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px,1fr));
        grid-gap: 24px;
        margin-bottom: 32px;
        .dashboard__item {
            padding: 20px;
            background-color: #161f2c;
            border-radius: 14px;
            .right-block {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
            }
        }
        .dashboard__item_user {
            display: grid;
            grid-gap: 16px;
            gap: 16px;
            grid-template-columns: 60px 1fr;
            .userpick {
                width: 60px;
                height: 60px;
                display: block;
                position: relative;
                align-self: center;
            }
            .right-block {
                justify-content: center;
            }
        }
        .dashboard__item_rank {
            position: relative;
            padding-left: 88px;
            .rank_item {
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                margin: auto;
                width: 80px;
            }
            p {
                color: #fff;
                span {
                        color: #2ddc4b;
                    }
            }
            a {
                font-size: 12px;
                font-weight: 400;
                color: #fff;
                text-decoration: underline;
                margin-top: 10px;
            }
        }
        .dashboard__item_my-cashback {
            padding-left: 120px;
            position: relative;
            .mask-img {
                top: 0;
            }
            img:not(.arrow-img){
                width: 96px;
                position: absolute;
                left: 0;
                bottom: 0;
                margin: auto;
            }
            .cashback-progress {
                display: flex;
                align-items: center;
                .cashback-progress__item {
                    font-size: 32px;
                    font-weight: 700;
                    color: #202a39;
                    line-height: 1;
                    white-space: nowrap;
                }
                .arrow-img {
                    margin: 0 8px;
                }
                .cashback-progress__item_active {
                    color: #1bb83d;
                }
            }
        }
        .adc-progress-box {
            display: flex;
            align-items: center;
            position: relative;
            margin-bottom: 7px;
            width: 100%;
        
            img {
            height: 20px;
            width: 20px;
            }
        }
    }

    .account-setting {
        display: flex;
        flex-direction: column;
        margin-bottom: 32px;
        .grid{
            display: grid;
            grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
            grid-gap: 24px;
        }
        .item{
            padding: 24px;
            background-color: #111923;
            border-radius: 14px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .title{
                display: flex;
                align-items: center;
                margin-bottom: 8px;
                font-size: 14px;
                color: #fff;
                label{
                        margin-left: 12px;
                    }
                
            }
            .description{
                color: #55657e;
                font-weight: 600;
                font-size: 12px;

                padding-bottom: 15px;
                p {
                    margin-top: 0;
                    margin-bottom: 1rem;
                }
            }
            .body{
                margin-top: auto;
            }
        }
    }

    .statistic{
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
        grid-gap: 24px;
        grid-template-areas: "personal-settings games games";
        @media (max-width: $fury-start-collapse) {
            grid-template-areas:
            "personal-settings"
            "games";
        }
        .statistic__personal-settings{
            grid-area: personal-settings;
            .personal-settings{
                padding: 24px;
                background-color: #111923;
                border-radius: 14px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin-bottom: 20px;
                .title {
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 20px;
                    margin-bottom: 8px;
                }
                .description {
                    font-weight: 600;
                    font-size: 12px;
                    line-height: 16px;
                    color: #55657e;
                    margin-bottom: 8px;
                }
            }
        }
        .statistic__games{
            grid-area: games;
            .statistic-table{
                border-radius: 14px;
                overflow: hidden;
                margin-bottom: 16px;
                .statistic-table__head {
                    background-color: #111923;
                    .head {
                        display: flex;
                        justify-content: stretch;
                        padding: 24px;
                        @media (max-width: 1000px){
                            display: block;
                        }
                        .head__item {
                            width: 33.33%;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            position: relative;
                            &:not(:first-child){
                                @media (max-width: 1000px) {
                                    border-top: 1px solid #2a3546;
                                    padding-left: 0;
                                    border-left: none;
                                    margin-top: 16px;
                                    padding-top: 16px;
                                }
                            }
                            @media (max-width: 1000px) {
                                width: auto;
                                padding-right: 0;
                            }
                            .head__label{
                                display: flex;
                                align-items: center;
                                font-size: 12px;
                                color: #55657e;
                                margin-bottom: 4px;
                            }
                            .head__body {
                                font-weight: 600;
                                font-size: 18px;
                                font-family: Numbers,Montserrat;
                                display: inline-flex;
                                align-items: center;
                                .currency {
                                    display: inline-flex;
                                    align-items: center;
                                    flex-shrink: 0;
                                }
                                .currency-icon {
                                    flex-shrink: 0;
                                    margin-right: 0.5em;
                                }
                            }
                        }
                    }
                }
            }
            .favorite-games{
                border-radius: 14px;
                overflow: hidden;
                margin-bottom: 16px;
                .wrap {
                    background: #111923;
                    border-radius: 14px;
                    padding: 24px;
                    grid-template-columns: repeat(4,1fr);
                    display: grid;
                    grid-gap: 10px;
                    .all-games {
                        display: flex;
                        flex-direction: column;
                        align-items: stretch;
                        position: relative;
                        height: 210px;
                        .game-wrap {
                            border-radius: 14px;
                            background-color: #202a39;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            height: 100%;
                            position: absolute;
                            width: 100%;
                            left: 0;
                            top: 0;
                        }
                    }
                }
                
            }
            .battles-rewards {
                border-radius: 14px;
                overflow: hidden;
                margin-bottom: 16px;
                .table {
                    background: #111923;
                    border-radius: 14px;
                    padding: 24px;
                    overflow-y: hidden;
                    overflow-x: auto;
                    .no-data {
                        min-height: 200px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        margin-bottom: 44px;
                        > span {
                            white-space: nowrap;
                            font-weight: 500;
                            text-align: center;
                            color: #55657e;
                        }
                    }
                }
            }
        }
        .btn-details{
            position: absolute;
            right: 0;
            bottom: 0;
            color: #93acd3;
            transition: color .1s ease-in-out;
        }
    }
  }
</style>
  