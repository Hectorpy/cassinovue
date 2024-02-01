<template>
  <div class="sessions">
    <div v-if = "sessions.length < 1" class="empty">
      <span>No information</span>
    </div>
    <div v-else style="overflow-x: auto;">

      <b-table class = "mt-3 table-battles" tbody-tr-class="rowClass" :items="sessions" :fields="fields" style="color: #2a3546;">
        <template #cell(date)="data">
          <label class="tr-col__center" style = "color: #93acd3; min-width: 125px;">{{ formatTableDate(data.item.date) }}</label>
        </template>
        <template #cell(browser)="data">
          <div class="tr-col__center" style=" justify-content: space-between; min-width: 615px;">
            <a class="tr__a" >{{data.item.browser}}</a>
            <div class = "verified ms-2" style="width: 85px;">
              <div v-if = "data.item.status == 1" class="verified">
                <font-awesome-icon icon="fa-solid fa-circle" />
                <label>Current</label>
              </div>
              <div v-else-if = "data.item.status == 0" class="verified">
                <font-awesome-icon icon="fa-solid fa-circle" />
                <label>Active</label>
              </div>
            </div>
            <button type="button" class="btn btn-primary btn-sm ms-2" style="font-weight: 500;">logout</button>
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
    name: "UserInfoSessions",
    data() {
      return {
        totalCount : 0,
        currentPage: 1,
        perPage: 10,
        perPages: [10,20,50, 100],

        fields: [
          { key: 'date', label: 'Date'},
          { key: 'browser', label: 'Browser' },
        ],
        sessions: []
      };
    },
    watch: {
      currentPage: {
        immediate: true, 
        handler (val, oldVal) {
          if (val != oldVal){
            this.getUserSession()
          }
        }
      }
    },
    methods: {
      setPerPage(p) {
        this.perPage = p
        this.getUserSession()
      },
      async getUserSession(){
        let data = {};
        data.page = this.currentPage
        data.perPage = this.perPage
        const res = await this.$api.auth.getUserSession(data)
        this.sessions = res.sessions
        this.totalCount = res.totalCount
        this.currentPage = res.currentPage
      },
      formatTableDate(date) {
        return moment(date).utc().format('YYYY-MM-DD,  hh:mm:ss A')
      }
    }
  }
</script>
<style lang="scss" scoped>
</style>