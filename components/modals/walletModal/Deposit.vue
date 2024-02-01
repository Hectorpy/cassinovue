<template>
  <div>
    <h2 class="mb-3" style="font-size: 24px;">Deposit</h2>
    <div class="currencies">
      <div :class="['dropdown modal-depositwithdraw-balances dropdown-lg dropdown-bottom', cryptoSelectOpened ? 'dropdown-opened' : '',]">
        <div class="dropdown-trigger" @click="toggleCryptoSelect">
          <div class="icon">
            <img :src="require(`@/assets/images/crypto-icon/${selectedCrypto.icon}`)" :alt="selectedCrypto.name"/>
          </div>
          <span class="text"> {{selectedCrypto.full_name }}</span>
          <!-- <font-awesome-icon icon="fa-solid fa-angle-down" class="icon-arrow"/> -->
          <!-- af-9 by nur -->
        </div>
        <!-- <div class="dropdown-inner" style="width: 100%">
          <div class="dropdown-content">
            <div class="input input-md">
              <div class="input-inner">
                <span class="input-icon"><font-awesome-icon icon="fa-solid fa-magnifying-glass"/></span>
                <input v-model = "searchKey" v-on:input="searchCrypto" autocomplete="off" placeholder="Search" class="input-tag" id="cryptoSearch"/>
                <button type="button" :class=" 1 > 2 ? 'input-btn-clear visible' : 'input-btn-clear'"><font-awesome-icon icon="fa-solid fa-xmark" /></button>
                <div class="input-btn-successful"><font-awesome-icon icon="fa-solid fa-check" /></div>
              </div>
            </div>
            <div class="dropdown-menu-lg" v-if = "cryptos.length > 0">
              <ul class="dropdown-menu-inner dropdown-menu-inner-has-scroll" style="max-height: 200px">
                <li v-for="(crypto, index) in cryptos" :key="index" :value="crypto.name" class="dropdown-menu-item">
                  <button :class="selectedCrypto.name === crypto.name ? 'dropdown-menu-link dropdown-menu-link-selected' : 'dropdown-menu-link'" @click="selectCrypto(crypto)">
                    <span class="currency is-wallet">
                      <img :src="require(`@/assets/images/crypto-icon/${crypto.icon}`)" :alt="crypto.name" width="24" height="24" class="currency-icon"/>
                      <span class="currency-label">{{crypto.name}}</span>
                      <div class="currency-balances">
                        <span class="currency-balances-balance" style="font-size: 14px">
                          <span style="color: #fff" class="font-digits"> 0<span style="color: #55657e">.00000000</span></span>
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
      <div v-if="selectedCrypto.networks.length > 0" :class="['dropdown dropdown-lg dropdown-bottomRight dropdown-fullwidth', 
          currentNetworkIndex < 0 ? 'dropdown-is-error' : '', networkSelectOpened ? 'dropdown-opened' : '',]" >
        <div class="dropdown-trigger" @click="toggleNetworkSelect">
          <span class="text" v-if="currentNetworkIndex < 0">Network</span>
          <template v-else>
            <div class="icon">
              <img :src="require(`@/assets/images/crypto-icon/${selectedCrypto.networks[currentNetworkIndex].icon}`)"
                :alt="selectedCrypto.networks[currentNetworkIndex].name"/>
            </div>
            <span class="text">{{selectedCrypto.networks[currentNetworkIndex].name}}</span>
          </template>
          <font-awesome-icon icon="fa-solid fa-angle-down" class="icon-arrow"/>
        </div>
        <div class="dropdown-inner" style="width: 100%">
          <div class="dropdown-content">
            <div class="dropdown-menu-lg">
              <ul class="dropdown-menu-inner" style="max-height: 200px">
                <li v-for="(network, subIndex) in selectedCrypto.networks" :key="subIndex" :value="network.name" class="dropdown-menu-item" >
                  <button @click="selectNetwork(subIndex)" :class=" subIndex === currentNetworkIndex ? 'dropdown-menu-link dropdown-menu-link-selected': 'dropdown-menu-link'">
                    <div class="icon">
                      <img :src="require(`@/assets/images/crypto-icon/${network.icon}`)" :alt="network.name"/>
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
    <div v-if="currentNetworkIndex < 0 && selectedCrypto.networks.length > 0" class="select-chain-overlay">
      <span>To continue, select network</span>
    </div>
    <div class="tab tab-deposit">
      <div class="tab-body">
        <div class="tab-title-block">
          <h2 class="your-address-title">Your BTC deposit address</h2>
          <p class="dw-plain-text dw-plain-text-16">
            This address accepts only <span>BTC</span> transferring here
            any other coin or WBTC both TRC-20 and ERC-20 will result in
            fund loss. Copy <span>BTC</span> address here:
          </p>
        </div>
        <div class="input dep-address input-md">
          <div class="input-inner input-inner-readonly">
            <input autocomplete="off" readonly="readonly" class="input-tag" value="bc1q2j82hdcjdjgk6akqmghv9y6lx3lankjy9tpjss"/>
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
        <div class="qr-block">
          <div class="qr-texts me-2">
            <p class="dw-plain-text dw-plain-text-14 min-dep">
              ⚠️ The minimum deposit amount <span>0.00005</span> BTC,
              lower amount won't be credited or refunded.
            </p>
            <p class="dw-plain-text dw-plain-text-14">
              BetFury doesn't have any fee for BTC deposits. Bitcoin
              deposits may take some time related to the network hash
              rate.
            </p>
          </div>
          <div style="background-color: #fff;" class="p-2">
            <qr-code :text="url" error-level="L"></qr-code>
          </div>
        </div>
      </div>
    </div>
  </div>
            
</template>
<script>
  export default {
    name: "Deposit",
    
    data() {
      return {
        searchKey : '',
        cryptoSelectOpened: false,
        networkSelectOpened: false,
        cryptos: this.$parent.cryptos,
        selectedCrypto: this.$parent.cryptos[0],
        currentNetworkIndex: -1,
        // QRCodeModuleLoaded: false,
        url: 'bc1qsy46qxhvxrdd8ruxw8wu36vywdh7xdspgsv2mx',
      };
    },
    // async created() {
    //   await this.fetchData();

    // },
    // async mounted() {
    //   await this.fetchData();
    // },
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
      selectCrypto(crypto) {
        this.selectedCrypto = crypto
        this.cryptoSelectOpened = false;
        this.currentNetworkIndex = -1;
      },
      searchCrypto () {
        if (this.searchKey == ''){
          this.cryptos = this.$parent.cryptos
          return
        }
        var result = this.cryptos.filter(c => c.name.match(this.searchKey.toUpperCase()))
        this.cryptos = result
      },
    },
  };
</script>
<style lang="scss" scoped>
  .button_md {
    border-radius: 10px;
    font-size: 12px;
    &:not(.button_only-icon) {
      padding: 6px 10px;
    }
  }
  .button_grey2 {
    background-color: #2a3546;
    color: #93acd3;
    border-color: transparent;
  }
  .button_fullwidth {
    justify-content: center;
    display: flex;
    width: 100%;
  }

</style>
    