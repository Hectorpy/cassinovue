<template>
  <div class="fury-modal modal-depositwithdraw" style="max-width: 680px" v-if = "cryptos.length > 0"  @click="(event) => event.stopPropagation()" >
    <div class="modal__container">
      <button @click="$store.commit('closeModal');" class="modal__btn-close">
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </button>
      <div class="modal-depositwithdraw__tabs ">
        <div class="tabs">
          <div class="tabs__body">
            <button @click="setStep(0)" type="button" :class="step == 0 ? 'active' : ''" class="button-tab button-tab-md button-tab-blue">
              <i><font-awesome-icon icon="fa-solid fa-circle-arrow-down" /></i>
              <span> Deposit </span></button>
            <button @click="setStep(1)" :class="step == 1 ? 'active' : ''" type="button" class="button-tab button-tab-md button-tab-blue">
              <i><font-awesome-icon icon="fa-solid fa-circle-arrow-up" /></i>
              <span> Withdraw </span>
            </button>
            <button @click="setStep(2)" :class="step == 2 ? 'active' : ''" type="button" class="button-tab button-tab-md button-tab-blue">
              <i><font-awesome-icon icon="fa-solid fa-arrow-right-arrow-left" /></i>
              <span> Swap Crypto </span>
            </button>
            <button @click="setStep(3)" :class="step == 3 ? 'active' : ''" type="button" class="button-tab button-tab-md button-tab-blue">
              <i><font-awesome-icon icon="fa-solid fa-address-book" /></i>
              <span> Address book </span>
            </button>
            <button @click="setStep(4)" :class="step == 4 ? 'active' : ''" type="button" class="button-tab button-tab-md button-tab-blue">
              <i><font-awesome-icon icon="fa-solid fa-circle-dollar-to-slot" /></i>
              <span> Buy Crypto </span>
            </button>
            <button @click="setStep(5)" :class="step == 5 ? 'active' : ''" type="button" class="button-tab button-tab-md button-tab-blue">
              <i><font-awesome-icon icon="fa-solid fa-coins" /></i>
              <span> Send Tips </span>
            </button>
          </div>
          <div class="tabs__footer">
            <WalletModalWarning/>
          </div>
        </div>
      </div>
      <div class="modal-depositwithdraw__body">
        <div class="body">
          <Deposit v-if = "step ==0"/>
          <Withdraw v-else-if="step == 1"/>
          <SwapCrypto v-else-if="step == 2"/>
          <AddressBook v-else-if="step == 3"/>
          <BuyCrypto v-else-if="step == 4"/>
          <SendTips v-else-if="step == 5"/>
        </div>
        <div class="body__warning">
          <WalletModalWarning/>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
  import Deposit from './Deposit.vue'
  import Withdraw from './Withdraw.vue'
  import SwapCrypto from './SwapCrypto.vue'
  import AddressBook from './AddressBook.vue'
  import BuyCrypto from './BuyCrypto.vue'
  import SendTips from './SendTips.vue'

  import WalletModalWarning from './WalletModalWarning.vue'

  export default {
    name: "WalletModal",
    components: { Deposit, AddressBook, BuyCrypto, SendTips, SwapCrypto, Withdraw, WalletModalWarning},
    data() {
      return {
        step: 0, // 0: deposit, 1: withdraw 2: swapCrypto, 3: addressBook, 4: buyCrypto, 5: sendTips
        cryptos: [],
      };
    },
    created(){
      this.getCryptoList();
    },
    methods: {
      async getCryptoList(){
        const response = await this.$api.auth.getCryptoList();
        // this.cryptos = response // af-9 by nur
        this.cryptos = response.slice(4, 5)

      },
      setStep(i){
        this.step = i;
      }
    }
    
  };
  </script>
<style lang="scss" scoped>
  .body__warning {
    display: none;
    justify-content: center;
    border-top: 1px solid #1c2532;
    padding-top: 24px;
    margin-top: 24px;
    @media (max-width: 710px) {
      display: flex;
    }
  }
  .modal-depositwithdraw {
    &::before {
      pointer-events: none;
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 72px;
      background: linear-gradient(180deg, #003370, transparent);
      border-radius: 14px 14px 0 0;
    }
    .modal__container {
      padding: 0;
      display: flex;
      position: relative;
      z-index: 2;
      min-height: 62px;
      color: #fff;
      @media (max-width: 710px) {
        display: block;
      }
      .modal__btn-close {
        width: 38px;
        height: 38px;
        border: none;
        font-weight: 500;
        font-size: 38px;
        line-height: 38px;
        background-color: transparent;
        color: #93acd3;
        padding: 0;
        position: absolute;
        top: 6px;
        right: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;
        z-index: 10;
        transition: color .1s ease-in-out;
        font-size: 24px;
      }
      .modal-depositwithdraw__tabs {
        padding: 32px;
        width: 225px;
        @media (max-width: 710px){
          width: auto;
          padding: 32px 24px 0;
        }
        .tabs {
          height: 100%;
          display: flex;
          flex-direction: column;
          .tabs__body {
            display: flex;
            flex-direction: column;
            flex: 1 1;
            @media (max-width: 710px) {
              flex-direction: row;
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
            }
          }
          .tabs__footer {
            display: flex;
            flex-direction: column;
            margin-top: 24px;
            @media (max-width: 710px) {
              display: none;
            }
          }
        }

      }
      .modal-depositwithdraw__body {
        position: relative;
        flex: 1 1;
        padding: 24px;
        background-color: #111923;
        @media (max-width: 710px) {
          background-color: transparent;
        }
        .body {
          height: 100%;
        }
      }
    }
    
  }
</style>
  