<template>
    <div class="favorite-games">
        <div class="favorite-games__wrap">
            <div class="favorite-games__preview" v-for="(f, i) in favorites" :key="i">
                <GameCard :data="f"/>
                <div class="favorite-games__wagered-label">{{f.type}}</div>
                <div class="currency__balance-block">
                    <div class="currency__balances">
                        <div class="balance">
                            ${{f.balance}}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import GameCard from '@/components/cards/GameCard.vue'

    export default {
        components: {GameCard},
        data() {
            return {
                favorites: [
                    {img : '3.jpeg', type: 'Slots', subType: 'hot', jackpot : 0.25, title : 'BetFury', name : 'Space Dice', type: 'Wagered', balance:29.631568},
                    {img : '3.jpeg', type: 'Slots', subType: 'hot', jackpot : 0.25, title : 'BetFury', name : 'Space Dice', type: 'Wagered', balance:29.631568},
                    {img : '3.jpeg', type: 'Slots', subType: 'hot', jackpot : 0.25, title : 'BetFury', name : 'Space Dice', type: 'Wagered', balance:29.631568},
                    {img : '3.jpeg', type: 'Slots', subType: 'hot', jackpot : 0.25, title : 'BetFury', name : 'Space Dice', type: 'Wagered', balance:29.631568},
                    {img : '3.jpeg', type: 'Slots', subType: 'hot', jackpot : 0.25, title : 'BetFury', name : 'Space Dice', type: 'Wagered', balance:29.631568},
                    {img : '3.jpeg', type: 'Slots', subType: 'hot', jackpot : 0.25, title : 'BetFury', name : 'Space Dice', type: 'Wagered', balance:29.631568},

                ]
            }
        }

    }
</script>
<style lang="scss" scoped>
    .favorite-games {
        margin-bottom: 18px;
        .favorite-games__wrap {
            background: #111923;
            border-radius: 14px;
            padding: 24px;
            grid-template-columns: repeat(6,1fr);
            display: grid;
            grid-gap: 10px;
            @media (max-width: 500px) {
                grid-template-columns: repeat(2,1fr);
            }
            .favorite-games__preview {
                .favorite-games__wagered-label {
                    font-weight: 600;
                    font-size: 11px;
                    line-height: 16px;
                    color: #55657e;
                    margin-bottom: 0;
                    padding-top: 8px;
                }
                .currency__balance-block {
                    display: flex;
                    align-items: center;
                    .currency__balances {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        .balance {
                            margin: auto 0;
                            font-family: Numbers,Montserrat;
                            text-overflow: ellipsis;
                            overflow-x: hidden;
                            white-space: nowrap;
                        }
                    }
                }
            }
        }
    }
</style>