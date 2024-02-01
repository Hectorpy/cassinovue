<template>
  <div class="game-history">

    <div class="table-filter mt-3">
      <div class="">
        <b-dropdown id="dropdown-1" :text="selectedTime" class="m-md-2" menu-class="w-100" style="width: 165px">
          <b-dropdown-item v-for="(t, index) in gameTimes" :key="index" :active="t.title == selectedTime ? true: false" @click="setGameTime(t)">{{t.title}}</b-dropdown-item>
        </b-dropdown>
      </div>
      <div class="">
        <b-dropdown id="dropdown-1" :text="selectedGameType" class="m-md-2" menu-class="w-100" style="width: 165px">
          <b-dropdown-item v-for="(m, index) in gameTypes" :key="index" :active="selectedGameType == m ? true: false" @click="setGameType(m)">{{m}}</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>

    <div v-if = "history.length < 1" class="empty">
      <span>No information</span>
    </div>
    <div v-else style="overflow-x: auto;">
      <b-table class = "mt-3 table-battles" tbody-tr-class="rowClass" :items="history" :fields="fields" style="color: #2a3546;">
        <template #cell(name)="data" class="kaf">
          <label class="tr-col__center" style = "color: #93acd3;">
            <font-awesome-icon icon="fa-solid fa-circle" />
            <span class="ms-2">{{data.item.name}}</span>
            </label>
        </template>
        <template #cell(provider)="data">
          <div class="tr-col__center" style = "color: #93acd3;">
            <label class="ms-2">{{data.item.provider}}</label>
          </div>
        </template>
        <template #cell(date)="data">
          <div class="tr-col__center" style = "color: #93acd3; min-width: 125px;">
              <label>{{ formatTableDate(data.item.date) }}</label>
            </div>
        </template>
        <template #cell(wager.amount)="data">
          <div class="tr-col__center" style = "color: #fff; height: 35px; min-width: 75px;">
              <img :src= "require('@/assets/images/crypto-icon/' + data.item.img)" class="m-0 p-0" style="width: 21px; height: 21px; "/>
              <span class="ms-2">{{data.item.wager.amount}}</span>
          </div>
        </template>
        <template #cell(payout.amount)="data">
          <div class="tr-col__center" style = "color: #fff;">
            <img :src= "require('@/assets/images/crypto-icon/' + data.item.img)" style="width: 21px; height: 21px;"/>
            <label class="ms-2">{{data.item.payout.amount}}</label>
          </div>
        </template>
        <template #cell(status)="data">
          <div class="tr-col__center" style = "color: #93acd3;">
            <label class="ms-2" v-if="data.item.status == 0">Unsettled</label>
            <label class="ms-2" v-if="data.item.status == 10">Settled</label>
            <label class="ms-2" v-if="data.item.status == 20">Cancelled / Refunded</label>

          </div>
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
    name: "UserInfoGameHistory",
    data() {
      return {
        totalCount : 0,
        currentPage: 1,
        perPage: 10,
        perPages: [10,20,50, 100],

        subGamedDropped: false,
        selectedTime : 'Past 7 days',
        gameTimes:  [
          {title: 'Past 7 days', days: 7},
          {title: 'Past 15 days', days: 15},
          {title: 'Past 30 days', days: 30},
          {title: 'Past 90 days', days: 90},
        ],
        selectedGameType: 'All',
        gameTypes: ['All','In-House', 'Sportbetting', 'Slots', 'Table games', 'Live casino', 'Special'],
        gameTypeDropped: false,
        isChecked: false,
        fields: [
          { key: 'name', label: 'Name'},
          { key: 'provider', label: 'Provider'},
          { key: 'date', label: 'Date'},
          { key: 'wager.amount', label: 'Wager' },
          { key: 'payout.amount', label: 'Payout' },
          { key: 'status', label: 'Status' },
        ],
        history: [],
      };
    },
    watch: {
      currentPage: {
        immediate: true, 
        handler (val, oldVal) {
          if (val != oldVal){
            this.getUserGameHistory()
          }
        }
      }
    },
    methods: {
      setPerPage(p) {
        this.perPage = p
        this.getUserGameHistory()
      },
      async getUserGameHistory(){
        let data = {};
        data.type = this.selectedGameType
        data.days = this.gameTimes.find(({ title }) => title === this.selectedTime).days
        data.page = this.currentPage
        data.perPage = this.perPage
        const res = await this.$api.auth.getUserGameHistory(data)
        this.history = res.history
        this.totalCount = res.totalCount
        this.currentPage = res.currentPage
      },
      setGameType(type) {
        this.selectedGameType = type
        this.getUserGameHistory()
      },
      setGameTime(time) {
        this.selectedTime = time.title
        this.getUserGameHistory()
      },
      formatTableDate(date) {
        return moment(date).utc().format('YYYY-MM-DD,  hh:mm:ss A')
      }
    
    }

  }
</script>