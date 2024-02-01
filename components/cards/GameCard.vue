<template>
    <a aria-label="link" title="Dice" class="game-preview" @mouseleave="hoverStatus = false">
        <div class="game-preview__inner">
            <div class="game-preview__shield game-preview__shield_top" v-if = "data.subType == 'top'"></div>
            <div class="game-preview__shield game-preview__shield_new" v-if = "data.subType == 'new'"></div>
            <div class="game-preview__shield game-preview__shield_hot" v-if = "data.subType == 'hot'"></div>
            <div class="game-preview__battle" v-if = "data.subType == 'battle'"></div>
            <div class="game-preview__image" @mouseover="hoverStatus = true">
                <figure style="background-color: transparent;">
                    <picture>
                        <img :src="require('@/assets/images/games/games/' + data.img)" draggable="false"
                            class="lazy-picture__image" style="border-radius: 0px;"
                        />
                    </picture>
                </figure>
            </div>
            <div class="game-preview__jackpot" v-if = "data.jackpot">
                <span>{{data.jackpot}}BTC</span>
            </div>
        </div>
        <div class="game-preview__hover" v-if ="hoverStatus">
            <span class="game-preview__name">{{data.name}}</span>
            <div class="game-preview__btn-play">
                <font-awesome-icon icon="fa-solid fa-play"/>
            </div>
            <div>
                <span class="game-preview__provider">{{data.title}}</span>
            </div>
        </div>
    </a>
</template>
<script>
  export default {
    name: "GameCard",
    props: {
      data: Object,
    },
    data() {
      return {
        hoverStatus: false,
      };
    },
  };
</script>
<style lang="scss" scoped>
    .game-preview{
    position: relative;
    border-radius: 14px;
    overflow: hidden;
    cursor: pointer;
    background-color: #202a39;
    display: block;
    // -webkit-transform: translateZ(0);
    // -webkit-perspective: 1000;
    .game-preview__inner {
        position: relative;
        overflow: hidden;
        padding-top: 133.34%;
        .battle {
        right: 13px;
        -webkit-transform: translateZ(0);
        // -webkit-perspective: 1000;
        transform: translateZ(1px);
        // background-image: url(/_nuxt/img/battle.40284f2.png);
        }
        .game-preview__battle{
            right: 13px;
            // -webkit-transform: translateZ(0);
            // -webkit-perspective: 1000;
            transform: translateZ(1px);
            background-image: url('@/assets/images/games/battle.png');
            position: absolute;
            top: 0;
            z-index: 1;
            width: 24px;
            height: 28px;
            background-size: 24px 28px;
            background-position: 50%;
            background-repeat: no-repeat;
            filter: drop-shadow(1px 2px 5px rgba(17,17,17,.25));
        }
        .game-preview__image{
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            transition: transform .1s ease-in-out;
            .lazy-picture__image{
                width: 100%;
                height: 100%;
            }
        }
        .game-preview__jackpot{
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: 1;
            width: 76px;
            height: 23px;
            padding-left: 8px;
            font-style: italic;
            white-space: nowrap;
            background-image: url('@/assets/images/game-img/jackpot.png');
            background-size: 76px 23px;
            background-position: 50%;
            background-repeat: no-repeat;
            -webkit-transform: translateZ(0);
            // -webkit-perspective: 1000;
            transform: translateZ(1px);
            span {
                font-size: 10px;
            }
        }
        .game-preview__shield{
            position: absolute;
            left: 0;
            top: 0;
            z-index: 1;
            width: 95px;
            height: 23px;
            background-size: 95px 23px;
            background-position: 50%;
            background-repeat: no-repeat;
            -webkit-transform: translateZ(0);
            // -webkit-perspective: 1000;
            transform: translateZ(1px);
        }
        .game-preview__shield_top {
            background-image: url('@/assets/images/game-img/top.png');
        }
        .game-preview__shield_hot {
            background-image: url('@/assets/images/game-img/hot.png');
        }
        .game-preview__shield_new {
            background-image: url('@/assets/images/game-img/new.png');
        }
    }
    .game-preview__hover {
        background-color: rgba(27,34,51,.8);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        opacity: 1;
        // opacity: 0;
        z-index: 1;
        padding: 19px 10px 13px;
        transition: opacity .1s ease-in-out;
        -webkit-transform: translateZ(0);
        // -webkit-perspective: 1000;
        transform: translateZ(1px);
        .btn-star{
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 0;
            border: none;
            background-color: transparent;
        }
        .game-preview__name {
            opacity: 1;
            transform: scale(.9);
            color: #fff;
            font-weight: 600;
            letter-spacing: -.02em;
            text-align: center;
            max-width: 70%;
            display: -webkit-box;
            display: block;
            font-size: 14px;
            height: 36.4px;
            line-height: 1.3;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            transition: opacity .1s ease-in-out,transform .1s ease-in-out;
        }
        .game-preview__btn-play{
            // width: calc(40% + 20px);
            // min-width: 42px;
            color: #fff;
            width: 56px;
            height: 56px;
            background-color: #ed1d49;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
        }
        .game-preview__provider{
            text-transform: capitalize;
            font-size: 11px;
            text-align: center;
            color: #93acd3;
        }
    }
    }
</style>