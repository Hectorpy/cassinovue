<template>
    <!-- <h1>SendTips</h1> -->
    <div class="withdraw">
    <h3 class="mb-3">Send Tips</h3>
    <div class="mt-4">
      <form action="" class="mb-3">
        <div class="form-group mb-3">
          <label for="exampleInputEmail1" class="text-light">Username</label>
          <div class="input dep-address input-md">
            <div class="input-inner input-inner-readonly">
              <input autocomplete="off" class="input-tag" placeholder="Enter Username" type="text"/>
              <button :class="1 > 2 ? 'input-btn-clear visible' : 'input-btn-clear'" type="button">
                <font-awesome-icon icon="fa-solid fa-xmark" />
              </button>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <div class="row">
            <div class="form-group mb-2 col-12 col-md-6">
              <label for="exampleInputEmail1" class="text-light">Currency</label>
              <div
          :class="[
            'dropdown modal-depositwithdraw-balances dropdown-lg dropdown-bottom',
            cryptoSelectOpened ? 'dropdown-opened' : '',
          ]"
        >
          <div class="dropdown-trigger" @click="toggleCryptoSelect">
            <div class="icon">
              <img
                :src="require(`@/assets/images/crypto-icon/${cryptos[currentCryptoIndex].icon}`)"
                :alt="cryptos[currentCryptoIndex].name"
              />
            </div>
            <!-- <span class="text">
              {{ cryptos[currentCryptoIndex].full_name }}
            </span> -->
            <span class="text">
              <div class="currency-balances">
                <span class="currency-balances-balance" style="font-size: 14px">
                  <span style="color: #fff" class="font-digits">
                    0<span style="color: #55657e">.00000000</span>
                  </span>
                </span>
              </div>
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
              <div class="dropdown-menu-lg">
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
                        <span class="currency-label">{{
                          crypto.name
                        }}</span>
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div> -->
          <!-- af-9 by nur -->
        </div>
      </div>
      <div class="form-group mb-2 col-12 col-md-6 pb-0">
        <label for="exampleInputEmail1" class="text-light">Amount</label>
        <div class="input dep-address input-md">
            <div class="input-inner input-inner-readonly">
              <input autocomplete="off" class="input-tag" :value = "0"/>
              <button :class="1 > 2 ? 'input-btn-clear visible' : 'input-btn-clear'" type="button">
                <font-awesome-icon icon="fa-solid fa-xmark" />
              </button>
              <button type="button" class="button button-sm button-center fury-btn-info">
                <span class="button-inner">
                  <span class="fury-text-color">Max</span>
                </span>
              </button>
            </div>
          </div>
      </div>
      <div class="custom-control custom-checkbox d-flex align-items-center">
        <input
          type="checkbox"
          class="custom-control-input"
          id="customCheckDisabled1"
        />
        <label class="custom-control-label ps-3" for="customCheckDisabled1"
          > Make tip public (it will appear in chat)</label
        >
      </div>
    </div>
    <div class="pt-5">
      <b-button variant="danger" block style="width: 100%;">Send tips</b-button>
    </div>
  </div>
      </form>
    </div>
  </div>
</template>
<script>

  export default {
    name: "SendTips",
    data() {
      return {
        walletMoney: [
          "0.00000 BTC",
          "0.000 ETH",
          "0.0000 BNB",
          "0.0000 TRX",
          "0.00000 USDT",
        ],
        selected_wallet: "0.00000 BTC",
        cryptoSelectOpened: false,
        networkSelectOpened: false,
        cryptos: this.$parent.cryptos,
        currentCryptoIndex: 0,
        currentNetworkIndex: -1,
        QRCodeModuleLoaded: false,
        url: null,
      };
    },
    methods:{
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
  .custom-control {
    min-height: 1.5rem;
    padding-left: 2.5rem;
  }
  .custom-control-label::after,
  .custom-control-label::before {
    height: 20px;
    width: 20px;
  }
  .custom-control-label {
    line-height: 28px !important;
  }
</style>
    
