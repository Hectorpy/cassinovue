<template>
    <div class="deposit">
    <h3 class="mb-3">Swap Crypto</h3>
    <div class="mt-4">
      <div class="w-100 bsc-block text-light mb-2">
          <img src="@/assets/images/chain-icon/bnb.svg" style="width: 25px; height: 25px"/><span class="ms-2">BNB Chain</span>
      </div>
      <p class="small text-light">
        <b>
          Swap BNB Chain network crypto on Biswap Dex. Choose the currency you want to
          exchange and go to Biswap. Just a few steps and much convenience.
        </b>
      </p>
      <div class="coin_list__wrapper">
        <div class="coin_list coin_list--darkened">
          <div class="coin_item" v-for="(c, index) in cryptos" :key="index" >
            <img :src="require(`@/assets/images/crypto-icon/${c.icon}`)" style="width: 30px; height: 30px;"/>
            <p>{{ c.name }}</p>
          </div>
        </div>
      </div>
      <b-button variant="primary">
        <span class="mr-2">Swap on Biswap</span>
        <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
      </b-button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        cryptos: this.$parent.cryptos,
      };
    },
    created() {
    }
  };
</script>
<style lang="scss" scoped>
  .coin_list__wrapper {
    max-height: 155px;
    overflow-y: auto;
    position: relative;
    padding-right: 5px;
    .coin_list {
      display: grid;
      grid-template-columns: repeat(5,1fr);
      grid-gap: 10px;
      @media (max-width:1024px) {
        grid-template-columns: repeat(auto-fit,minmax(75px,1fr));
      }
      .coin_item {
        width: 75px;
        height: 69px;
        background: #1c2532;
        border-radius: 14px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
      .picked {
        border: 2px solid #2283f6;
      }
    }
  }
  .bsc-block {
    background: #1c2532;
    border-radius: 10px;
    padding: 10px 14px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }










    .chain {
      background: #1c2532;
      border-radius: 14px;
      cursor: pointer;
      height: 70px;
      background: #1c2532;
      border-radius: 14px;
    }
    .box {
      max-height: 160px;
      overflow-y: auto;
      position: relative;
      padding-right: 5px;
    }
    ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      background-color: #1c2532;
    }
    ::-webkit-scrollbar {
      border-radius: 10px;
    
      width: 6px;
      background-color: #1c2532;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #93acd3 !important;
    }
    </style>
