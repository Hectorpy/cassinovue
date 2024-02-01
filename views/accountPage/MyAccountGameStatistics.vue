<template>
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
                            <span style="color: rgb(255, 255, 255);">0.00000</span>
                        </span>
                    </span>
                </div>
                <div class="head__item">
                    <span class="head__label">
                        Total Wins:
                    </span>
                    <span class="head__body">
                        <span class="currency">
                            <span style="color: rgb(255, 255, 255);">0</span>
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
                                <span style="color: rgb(255, 255, 255);">0</span>
                            </span>
                        </span>
                    </span>
                    <button class="btn-details" @click ="showDetail = !showDetail">Details <font-awesome-icon icon="fa-solid fa-angle-down" class="icon-arrow"/></button>
                </div>
            </div>
            
            <div v-if="showDetail" class="statistic-table__body">
                <div class="body">
                    <div class="body__head">
                        <h4>Details</h4>
                        <div :class="dropdownOpened ? 'dropdown-opened' : ''" class="dropdown dropdown-lg dropdown-bottomRight">
                            <div class="dropdown-trigger" @click="dropdownOpened = !dropdownOpened">
                                <span class="text">{{selectedMenu}}</span>
                                <font-awesome-icon icon="fa-solid fa-angle-down" class="icon-arrow"/>
                            </div>
                            <div class="dropdown-inner" style="width: 130px">
                                <div class="dropdown-content">
                                    <div class="dropdown-menu-lg">
                                        <ul id="cryptoMenu" class="dropdown-menu-inner dropdown-menu-inner-has-scroll" style="max-height: 200px">
                                        <li v-for="(m, index) in dropMenu" :key="index" :value="m" class="dropdown-menu-item">
                                            <button :class="selectedMenu === m ? 'dropdown-menu-link dropdown-menu-link-selected' : 'dropdown-menu-link'" @click="">
                                            <span class="currency is-wallet">
                                                <span class="provider__label">{{m}}</span>
                                            </span>
                                            </button>
                                        </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="body__table">
                        <b-table class = "mt-3 table-battles" tbody-tr-class="rowClass" :items="details" :fields="field" style="color: #2a3546;">

                            <template #cell(wagered)="data">
                                <div class="tr-col__center" style = "color: #fff; height: 35px; min-width: 75px;">
                                    <img :src= "require('@/assets/images/crypto-icon/' + data.item.img)" class="m-0 p-0" style="width: 21px; height: 21px; "/>
                                    <span class="ms-2">{{data.item.amount}}</span>
                                </div>
                            </template>
                            <template #cell(win)="data">
                                <div class="tr-col__center" style = "color: #fff;">
                                    <label class="ms-2">{{data.item.winCount}}</label>
                                </div>
                            </template>
                            <template #cell(bet)="data">
                                <div class="tr-col__center" style = "color: #fff;">
                                    <label class="ms-2">{{data.item.betCount}}</label>
                                </div>
                            </template>
                        </b-table>
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
        showDetail: false,
        details: [
            {img: 'usdt.svg', amount: 98.342, winCount: 0, betCount: 18},
            {img: 'usdt.svg', amount: 98.342, winCount: 0, betCount: 18},
            {img: 'usdt.svg', amount: 98.342, winCount: 0, betCount: 18},
            {img: 'usdt.svg', amount: 98.342, winCount: 0, betCount: 18},
        ],
        field : [
          { key: 'wagered', label: 'Wagered'},
          { key: 'win', label: 'Win'},
          { key: 'bet', label: 'Bet'},
        ],
        dropMenu: ['SpaceDice', 'CoinFlip'],
        selectedMenu: 'SpaceDice',
        dropdownOpened: false,
      }
    },
    methods: {
    
    }
  }
</script>