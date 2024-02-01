<template>
    <div class = "statistics">
        <div class="statistics__head">
            <div class = "statistics-tabs" style="padding-bottom: 10px;">
                <a @click = setGameType(1) :class= "['btn-tab p-2', gameType == 1 ? 'active-home' : '']">
                    <font-awesome-icon icon="fa-solid fa-flag" class="ms-2" style="font-size: 14px;"/>
                    <span class="fw-bold ms-2" >Battles</span>
                    <span class = "badge">6</span>
                </a>
                <a @click = setGameType(2) :class= "['btn-tab p-2', gameType == 2 ? 'active-home' : '']">
                    <span class="fw-bold ms-2" >All bets</span>
                </a>
                <a v-if = "$store.state.account.name != ''" @click = setGameType(3) :class= "['btn-tab p-2', gameType == 3 ? 'active-home' : '']">
                    <span class="fw-bold ms-2" >My bets</span>
                </a>
                <a @click = setGameType(4) :class= "['btn-tab p-2', gameType == 4 ? 'active-home' : '']">
                    <span class="fw-bold ms-2" >High rollers</span>
                </a>
                <a @click = setGameType(5) :class= "['btn-tab p-2', gameType == 5 ? 'active-home' : '']">
                    <span class="fw-bold ms-2" >Rare wins</span>
                </a>
            </div>
            <div class="buttons">
                <div :class="['dropdown dropdown-lg dropdown-bottomRight dropdown-fullwidth', perPageDrop ? 'dropdown-opened' : '',]" >
                    <div class="dropdown-trigger" @click="perPageDrop = !perPageDrop">
                        <span class="text">{{perPage}}</span>
                        <font-awesome-icon icon="fa-solid fa-angle-down" class="icon-arrow"/>
                    </div>
                    <div class="dropdown-inner" style="width: 100%">
                        <div class="dropdown-content">
                        <div class="dropdown-menu-lg">
                            <ul class="dropdown-menu-inner" style="max-height: 200px">
                                <li v-for="(m, index) in perPages" :key="index" :value="m" class="dropdown-menu-item">
                                    <button  @click="setPerPage(m)" :class="perPage === m ? 'dropdown-menu-link dropdown-menu-link-selected' : 'dropdown-menu-link'">
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
        </div>
        <div class="statistics__body">
            <div class = "battles" style="min-height: 616px;">

                <HomeLobbyStatisticsSlider v-if = "gameType == 1"/>
                
                <div class = "battles__winners">

                    <b-table v-if = "gameType == 1" class = "mt-3 table-battles" tbody-tr-class="rowClass" :items="tableData" :fields="fields" style="color: #2a3546;">
                        <template #cell(index)="data">
                            <label :class="'place-'+ ((data.index + 1) + (currentPage - 1) * perPage)" class="td-place" style = "">{{ (data.index + 1) + (currentPage - 1) * perPage }}</label>
                        </template>
                        <template #cell(name)="data">
                            <div style ="display: flex; justify-content: flex-start; align-items: center;">
                                <img src= "@/assets/images/avatar/avatar1.avif" style="width: 25px; height: 25px;"/>
                                <span style="right: 8px; top: 6px" class="fury__info__btn">{{data.item.count}}</span>
                                <b v-if="data.item.name" class = "ms-2">{{data.item.name}}</b>
                                <b v-else class = "ms-2">User{{data.item.id}}</b>
                            </div>
                        </template>
                        <template #cell(wager)="data">
                            <div v-if = "data.item.wager" style ="display: flex; justify-content: flex-start; align-items: center;">
                                <img src= "@/assets/images/crypto-icon/usdt.svg" style="width: 21px; height: 21px;"/>
                                <span class = "ms-2" style="color: #fff;">{{data.item.wager.toString().split(".")[0]}}</span>
                                <span>.{{data.item.wager.toString().split(".")[1]}}</span>
                            </div>
                        </template>
                        <template #cell(prize)="data">
                            <div style ="display: flex; justify-content: flex-start; align-items: center;">
                                <img src= "@/assets/images/crypto-icon/usdt.svg" style="width: 21px; height: 21px; z-index: 5;"/>
                                <img src= "@/assets/images/crypto-icon/bfg.svg" style="width: 21px; height: 21px; margin-left: -5px;"/>
                                <span class = "ms-2" style="color: #fff;">${{data.item.prize}}</span>
                            </div>
                        </template>
                    </b-table>
                    <HomeLobbyStatisticsTable v-else :tableData = "tableData"/>

                </div>
                <b-pagination v-if = "gameType == 1 && totalCount/perPage > 1"
                    v-model = "currentPage"
                    :total-rows="totalCount"
                    :per-page="perPage"
                    first-number
                    last-number
                    class="mt-4 container-class">
                </b-pagination>
            </div>
        </div>
    </div>
</template>
  
<script>
    import HomeLobbyStatisticsSlider from './HomeLobbyStatisticsSlider.vue'

    import HomeLobbyStatisticsTable from './HomeLobbyStatisticsTable.vue'

    

    export default {
        name: "HomeLobbyStatistics",
        components: {HomeLobbyStatisticsSlider, HomeLobbyStatisticsTable},
        data() {
            return {
                perPageDrop: false,
                gameType: 1,
                
                
                totalCount: 0,
                currentPage: 1,
                perPage: 10,
                perPages: [10,20,50],
                fields: [
                    { key: 'index', label: 'Place'},
                    { key: 'name', label: 'Player' },
                    'wager',
                    'prize',
                ],
                tableData: [],
            };
        },
        created(){
            // this.getInBattleList()
            this.getBattleHistory()
        },
        methods: {

            async getBattleHistory(){
                let data = {};
                data.gameType = this.gameType
                data.page = this.currentPage
                data.perPage = this.perPage
                const res = await this.$api.auth.getBattleHistory(data);
                this.tableData = res.list
                this.totalCount = res.totalCount
                this.currentPage = res.currentPage
            },
            setGameType(index){
                this.gameType = index
                this.currentPage = 1
                this.totalCount = 0
                this.getBattleHistory()
            },
            setPerPage(m){
                this.totalCount = 0
                this.currentPage = 1
                this.perPage = m
                this.perPageDrop = false
                this.getBattleHistory()
            }
        }
    };
</script>
<style lang="scss" scoped> 
    
    .active-home {
        background-color: #2283f6;
        color : #fff!important;
        .badge {
            color: #2283f6!important;
            background-color: #fff!important;
        }
    }
    .statistics{
        margin-top: 48px;
        .statistics__head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-height: 30px;
            // position: relative;
            z-index: 2;
            margin-bottom: 26px;
            .statistics-tabs {
                display: flex;
                align-items: center;
                overflow: inherit;
                .btn-tab{
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    margin: 0;
                    font-weight: 600;
                    font-size: 16px;
                    white-space: nowrap;
                    text-transform: capitalize;
                    text-decoration: none;
                    color: #93acd3;
                    transition: color .1s ease-in-out;
                    &:hover {
                        color : #fff;
                    }
                    span {
                        font-size: 14px;
                    }
                }
                .badge {
                    font-family: Numbers,Montserrat;
                    position: relative;
                    // display: block;
                    justify-content: center;
                    display: flex;
                    align-items: center;
                    // line-height: 1.2;
                    font-weight: 600;
                    font-size: 10px;
                    color: #fff;
                    background-color: #2283f6;
                    border-radius: 10px;
                    padding: 3px 9px;
                    margin-left: 0.5em;
                    transition: color .1s ease-in-out,background-color .1s ease-in-out;
                }
            }
            .buttons {
                white-space: nowrap;
                display: flex;
                align-items: center;
                float: right;
                @media (max-width: 768px) {
                    display: none;
                }
            }
        }
        .statistics__body{
            position: relative;
            min-height: 200px;
            .battles {
                
                .battles__winners {
                    position: relative;
                    overflow-x: auto;
                    // scrollbar-color: #2a3546 rgba(13,19,28,.8);
                    // scrollbar-width: thin;
                    overflow-y: auto;
                    
                }
            }
        }
    }

</style>