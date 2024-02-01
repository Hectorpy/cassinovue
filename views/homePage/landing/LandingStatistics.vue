<template>
    <div class="statistics">
        <div class="statistic-text">
            <span class="statistic-text__count">12</span>
            <span class="statistic-text__label">Crypto <br>networks</span>
        </div>
        <div class="statistic-text">
            <span class="statistic-text__count">54</span>
            <span class="statistic-text__label">Crypto <br>currencies</span>
        </div>
        <div class="statistics__logos" >
            <div class="statistics-logo" v-for = "(c, i) in cryptoLogos" :key = "i">
                <div class="logotype">
                    <div class="logotype__inner">
                        <figure class="logotype__image" style="background-color:transparent;">
                            <picture>
                                <img draggable="false" :src="require('@/assets/images/landing/' + c.img)" alt="bitcoin_gray" width="200" height="100" class="lazy-picture__image" style="border-radius: 0px;">
                            </picture>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
        <div class="statistics__link">
            <button class="statistic-btn">Show all</button>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
        return {
            cryptoLogos: [
                {img: 'bitcoin_gray@1x.png'},
                {img: 'ethereum_gray@1x.png'},
                {img: 'binance_gray@1x.png'},
                {img: 'tron_gray@1x.png'},
                {img: 'tether_gray@1x.png'},
                {img: 'biswap_gray@1x.png'},
            ]
        };
    },
  }

</script>
<style lang="scss" scoped>

.logotype{
      position: relative;
      width: 91px;
      height: 46px;
  }
    .statistics{
        padding: 0 16px;
        margin-bottom: 36px;
        display: grid;
        grid-template-columns: auto auto 1fr auto;
        @media (max-width: 1000px) {
            padding: 0;
        }
        @media (max-width: 768px) {
            grid-template-columns: auto auto auto;
            margin-bottom: 20px;
        }
        .statistic-text{
            color: #55657e;
            display: flex;
            align-items: center;
            border-right: 1px solid #1c2532;
            padding-right: 20px;
            margin-right: 10px;
            align-self: center;
            @media (max-width: 1000px) {
                padding-right: 10px;
                margin-right: 10px;
                justify-self: center;
            }
            .statistic-text__count {
                font-weight: 700;
                font-size: 28px;
                margin-right: 8px;
                font-family: Numbers,Montserrat;
                line-height: 1;
            }
            .statistic-text__label {
                font-weight: 500;
                font-size: 12px;
                line-height: 1.2;
            }
            
        }
        .statistic-text:first-child {
            margin-right: 20px;
            @media (max-width: 1000px){
                justify-self: flex-start;
            }
        }
        .statistics__logos{
            justify-content: space-around;
            display: flex;
            align-items: center;
            @media (max-width: 768px) {
                grid-column: 1/4;
                grid-row: 2/3;
                flex-wrap: wrap;
                border-top: 1px solid #1c2532;
                margin-top: 16px;
                padding-top: 8px;
            }
            .statistics-logo {
                display: flex;
                align-items: center;
                justify-content: center;
                @media (max-width: 1000px) {
                    width: 25%;
                    &:nth-child(n+5) {
                        display: none;
                    }
                }
                @media (max-width: 768px) {
                    width: 33.3333%;
                    &:first-child, &:nth-child(4) {
                        justify-content: flex-start;
                    }
                    &:nth-child(n+5) {
                        display: flex;
                    }
                }
            }
        }
        .statistics__link{
            display: flex;
            align-items: center;
            justify-self: flex-end;
            .statistic-btn {
                color: #55657e;
                font-weight: 600;
                font-size: 14px;
                border-left: 1px solid #1c2532;
                padding-left: 20px;
                margin-left: 10px;
                white-space: nowrap;
                transition: color .1s ease-in-out;
                @media (max-width: 768px) {
                    border-left: none;
                    padding-left: 0;
                    margin-left: 0;
                }
            }
        }
    }
</style>