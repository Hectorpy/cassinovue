<template>
    <div class="f-modals">
        <div class="f-modal wager-all" style="max-width: 360px">
            <div class="modal__container">
                <button class="modal__btn-close" @click="$store.commit('closeModal')">
                    <font-awesome-icon icon="fa-solid fa-xmark" style="width: 24px; height:24px;"/>
                </button>
                <div class="wager-all__head">
                    <h2 class="wager-all__title">WAGER DETAILS</h2>
                    <p class="wager-all__desc">Here you can find your detailed wager counts in every cryptocurrency presented on BetFury.</p>
                </div>
                
                <div class="wager-all__body">
                    <div class="wager-all__tokens">
                        <div class="wager-all__token" v-for="(c, i) in cryptos" :key="i">
                            <span class="currency">
                                <img width="34" height="34" :src="require(`@/assets/images/crypto-icon/${c.icon}`)" :alt="c.name" loading="lazy" class="currency__icon">
                                <div class="currency__balances-wrap">
                                    <div class="currency__balances">
                                        <span class="currency__balances--balance" style="font-size: 18px;">
                                            <span style="color: #fff" class="font-digits">0.00000069
                                                <span style="color: #ffffff"></span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </span>
                            <span class="wager-all__currency">{{c.name}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
  export default {
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
        this.cryptos = response
      },
    }

  }
</script>
<style lang="scss" scoped>
    .currency {
        display: inline-flex;
        align-items: center;
        flex-shrink: 0;
        .currency__icon {
            flex-shrink: 0;
            margin-right: 0.5em;
        }
        .currency__balances-wrap {
            display: flex;
            align-items: center;
            .currency__balances {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .currency__balances--balance {
                    display: flex;
                    align-items: center;
                }
            }
        }
    }
    .wager-all__currency {
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        margin-left: 4px;
        color: #55657e;
    }
    .wager-all__token {
        display: flex;
        align-items: center;
        margin-bottom: 16px;

    }
    .modal__container {
        position: relative;
        z-index: 2;
        min-height: 62px;
        padding: 24px;
        color: #fff;
    }
    .wager-all__body {
        margin-bottom: 24px;
    }
    .wager-all__tokens {
        max-height: 284px;
        height: 284px;
        overflow: auto;
    }
    .wager-all {
        &::before {
            pointer-events: none;
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 72px;
            background: linear-gradient(180deg,#003370,transparent);
            border-radius: 14px 14px 0 0;
        }
    }
    .wager-all__head {
        margin-bottom: 24px;
    }
    h2 {
        font-size: 24px;
        margin-top: 0;
        margin-bottom: 1rem;
        font-weight: 700;
        line-height: 1.2;
        color: #fff;
    }
    .wager-all__desc {
        font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #93acd3;
    }
</style>