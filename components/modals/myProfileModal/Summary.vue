<template>
    <div class="summary">

        <div class="statistic">
            <div class="statistic__top">
                <label>Statistics</label>
                <label>Details</label>
            </div>
            <div class="statistic__bott">
                <div class="card">
                    <p class="card-title">Total Wagered</p>
                    <div  class="chat-activity">
                        <img src="@/assets/images/crypto-icon/usdt.svg" width="20" height="20" class="currency-icon"/>
                        <span style="color: rgb(255, 255, 255);">{{userData.gameStat.totalWager}}</span>
                    </div>
                </div>
                <div class="card">
                    <p class="card-title">Total Wins</p>
                    <div  class="chat-activity">
                        <span>{{userData.gameStat.totalWins}}</span>
                    </div>
                </div>
                <div class="card">
                    <p class="card-title">Total Bets</p>
                    <div  class="chat-activity">
                        <img src="@/assets/images/crypto-icon/usdt.svg" width="20" height="20" class="currency-icon"/>
                        <span style="color: rgb(255, 255, 255);">{{userData.gameStat.totalBets}}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="statistic">
            <div class="statistic__top">
                <label>Activity</label>
            </div>
            <div class="statistic__bott">
                <div class="card">
                    <p class="card-title">Total Tips</p>
                    <div  class="chat-activity">
                        <img src="@/assets/images/crypto-icon/usdt.svg" width="20" height="20" class="currency-icon"/>
                        <span style="color: rgb(255, 255, 255);">0.00000</span>
                    </div>
                </div>
                <div class="card">
                    <p class="card-title">Rains & Drops</p>
                    <div  class="chat-activity">
                        <img src="@/assets/images/crypto-icon/usdt.svg" width="20" height="20" class="currency-icon"/>
                        <span style="color: rgb(255, 255, 255);">0.00000</span>
                    </div>
                </div>
                <div class="card">
                    <p class="card-title">Messages in chat</p>
                    <div  class="chat-activity">
                        <span style="color: rgb(255, 255, 255);">0</span>
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
                userData: {
                    gameStat: {}
                }
            }
        },
        created() {
            this.getUserProfileData()
        },
        methods: {
            async getUserProfileData() {
                let data = {}
                const res = await this.$api.auth.getUserProfileData(data)
                this.userData = res.body
            },
        }
    }
</script>
<style lang="scss" scoped>
    .summary {
        display: flex;
        flex-direction: column;
        .statistic {
            .statistic__top {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 10px;

            }
            .statistic__bott {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-gap: 16px;
                gap: 16px;
                @media (max-width: 550px) {
                    grid-template-columns: 1fr 1fr;
                }
            }
        }
    }
</style>