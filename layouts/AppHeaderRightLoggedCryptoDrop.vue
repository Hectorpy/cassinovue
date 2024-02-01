<template>
  <div v-if = "cryptos.length > 0" class="balance-wrapper dropdown" @click="toggleCryptoSelect" :class="cryptoSelectOpened ? 'dropdown-opened' : ''">
    <div class="dropdown__trigger-custom">
        <div class="balance">
            <span class="currency" font="16">
              <img width="24" height="24" :src="require(`@/assets/images/crypto-icon/${selectedCrypto.icon}`)" :alt="selectedCrypto.name" class="currency-icon"/>
              <div class="currency-balances">
                <span class="currency-balances-balance" style="font-size: 14px">
                  <span style="color: #fff" class="font-digits">0</span>
                  <span style="color: #55657e"> .00000000 </span>
                </span>
              </div>
            </span>
        </div>
        <font-awesome-icon icon="fa-solid fa-angle-down" class="icon-arrow"/>
    </div>
    <div class="dropdown-inner">
      <div class="dropdown-content">
        <!-- <div class="balance-dropdown__head">
          <div class="input input-md">
            <div class="input-inner">
              <span class="input-icon"><font-awesome-icon icon="fa-solid fa-magnifying-glass"/></span>
              <input v-model = "searchKey" v-on:input="searchCrypto" autocomplete="off" placeholder="Search" class="input-tag" id="cryptoSearch"/>
              <button type="button" :class=" 1 > 2 ? 'input-btn-clear visible' : 'input-btn-clear'"><font-awesome-icon icon="fa-solid fa-xmark" /></button>
              <div class="input-btn-successful"><font-awesome-icon icon="fa-solid fa-check" /></div>
            </div>
          </div>
        </div>
        <div class="balance-dropdown__body">
          <div class="dropdown-menu-lg" >
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
        </div> -->
        <!-- af-9 by nur -->
        <div class="balance-dropdown__footer">


          <div class="toggle">
            <div class="toggle__label">
              <span class="toggle__title">Display in Fiat</span>
            </div>
            <button type="button" class="button balance-dropdown__fiat-btn button_sm button_grey2 button_center">
              <span class="button__inner">
                <span class="button__icon">
                  <img :src="require(`@/assets/images/currency/usd.svg`)" alt="USD" loading="lazy" style="width: 15px;">
                </span>
                <span class="button__text">USD</span>
              </span>
            </button>
            <div class="toggle__btn"></div>
          </div>

          <div class="toggle">
            <div class="toggle__label">
              <span class="toggle__title">Display in Fiat</span>
            </div>
            <b-form-checkbox v-model="checked" name="check-button" switch>Switch Checkbox</b-form-checkbox>
            <button type="button" class="button balance-dropdown__fiat-btn button_sm button_grey2 button_center">
              <span class="button__inner">
                <span class="button__icon">
                  <img :src="require(`@/assets/images/currency/usd.svg`)" alt="USD" loading="lazy" style="width: 15px;">
                </span>
                <span class="button__text">USD</span>
              </span>
            </button>
          </div>
          <div class="toggle">
            <div class="toggle__label">
              <span class="toggle__title">Display in Fiat</span>
            </div>
            <button type="button" class="button balance-dropdown__fiat-btn button_sm button_grey2 button_center">
              <span class="button__inner">
                <span class="button__icon">
                  <img :src="require(`@/assets/images/currency/usd.svg`)" alt="USD" loading="lazy" style="width: 15px;">
                </span>
                <span class="button__text">USD</span>
              </span>
            </button>
            <div class="toggle__btn"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
          cryptoSelectOpened: false,
          cryptos: [],
          selectedCrypto: {},
          user_drop : '',
          searchKey : '',
          checked: false,
        }
    },
    created(){
      this.getCryptoList();
    },
    methods: {
      async getCryptoList(){
          const response = await this.$api.auth.getCryptoList();
          this.cryptos = response
          // af-9 by nur
          // this.selectedCrypto = this.cryptos[0]
          this.selectedCrypto = this.cryptos[4]
      },

      toggleCryptoSelect: function () {
        this.cryptoSelectOpened = !this.cryptoSelectOpened;
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
    }


}
</script>
<style lang="scss" scoped>
.balance-dropdown__fiat-btn {
    margin-right: 5px;
    background-color: #2a3546;
    color: #93acd3;
    border-color: transparent;
    padding: 4px 8px;
    border-radius: 8px;
    font-size: 11px;
}
  .dropdown {
    .dropdown-inner {
      margin-top: 8px;
      // margin-bottom: 8px;
      z-index: 2;
      right: 0;
      left: 0;
      top: 100%;
      margin-bottom: 0!important;
      // z-index: 1;
      position: absolute;
      transform: translateY(0);
      // width: 280px;
      width: 250px;
      margin-right: -25px;
      @media (max-width: 768px){
        width: calc(100% - 24px);
        position: fixed!important;
        top: 52px!important;
        left: 12px!important;
        margin-top: 6px!important;
      }
    }
  }
  .balance-wrapper {
    background-color: #202a39;
    height: 40px;
    border-radius: 10px;
    padding-right: 28px;
    padding-left: 12px;
    margin-right: -22px;
    border-radius: 10px 0 0 10px;
    @media (max-width: 768px) {
        padding-right: 16px;
        min-width: 170px;
    }
    .balance-dropdown__footer {
      padding: 16px 12px;
      background-color: #202a39;
      margin: 0 -4px -4px;
      .toggle {
        background-color: unset;
        display: flex;
        align-items: center;
        padding: 0;
        border: none;
        width: 100%;
        color: #93acd3;
        cursor: pointer;
        transition: color .1s ease-in-out;
        justify-content: space-between;
        .toggle__label {
          letter-spacing: -.02em;
          font-weight: 600;
          line-height: 20px;
          font-size: 12px;
          display: flex;
          gap: 0;
          grid-gap: 0;
          color: #fff;
          .toggle__title {
            color: #fff;
          }
        }
        .toggle__btn {
          position: relative;
    border-radius: 10px;
    background: #3c485c;
    height: 20px;
    width: 35px;
    margin-left: 0.5em;
    &::after {
      border-radius: 50%;
    background-color: #93acd3;
    position: absolute;
    display: block;
    content: "";
    height: 15px;
    width: 15px;
    top: 50%;
    transform: translateY(-50%);
    left: 2.5px;
    transition: background-color .1s ease-in-out,left .1s ease-in-out,transform .1s ease-in-out;
    }
        }
      }
    }
}
      .dropdown__trigger-custom {
        cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    .icon-arrow {
    //   width: 24px;
    // height: 24px;
    margin-left: 8px;
    margin-right: -4px;

    fill: #93acd3;
    pointer-events: none;
    transform: rotate(0deg);
    transition: fill .1s ease-in-out,transform .1s ease-in-out;
    }
}
</style>