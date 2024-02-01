<template>
  <div class="transactions">

    <div class="table-filter mt-3">
      <div class="ms-2">
        <b-dropdown :text="selectedMenu" class="m-md-2" menu-class="w-100" style="width: 165px">
          <b-form-input size="sm" placeholder="Filter by type" v-on:input="filterMenu" v-model = "searchKey"></b-form-input>
          <!-- <input v-model = "searchKey" v-on:input="filterMenu" autocomplete="off" placeholder="Search" class="input-tag" id="cryptoSearch"/> -->
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-group class="has-scroll h-150">
            <b-dropdown-item :active="selectedMenu == 'All' ? true: false" @click="selectMenu('All')">All</b-dropdown-item>
            <b-dropdown-item v-for="(m, index) in filteredDropMenu" :key="index" :active="selectedMenu == m ? true: false" @click="selectMenu(m)">{{m}}</b-dropdown-item>
          </b-dropdown-group>
        </b-dropdown>
      </div>
      <client-only>
        <v-date-picker v-model="selectedDate" :value="null"
          style="height: 44px; width: 225px;" class="vue-date-picker-wrapper" color="red" is-dark is-range>
          <template  v-slot="{ inputValue, togglePopover }">
            <div class="date-inner-wrapper px-1" @mouseover="togglePopover()">
                <div class="ms-2" style="pointer-events: none; cursor: pointer;">{{inputValue.start}} ~ {{inputValue.end}}</div>
            </div>
          </template>
        </v-date-picker>
      </client-only>
    </div>

    <div v-if = "totalCount < 1" class="empty">
      <span>No information</span>
    </div>

    <div v-else style="overflow-x: auto;">

      <b-table class = "mt-3 table-battles" tbody-tr-class="rowClass" :items="transactions" :fields="fields" style="color: #2a3546;">
        <template #cell(date)="data">
          <label class="tr-col__center" style = "color: #93acd3; min-width: 125px;">{{formatTableDate(data.item.date)}}</label>
        </template>
        <template #cell(type)="data">
          <div class="tr-col__center" style ="color: #fff;">
            <label>{{dropMenu[data.item.type]}}</label>
          </div>
        </template>
        <template #cell(amount)="data">
          <div class="tr-col__center" style ="color: #fff;">
            <img :src= "require('@/assets/images/crypto-icon/' + data.item.img)" style="width: 21px; height: 21px; z-index: 5;"/>
            <label class="ms-2">
              <span v-if = "data.item.amount >= 0" class="safe_color">+</span>
              <span v-else class="danger_color">-</span>
              {{Math.abs(data.item.amount)}} <span style = "color: #93acd3;">({{data.item.beforeBalance.amount}} -> {{data.item.afterBalance.amount}})</span></label>
          </div>
        </template>
        <template #cell(information)="data">
          <a class="tr__a">{{data.item.information}}</a>
        </template>
      </b-table>
      <div class="betfury-pagination">
        <b-pagination 
          v-model = "currentPage"
          :total-rows="totalCount"
          :per-page="perPage"
          first-number
          last-number
          class="container-class"
          style="margin: 0px;">
        </b-pagination>
        <b-dropdown :text="perPage" class="m-md-2 ps-5" menu-class="per-page-menu" style="width: 120px" >
            <b-dropdown-item v-for="(p, index) in perPages" :key="index" :active="perPage == p ? true: false" @click="setPerPage(p)">{{p}}</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>

  </div>
</template>
<script>
  import moment from 'moment';

  export default {
    name: "UserInfoTransactions",
    
    data() {
      return {
        dropdownOpened: false,
        selectedDate: {
          start: new Date(),
          end: new Date()
        },
        danger_color: '',
        safe_color: '',
        searchKey: '',
        dropMenu: ['Deposit', 'Withdrawal', 'Referral', 'Cashback', 'Daily Task', 'Staking', 'Bonuses', 'Jackpot'],
        filteredDropMenu: ['Deposit', 'Withdrawal', 'Referral', 'Cashback', 'Daily Task', 'Staking', 'Bonuses', 'Jackpot'],

        selectedMenu: 'All',
        transactions: [],
        totalCount : 0,
        currentPage: 1,
        perPage: 10,
        perPages: [10,20,50, 100],

        fields: [
          { key: 'date', label: 'Date'},
          { key: 'type', label: 'Type' },
          { key: 'amount', label: 'Amount' },
          { key: 'information', label: 'Information' },
        ],
      };
    },

    watch: {
      currentPage: {
        immediate: true, 
        handler (val, oldVal) {
          if (val != oldVal){
            this.getUserTransactions()
          }
        }
      }
    },

    methods: {
      setPerPage(p) {
        this.perPage = p
        this.getUserTransactions()
      },
      async getUserTransactions(){
        let data = {};
        data.type = this.dropMenu.findIndex(m => m === this.selectedMenu)
        data.date = this.selectedDate
        data.page = this.currentPage
        data.perPage = this.perPage
        const res = await this.$api.auth.getUserTransactions(data)
        console.log(res.transactions)
        this.transactions = res.transactions
        this.totalCount = res.totalCount
        this.currentPage = res.currentPage
      },
      filterMenu() {
        if (this.searchKey == ''){
          this.filteredDropMenu = this.dropMenu
          return
        }
        var result = this.dropMenu.filter(d => d.toLowerCase().match(this.searchKey.toLowerCase()))
        this.filteredDropMenu = result
      },
      selectMenu(menu){
        this.selectedMenu = menu
        this.getUserTransactions()
      },
      formatTableDate(date) {
        return moment(date).utc().format('YYYY-MM-DD,  hh:mm:ss A')
      }
    }
  }
</script>
<style lang="scss">

  .safe_color {
    color: $safe-color;
  }
  .danger_color {
    color: $danger-color;
  }
  .h-150 {
    height: 150px;
    overflow-y: scroll;
  }

  .table-filter{
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    .vue-date-picker-wrapper {
      position: relative;
      display: flex;
      background: #1c2532;
      border-radius: 8px;
      height: 100%;
      width: 100%;
      min-width: 195px;
      .date-inner-wrapper{
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        font-size: 14px;
        justify-content: center;
        // padding: 16px;
        .calendar-icon {
            left: 12px;
            color: #55657e;
        }
      }
    }
  }
</style>
