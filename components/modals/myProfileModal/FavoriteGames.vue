<template>
    <div class="favorite-games">
        <div class="favorite-games__top-title">TOP Favorite Games</div>

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
                ]
            }
        }

    }
</script>
<style lang="scss" scoped>
    .favorite-games {
        .favorite-games__top-title {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            font-size: 16px;
        }
        .favorite-games__wrap {
            display: flex;
            margin-top: 9px;
            @media (max-width: 500px) {
                display: grid;
                grid-template-columns: repeat(2,1fr);
                justify-items: center;
            }
            .favorite-games__preview {
                width: 100%;
                max-width: 113px;
                margin-right: 10px;
                @media (max-width: 500px){
                    max-width: 145px;
                    width: 100%;
                    margin-bottom: 10px;
                    &:nth-child(2n) {
                     margin-right: 0;   
                    }
                }

                &:last-child {
                    margin-right: 0;
                }
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