<template>
    <div class="deposit">
    <h3 class="mb-3">Address book</h3>
    <div class="currencies">
        <div :class="[ 'dropdown modal-depositwithdraw-balances dropdown-lg dropdown-bottom', cryptoSelectOpened ? 'dropdown-opened' : '',]">
          <div class="dropdown-trigger" @click="toggleCryptoSelect">
            <div class="icon">
              <img :src="require(`@/assets/images/crypto-icon/${cryptos[currentCryptoIndex].icon}`)" :alt="cryptos[currentCryptoIndex].name"/>
            </div>
            <span class="text">
              {{ cryptos[currentCryptoIndex].full_name }}
            </span>
            <!-- <font-awesome-icon icon="fa-solid fa-angle-down" class="icon-arrow"/> -->
            <!-- af-9 by nur -->

          </div>
          <!-- <div class="dropdown-inner" style="width: 100%">
            <div class="dropdown-content">
              <div class="input input-md" placeholder="Search">
                <div class="input-inner">
                  <span class="input-icon">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass"/>
                  </span>
                  <input autocomplete="off" placeholder="Search" class="input-tag" />
                  <button type="button" :class="1 > 2 ? 'input-btn-clear visible' : 'input-btn-clear'">
                    <font-awesome-icon icon="fa-solid fa-xmark" />
                  </button>
                  <div class="input-btn-successful">
                    <font-awesome-icon icon="fa-solid fa-check" />
                  </div>
                </div>
              </div>
              <div class="dropdown-menu-lg">
                <ul id="cryptoMenu" class="dropdown-menu-inner dropdown-menu-inner-has-scroll" style="max-height: 200px">
                  <li v-for="(crypto, index) in cryptos" :key="index" :value="crypto.name" class="dropdown-menu-item">
                    <button @click="selectCrypto(index)" :class=" currentCryptoIndex === index ? 'dropdown-menu-link dropdown-menu-link-selected' : 'dropdown-menu-link'">
                      <span class="currency is-wallet">
                        <img width="24" height="24" :src="require(`@/assets/images/crypto-icon/${crypto.icon}`)" :alt="crypto.name" class="currency-icon"/>
                        <span class="currency-label">{{crypto.name}}</span>
                        <div class="currency-balances">
                          <span class="currency-balances-balance" style="font-size: 14px">
                            <span style="color: #fff" class="font-digits">0<span style="color: #55657e">.00000000</span>
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
        <div v-if="cryptos[currentCryptoIndex].networks.length > 0"
          :class="['dropdown dropdown-lg dropdown-bottomRight dropdown-fullwidth', currentNetworkIndex < 0 ? 'dropdown-is-error' : '', networkSelectOpened ? 'dropdown-opened' : '',]">
          <div class="dropdown-trigger" @click="toggleNetworkSelect">
            <span class="text" v-if="currentNetworkIndex < 0">
              Network
            </span>
            <template v-else>
              <div class="icon">
                <img :src="require(`@/assets/images/crypto-icon/${cryptos[currentCryptoIndex].networks[currentNetworkIndex].icon}`)"
                  :alt="cryptos[currentCryptoIndex].networks[currentNetworkIndex].name"/>
              </div>
              <span class="text">{{cryptos[currentCryptoIndex].networks[currentNetworkIndex].name}}</span>
            </template>
            <font-awesome-icon icon="fa-solid fa-angle-down" class="icon-arrow"/>
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
    <div class="p-5 empty text-gray">
        <div class="p-3 d-flex align-items-center justify-content-center text-center">
            <div class ="fury-text-color">
                <font-awesome-icon class="fs-5" icon="fa-solid fa-address-book" />
            <p>
                You do not have an addresses
            </p>
            </div>
        </div>
    </div>
    <div class="pb-2">
        <b-button variant="primary" block style = "width: 100%">
            <font-awesome-icon icon="fa-solid fa-circle-plus" />
            <span class="ml-3">Add wallet</span>
        </b-button>
    </div>
  </div>
</template>
<script>
  export default {
    name: "SendTips",
    data() {
      return {
        walletMoney: ["BTC", "ETH", "BNB", "TRX", "USDT"],
        network: ["Native", "BNB Chain"],
        selected_wallet: "BTC",
        selected_network: "Native",
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
  .deposit {
    .empty {
        svg {
            width: 44px !important;
            height: 44px !important
        }
    }
  }
  </style>