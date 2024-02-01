<template>
    <!-- <aside v-if = "$store.state.isLeftPanelToggled" class="left-menu-container" :class=" $store.state.isLeftPanelToggled ? 'sidebar-box active' : 'sidebar-box'"> -->
    <aside v-if = "$store.state.isLeftPanelToggled" class="left-menu-container">
      <div class="left-menu-container__outer">
        <div class="left-menu-container__inner">
          <div class="left-menu-container-bonuses">
            <button class="bonus">
              <div class="bonus-inner bonus-cashback">
                <span class="bonus-label">
                  <span>CASH</span>
                  <span>BACK</span>
                </span>
                <img src="@/assets/images/sidebar-icon/cashback-bg.png" alt="cash back" class="bonus-bg"/>
              </div>
            </button>
            <button class="bonus">
              <div class="bonus-inner bonus-rakeback">
                <span class="bonus-label">
                  <span>RAKE</span>
                  <span>BACK</span>
                </span>
                <img src="@/assets/images/sidebar-icon/rakeback-bg.png" alt="rake back" class="bonus-bg"/>
              </div>
            </button>
            <button class="bonus">
              <div class="bonus-inner bonus-furycharge">
                <span class="bonus-label">
                  <span>FURY</span>
                  <span>CHARGE</span>
                </span>
                <img src="@/assets/images/sidebar-icon/furycharge.png" alt="fury charge" class="bonus-bg"/>
              </div>
            </button>
            <button class="bonus">
              <div class="bonus-inner bonus-furywheel">
                <span class="bonus-label">
                  <span>FURY</span>
                  <span>WHEEL</span>
                </span>
                <div class="wheel-amin">
                  <div class="wheel-amin-wheel-wrap">
                    <img src="@/assets/images/sidebar-icon/wheel.png" alt="fury wheel" class="wheel-amin-wheel"/>
                  </div>
                  <img src="@/assets/images/sidebar-icon/wheel-axis.png" alt="wheel axis" class="wheel-amin-wheel-center"/>
                  <img src="@/assets/images/sidebar-icon/coin1.png" alt="coin1" class="wheel-amin-coin-lg"/>
                  <img src="@/assets/images/sidebar-icon/coin2.png" alt="coin2" class="wheel-amin-coin-sm"/>
                </div>
              </div>
            </button>
          </div>
          <div class="left-menu-container__menus">
            <div :class=" isPromoToggled ? 'promotion-sidebar-box active' : 'promotion-sidebar-box'">
              <button @click="promoHandler">
                <font-awesome-icon icon="fa-solid fa-bullhorn" />
                <div>
                  <div class="title">Promotions</div>
                  <font-awesome-icon icon="fa-solid fa-angle-down" />
                </div>
              </button>
              <ul>
                <li>
                  <a >
                    <font-awesome-icon icon="fa-solid fa-trophy" color="#ffb636" />
                    <span>$150 FunFury Compe...</span>
                  </a>
                </li>
                <li>
                  <a >
                    <font-awesome-icon icon="fa-solid fa-gavel" color="#2ddc4b" />
                    <span>$30k Spinomenal Hig...</span>
                  </a>
                </li>
                <li>
                  <a >
                    <font-awesome-icon icon="fa-solid fa-gavel" color="#2ddc4b" />
                    <span>$10k Daily Battle</span>
                    </a>
                </li>
                <li><a  style="text-decoration: none">All promotions</a></li>
              </ul>
            </div>
            <div class="underlined-box"></div>
            <nav class="primary-menu">
              <div :class="$route.path == '/all-games' ? 'primary-menu-item active' : 'primary-menu-item'">
                <a class="primary-menu-item-link" @click="$router.push('/all-games')">
                  <img src="@/assets/images/sidebar-icon/all_games.png" alt="icon"/>
                  <span>All games</span>
                </a>
              </div>
              <div :class="$route.path == '/gamess' ? 'primary-menu-item active' : 'primary-menu-item'">
                <a class="primary-menu-item-link"  @click="vipHandler">
                  <img src="@/assets/images/sidebar-icon/vip_rank.png" alt="icon" />
                  <span>VIP Rank System</span>
                </a>
              </div>
              <div
                :class="$route.path == '/fe' ? 'primary-menu-item active' : 'primary-menu-item'"
              >
                <a class="primary-menu-item-link"  @click="allBonusesHandler">
                  <img
                    src="@/assets/images/sidebar-icon/all_bonuses.png"
                    alt="icon"
                  />
                  <span>All Bonuses</span>
                </a>
              </div>
              <div
                :class="
                  $route.path == '/gamesss' ? 'primary-menu-item active' : 'primary-menu-item'
                "
              >
                <button @click="betFuryHandler">
                  <div class="font-icon-wrapper">
                    <font-awesome-icon
                      icon="fa-solid fa-sack-dollar"
                      size="1x"
                      color="#55657e"
                    />
                  </div>
                  <div class="toggle-btn-pair">
                    <span class="submenu-title">BetFury Earn</span>
                    <font-awesome-icon
                      icon="fa-solid fa-angle-down"
                      size="1x"
                      color="#55657e"
                    />
                  </div>
                </button>
                <ul>
                  <li>
                    <a >
                      <div class="font-icon-wrapper">
                        <font-awesome-icon
                          icon="fa-solid fa-book"
                          size="1x"
                          color="#55657e"
                        />
                      </div>
                      <span>Staking</span>
                    </a>
                  </li>
                  <li>
                    <a >
                      <div class="font-icon-wrapper">
                        <font-awesome-icon
                          icon="fa-solid fa-seedling"
                          size="1x"
                          color="#55657e"
                        />
                      </div>
                      <span>Farming</span>
                      <div class="font-icon-wrapper">
                        <font-awesome-icon
                          icon="fa-solid fa-up-right-from-square"
                          size="1x"
                          color="#55657e"
                        />
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div
                :class="$route.path == '/gameswr' ? 'primary-menu-item active' : 'primary-menu-item'"
              >
                <a class="primary-menu-item-link"  @click="freeCryptoHandler">
                  <div class="font-icon-wrapper">
                    <font-awesome-icon
                      icon="fa-solid fa-cube"
                      size="1x"
                      color="#55657e"
                    />
                  </div>
                  <span>Free Crypto Boxes</span>
                </a>
              </div>
              <div
                :class="$route.path == '/gamsses' ? 'primary-menu-item active' : 'primary-menu-item'"
              >
                <a class="primary-menu-item-link"  @click="referralHandler">
                  <div class="font-icon-wrapper">
                    <font-awesome-icon
                      icon="fa-solid fa-users"
                      size="1x"
                      color="#55657e"
                    />
                  </div>
                  <span>Referral</span>
                </a>
              </div>
              <div :class="$route.path == '/ssgames' ? 'primary-menu-item active' : 'primary-menu-item'">
                <a class="primary-menu-item-link"  @click="miningHandler">
                  <div class="font-icon-wrapper">
                    <font-awesome-icon
                      icon="fa-solid fa-circle-check"
                      size="1x"
                      color="#55657e"
                    />
                  </div>
                  <span>Mining Voting</span>
                </a>
              </div>
              <div :class="$route.path == '/eegames' ? 'primary-menu-item active' : 'primary-menu-item'">
                <a class="primary-menu-item-link"  @click="newsHandler">
                  <div class="font-icon-wrapper">
                    <font-awesome-icon
                      icon="fa-solid fa-file-lines"
                      size="1x"
                      color="#55657e"
                    />
                  </div>
                  <span>News</span>
                </a>
              </div>
              <div :class="$route.path == '/ggames' ? 'primary-menu-item active' : 'primary-menu-item'">
                <a class="primary-menu-item-link"  @click="aboutHandler">
                  <div class="font-icon-wrapper">
                    <font-awesome-icon
                      icon="fa-solid fa-basketball"
                      size="1x"
                      color="#55657e"
                    />
                  </div>
                  <span>About Sport</span>
                </a>
              </div>
            </nav>
            <div class="underlined-box"></div>
            <nav class="secondary-menu">
              <a  class="secondary-menu-link">
                <span>Daily Tasks</span>
              </a>
              <a  class="secondary-menu-link">
                <span>BFG Token</span>
              </a>
              <a  class="secondary-menu-link">
                <span>BetFury Team</span>
              </a>
              <a  class="secondary-menu-link">
                <span>Fairness</span>
              </a>
              <a  class="secondary-menu-link">
                <span>BetFury docs</span>
                <div class="font-icon-wrapper">
                  <font-awesome-icon
                    icon="fa-solid fa-up-right-from-square"
                    size="1x"
                    color="#55657e"
                  />
                </div>
              </a>
            </nav>
            <div class="underlined-box"></div>
          </div>
          <div class="left-menu-container-footer">
            <button type="button" class="button button-md button-grey1 button-left button-full">
              <span class="button-inner">
                <span class="button-icon">
                  <font-awesome-icon icon="fa-brands fa-rocketchat" size="1x" color="#55657e"/>
                </span>
                <span class="button-text"> Live Support </span>
              </span>
            </button>
            <div :class=" isDropDownMenuOpened ? 'dropdown-opened' : ''" class="fury-dropdown dropdown-md dropdown-top dropdown-fullwidth">
              <div class="dropdown-trigger" @click="dropdownHandler">
                <div class="icon">
                  <img :src="require(`@/assets/images/sidebar-icon/${selected_flag}`)" :alt="$i18n.locale"/>
                </div>
                <span class="text"> {{ selected_lang }} </span>
                <div class="font-icon-wrapper">
                  <font-awesome-icon icon="fa-solid fa-angle-up" size="1x" color="#55657e"/>
                </div>
              </div>
              <div class="dropdown-inner">
                <div class="dropdown-content">
                  <div class=" dropdown-menu-md">
                    <ul class="dropdown-menu-inner">
                      <li :class=" locale.name === selected_lang ? 'current': ''" class="dropdown-menu-item"
                        v-for="(locale, index) in $i18n.locales" :key="index" :value="locale.code"
                        @click="select(locale.name, locale.imgUrl, locale.code)">
                        <button class="dropdown-menu-link">
                          <div class="icon">
                            <img :src="require(`@/assets/images/sidebar-icon/${locale.imgUrl}`)" :alt="locale.code"/>
                          </div>
                          <span class="text">{{ locale.name }}</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="social-icons">
              <a class="social-icon" ><font-awesome-icon icon="fa-brands fa-telegram" /></a>
              <a class="social-icon" ><font-awesome-icon icon="fa-brands fa-twitter" /></a>
              <a class="social-icon" ><font-awesome-icon icon="fa-brands fa-facebook" /></a>
              <a class="social-icon" > <font-awesome-icon icon="fa-brands fa-instagram" /></a>
              <a class="social-icon" ><font-awesome-icon icon="fa-brands fa-youtube" /></a>
              <a class="social-icon" ><font-awesome-icon icon="fa-brands fa-tiktok" /></a>
              <a class="social-icon" ><font-awesome-icon icon="fa-brands fa-tiktok" /></a>
              <a class="social-icon" ><font-awesome-icon icon="fa-brands fa-tiktok" /></a>
              <a class="social-icon" ><font-awesome-icon icon="fa-brands fa-pinterest-p" /></a>
              <a class="social-icon" ><font-awesome-icon icon="fa-brands fa-discord" /></a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </template>
  
  <script>
  export default {
    name: "LeftPanel",
    data() {
      return {
        isPromoToggled: false,
        isBetFuryToggled: false,
        selection: '',
        isAllGames: true,
        isVIP: false,
        isAllBonuses: false,
        isFreeCrypto: false,
        isReferral: false,
        isMining: false,
        isNews: false,
        isAbout: false,
        isDropDownMenuOpened: false,
        selected_lang: "English",
        selected_flag: "en.png",
      };
    },
    created() {
      switch (this.$i18n.locale) {
        case "en":
          this.selected_lang = "English";
          this.selected_flag = "en.png";
          break;
        case "es":
          this.selected_lang = "Español";
          this.selected_flag = "es.png";
          break;
        case "fr":
          this.selected_lang = "Français";
          this.selected_flag = "fr.png";
          break;
        case "de":
          this.selected_lang = "Deutsch";
          this.selected_flag = "de.png";
          break;
        case "fi":
          this.selected_lang = "Filipino";
          this.selected_flag = "fi.png";
          break;
        case "po":
          this.selected_lang = "Português";
          this.selected_flag = "po.png";
          break;
        case "py":
          this.selected_lang = "Русский";
          this.selected_flag = "py.png";
          break;
        case "tu":
          this.selected_lang = "Türkçe";
          this.selected_flag = "tu.png";
          break;
        default:
          this.selected_lang = "English";
          this.selected_flag = "en.png";
      }
    },
    methods: {
      promoHandler: function () {
        this.isPromoToggled = !this.isPromoToggled;
      },
      betFuryHandler: function () {
        this.isBetFuryToggled = !this.isBetFuryToggled;
      },
      allGamesHandler: function () {
        this.$router.push('/all-games');
      },
      vipHandler: function () {
        this.select = 'vip';
      },
      allBonusesHandler: function () {
        this.isAllBonuses = !this.isAllBonuses;
      },
      freeCryptoHandler: function () {
        this.isFreeCrypto = !this.isFreeCrypto;
      },
      referralHandler: function () {
        this.isReferral = !this.isReferral;
      },
      miningHandler: function () {
        this.isMining = !this.isMining;
      },
      newsHandler: function () {
        this.isNews = !this.isNews;
      },
      aboutHandler: function () {
        this.isAbout = !this.isAbout;
      },
      dropdownHandler: function () {
        this.isDropDownMenuOpened = !this.isDropDownMenuOpened;
      },
      select(option, flag, event) {
        this.selected_lang = option;
        this.selected_flag = flag;
        this.isDropDownMenuOpened = false;
        this.$router.replace(this.switchLocalePath(event));
      },
    },
  };
  </script>
  <style lang="scss" scoped>
    .left-menu-container {
      padding-top: 64px;
      position: fixed;
      z-index: 103;
      left: 0;
      top: 0;
      bottom: 0;
      width: 232px;
      background-color: #111923;
      overflow: hidden;

      .left-menu-container__outer {
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
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
        .left-menu-container__inner {
          min-height: 100%;
          display: flex;
          flex-direction: column;
          padding: 28px 20px 32px;
          position: relative;
        }
      }
    }
  </style>
  