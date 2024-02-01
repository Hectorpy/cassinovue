<template>
    <b-table :items="tableData" :fields="fields" class = "mt-3 table-battles" tbody-tr-class="rowClass" style="color: #2a3546;">
        <template #cell(name)="data">
            <div class="td-name">
                <font-awesome-icon icon="fa-solid fa-dice"/>
                <label class="ms-2">{{data.item.gameName}}</label>
            </div>
        </template>
        <template #cell(time)="data">
            <div class="td-time" style="min-width: 65px;">
                <label class="ms-2">{{data.item.time}}</label>
            </div>
        </template>
        <template #cell(player)="data">
            <div class="tr-col__center" style="min-width: 75px;">
                <img src= "@/assets/images/avatar/avatar1.avif" style="width: 25px; height: 25px;"/>
                <span style="right: 8px; top: 6px" class="fury__info__btn">{{data.item.count}}</span>
                <b v-if="data.item.username" class = "ms-2">{{data.item.username}}</b>
                <b v-else class = "ms-2" style="color: #fff;">User{{data.item.userId}}</b>
            </div>
        </template>
        <template #cell(betAmount)="data">
            <div v-if = "data.item.betAmount" style ="display: flex; justify-content: flex-start; align-items: center; min-width: 75px;">
                <img src= "@/assets/images/crypto-icon/usdt.svg" style="width: 21px; height: 21px;"/>
                <span class = "ms-2" style="color: #fff;">{{data.item.betAmount.toString().split(".")[0]}}</span>
                <span style="color: #93acd3;">.{{data.item.betAmount.toString().split(".")[1]}}</span>
            </div>
        </template>
        <template #cell(multiplier)="data">
            <div class="td-multiplier">
                <label class="win px-1">x{{data.item.multiplier}}</label>
            </div>
        </template>
        <template #cell(payout)="data">
            <div v-if = "data.item.payout" style ="display: flex; justify-content: flex-start; align-items: center;">
                <img src= "@/assets/images/crypto-icon/usdt.svg" style="width: 21px; height: 21px;"/>
                <span class = "ms-2" style="color: #1bb83d;">{{data.item.payout.toString().split(".")[0]}}</span>
                <span style="color: #93acd3;">.{{data.item.payout.toString().split(".")[1]}}</span>
            </div>
        </template>
    </b-table>
</template>
<script>
  export default {
    name: "HomeLobbyStatisticsTable_2",
    props: {
      tableData: Array,
      type: Number
    },
    data() {
      return {
        fields: [
            'name',
            'time',
            'player',
            {key:'betAmount', label: 'Bet Amount'},
            'multiplier',
            'payout'
        ],
      };
    },
  };
</script>
<style lang="scss">
    .place-1 {
        background-color: coral;
    }
    .place-2 {
        background-color: #161f2c;
    }
    .place-3 {
        background-color: chocolate;
    }
    .td-name {
        max-width: 115px;
        display: inline-block;
        color: #93acd3;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow-x: hidden;
    }
    .td-time {
        display: inline-block;
        color: #93acd3;
        white-space: nowrap;
        max-width: 50px;
    }
    .td-multiplier {
        display: inline-block;
        font-weight: 600;
        font-size: 12px;
        padding: 2px 8px;
        border-radius: 8px;
        white-space: nowrap;
        .win {
            border-radius: 8px;
            color: #1bb83d;
            background-color: rgba(27,184,61,.15);
        }
    }
</style>