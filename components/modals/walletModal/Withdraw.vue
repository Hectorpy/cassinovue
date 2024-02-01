<template>
  <div class="withdraw">
    <h3 class="mb-3">Withdraw</h3>
    <div class="currencies">
        <div :class="['dropdown modal-depositwithdraw-balances dropdown-lg dropdown-bottom', cryptoSelectOpened ? 'dropdown-opened' : '',]">
          <div class="dropdown-trigger" @click="toggleCryptoSelect">
            <div class="icon">
              <img :src="require(`@/assets/images/crypto-icon/${cryptos[currentCryptoIndex].icon}`)" :alt="cryptos[currentCryptoIndex].name"
              />
            </div>
            <span class="text">
              {{ cryptos[currentCryptoIndex].full_name }}
            </span>
            <!-- <font-awesome-icon
              icon="fa-solid fa-angle-down"
              class="icon-arrow"
            /> -->
            <!-- af-9 by nur -->

          </div>
          <!-- <div class="dropdown-inner" style="width: 100%">
            <div class="dropdown-content">
              <div class="input input-md" placeholder="Search">
                <div class="input-inner">
                  <span class="input-icon">
                    <font-awesome-icon
                      icon="fa-solid fa-magnifying-glass"
                    />
                  </span>
                  <input
                    autocomplete="off"
                    placeholder="Search"
                    class="input-tag"
                  />
                  <button
                    type="button"
                    :class="
                      1 > 2 ? 'input-btn-clear visible' : 'input-btn-clear'
                    "
                  >
                    <font-awesome-icon icon="fa-solid fa-xmark" />
                  </button>
                  <div class="input-btn-successful">
                    <font-awesome-icon icon="fa-solid fa-check" />
                  </div>
                </div>
              </div>
              <div class=" dropdown-menu-lg">
                <ul
                  id="cryptoMenu"
                  class="dropdown-menu-inner dropdown-menu-inner-has-scroll"
                  style="max-height: 200px"
                >
                  <li
                    class="dropdown-menu-item"
                    v-for="(crypto, index) in cryptos"
                    :key="index"
                    :value="crypto.name"
                  >
                    <button
                      :class="
                        currentCryptoIndex === index
                          ? 'dropdown-menu-link dropdown-menu-link-selected'
                          : 'dropdown-menu-link'
                      "
                      @click="selectCrypto(index)"
                    >
                      <span class="currency is-wallet">
                        <img
                          width="24"
                          height="24"
                          :src="
                            require(`@/assets/images/crypto-icon/${crypto.icon}`)
                          "
                          :alt="crypto.name"
                          class="currency-icon"
                        />
                        <span class="currency-label">{{
                          crypto.name
                        }}</span>
                        <div class="currency-balances">
                          <span
                            class="currency-balances-balance"
                            style="font-size: 14px"
                          >
                            <span style="color: #fff" class="font-digits">
                              0<span style="color: #55657e">.00000000</span>
                            </span>
                          </span>
                        </div>
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div> -->
          <!-- af-9 by nur -->

        </div>
        <div
          :class="[
            'dropdown dropdown-lg dropdown-bottomRight dropdown-fullwidth',
            currentNetworkIndex < 0 ? 'dropdown-is-error' : '',
            networkSelectOpened ? 'dropdown-opened' : '',
          ]"
          v-if="cryptos[currentCryptoIndex].networks.length > 0"
        >
          <div class="dropdown-trigger" @click="toggleNetworkSelect">
            <span class="text" v-if="currentNetworkIndex < 0">
              Network
            </span>
            <template v-else>
              <div class="icon">
                <img
                  :src="
                    require(`@/assets/images/crypto-icon/${cryptos[currentCryptoIndex].networks[currentNetworkIndex].icon}`)
                  "
                  :alt="
                    cryptos[currentCryptoIndex].networks[
                      currentNetworkIndex
                    ].name
                  "
                />
              </div>
              <span class="text">{{
                cryptos[currentCryptoIndex].networks[currentNetworkIndex]
                  .name
              }}</span>
            </template>
            <font-awesome-icon
              icon="fa-solid fa-angle-down"
              class="icon-arrow"
            />
          </div>
          <div class="dropdown-inner" style="width: 100%">
            <div class="dropdown-content">
              <div class="dropdown-menu-lg">
                <ul class="dropdown-menu-inner" style="max-height: 200px">
                  <li
                    class="dropdown-menu-item"
                    v-for="(network, subIndex) in cryptos[
                      currentCryptoIndex
                    ].networks"
                    :key="subIndex"
                    :value="network.name"
                  >
                    <button
                      :class="
                        subIndex === currentNetworkIndex
                          ? 'dropdown-menu-link dropdown-menu-link-selected'
                          : 'dropdown-menu-link'
                      "
                      @click="selectNetwork(subIndex)"
                    >
                      <div class="icon">
                        <img
                          :src="
                            require(`@/assets/images/crypto-icon/${network.icon}`)
                          "
                          :alt="network.name"
                        />
                      </div>
                      <span class="text">{{ network.name }}</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="">
      <div class="pt-3">
        <!-- <form action="" class="mb-3"> -->
          <div class="form-group mb-3">
            <label class="fury-text-color">Your wallet address</label>
            <div class="input dep-address input-md">
              <div class="input-inner input-inner-readonly">
                <input autocomplete="off" class="input-tag" placeholder="Enter Address" type="text"/>
                <button :class="1 > 2 ? 'input-btn-clear visible' : 'input-btn-clear'" type="button">
                  <font-awesome-icon icon="fa-solid fa-xmark" />
                </button>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <div class="row">
              <div class="form-group mb-2 col-12 col-md-8">
                <label class = "fury-text-color">Amount</label>
                <div class="input dep-address input-md">
                  <div class="input-inner input-inner-readonly">
                    <input autocomplete="off" class="input-tag" placeholder="Enter Amount"/>
                    <button :class="1 > 2 ? 'input-btn-clear visible' : 'input-btn-clear'" type="button">
                      <font-awesome-icon icon="fa-solid fa-xmark" />
                    </button>
                    <button type="button" class="button button-sm button-center fury-btn-info">
                      <span class="button-inner">
                        <span class="fury-text-color">All</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="form-group mb-2 col-12 col-md-4 pb-0">
                <label class = "fury-text-color">Balance</label>
                <div class="input dep-address input-md">
                  <div class="input-inner input-inner-readonly">
                    <img :src="require(`@/assets/images/crypto-icon/${cryptos[currentCryptoIndex].icon}`)" style="width: 15px; height: 15px;"/>
                    <input autocomplete="off" class="input-tag ms-2" placeholder="0.00000"/>
                    <button class="input-btn-clear visible" readonly="readonly" type="button">
                      <font-awesome-icon icon="fa-solid fa-xmark" />
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <small>⚠️ The minimum withdrawal amount is 0.00005 BTC.</small>
              </div>
            </div>
          </div>
          <div class="btn_wrap">
            <div class="mode_btns">
              <button @click="active_mode = 'fast'" type="button" class="btn low"  :class="active_mode == 'fast' ? 'active' : ''" style="height: 100%;">Fast</button>
              <button @click="active_mode = 'slow'" type="button" class="btn  fast me-2" :class="active_mode == 'slow' ? 'active' : ''" style="height: 100%;">Slow</button>
            </div>
            <button class="btn btn-danger" block style=" width: 100%">Withdraw</button>

          </div>





          <small class="fury-text-color">Only send BTC to this address, 1 confirmation(s) required.</small>
        <p class="text-light mt-3">
          <span v-if="active_mode == 'fast'">
            Transaction fee - 0.00025 BTC. Time taken - 0-2 Heures. Network
            confirmation is not included and can take some extra time. </span
          ><span v-if="active_mode == 'slow'">
            Transaction fee - 0.000075 BTC. Time taken - over 24h. Network
            confirmation is not included and can take some extra time.
          </span>
        </p>
      </div>
      <div
        class="overlay-box d-flex align-items-center justify-content-center"
        v-if="showOverlay"
      >
        <h4>To coninue, select network</h4>
      </div>
      </div>
  </div>
</template>
<script>

  export default {
    name: "Withdraw",
    data() {
      return {
        cryptoSelectOpened: false,
        networkSelectOpened: false,
        cryptos: this.$parent.cryptos,
        currentCryptoIndex: 0,
        currentNetworkIndex: -1,
        QRCodeModuleLoaded: false,
        url: null,
        walletMoney: ["BTC", "ETH", "BNB", "TRX", "USDT"],
        network: ["ECR-20", "BNB Chain"],
        selected_wallet: "BTC",
        selected_network: "rr",
        active_mode: "slow",
      };
    },  
    computed: {
    showOverlay() {
      return (
        this.selected_network === "" ||
        this.selected_wallet === "" ||
        this.selected_network === null ||
        this.selected_wallet === null
      );
    },
  },
    methods: {
      toggleCryptoSelect: function () {
        this.cryptoSelectOpened = !this.cryptoSelectOpened;
      },
      toggleNetworkSelect: function () {
        this.networkSelectOpened = !this.networkSelectOpened;
      },
      selectNetwork: function (subIndex) {
        this.currentNetworkIndex = subIndex;
        this.networkSelectOpened = false;
      },
      selectCrypto: function (index) {
        this.currentCryptoIndex = index;
        this.cryptoSelectOpened = false;
        this.currentNetworkIndex = -1;
      },
    }
  };
</script>

<style lang="scss" scoped>
  .btn_wrap {
    display: flex;
    width: 100%;
    .mode_btns {
      display: flex;
    }
    .active {
      background-color: #2283f6 !important;
      color: #ffffff !important;
    }
  }
  .withdraw {
    .overlay-box {
      height: 100%;
      filter: none !important;
      position: absolute;
      background: rgba(17, 25, 35, 0.9);
      width: 100%;
      z-index: 10;
      left: 0;
      bottom: 0;
      height: calc(100% - 120px);
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
    .way-buttons {
      .btn {
        border-radius: 8px;
        font-size: 14px;
        background-color: #1c2532 !important;
        color: #55657e;
        border-color: transparent;
        padding: 4px 8px !important;
        &.active {
          background-color: #2283f6 !important;
          color: #ffffff !important;
        }
      }
    }
  }
</style>
    
