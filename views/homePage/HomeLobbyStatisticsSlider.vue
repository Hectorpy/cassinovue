<template>
    <div class = "battles__head slider">
        <splide :options="battle_options" style="max-width: 100%;">
            <splide-slide v-for="(b, i) in battles" :key="i">
                <a :class="b.opened ? 'opened' : ''" class = 'battle' v-if = "b.img != null">
                <Progress class = "top-progress" :percentage="b.percentage" :number = "false"/>
                <img :src="require('@/assets/images/game-img/battles/' + b.img)" width="64" height="86" class="image" />
                <span class="battle__time" v-if="b.opened">Finished In <span >21:40:22</span></span>
                <span class="battle__time" v-else>Ended</span>
                <p class = "battle__name">{{b.title}}</p>
                <div class="battle__price">
                    <span class = "">${{b.price}}</span>
                    <span style="right: 8px;" class="fury__info__btn"><font-awesome-icon icon="fa-solid fa-info"/></span>
                </div>
                </a>
            </splide-slide>
        </splide>
    </div>
</template>
<script>
    import Progress from "@/components/views/Progress.vue";
    export default {
        components: {Progress},
        data() {
            return {
                battle_options : {
                    rewind : true,
                    perPage: 4,
                    gap    : '1rem',
                    arrows: false,
                    pagination: false,
                    breakpoints: {
                        800: {
                            perPage: 3
                        },
                        560: {
                            perPage: 2
                        },
                        420: {
                            perPage: 1
                        }
                    },
                },
                battles : new Array(8).fill({}),

            }
        },
        created(){
            this.getInBattleList()
        },
        methods: {
            async getInBattleList(){
                let data = {};
                const res = await this.$api.auth.getInBattleList(data);
                this.battles = res
            },
        }

    }
</script>
<style lang="scss" scoped>
    .opened {
        background: linear-gradient(180deg,#004392,#2283f6);
    }
    .battles__head {
        position: relative;
        .battle {
            cursor: pointer;
            overflow: hidden;
            position: relative;
            background-color: #1c2532;
            border-radius: 16px;
            padding: 12px 8px 8px;
            display: grid;
            grid-template-columns: 64px 1fr;
            grid-template-rows: auto 1fr auto;
            grid-column-gap: 8px;
            -moz-column-gap: 8px;
            column-gap: 8px;
            grid-row-gap: 8px;
            row-gap: 8px;
            min-height: 106px;
            text-decoration: none;
            
            .top-progress{
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                // -moz-appearance: none;
                // -webkit-appearance: none;
                border: none;
                display: block;
                overflow: hidden;
                padding: 0;
                width: 100%;
                // box-shadow: 0 2px 3px rgba(0, 0, 0, 0.25) inset;
            }
            .image {
                grid-column: 1/2;
                grid-row: 1/4;
                border-radius: 8px;
            }
            .battle__time{
                font-weight: 600;
                font-size: 10px;
                grid-column: 2/3;
                grid-row: 1/2;
                color: #55657e;
                white-space: nowrap;
            }
            .battle__name {
                font-weight: 600;
                font-size: 12px;
                grid-column: 2/3;
                grid-row: 2/3;
                margin: 0;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                color: #fff;
            }
            .battle__price {
                font-weight: 700;
                font-size: 15px;
                grid-column: 2/3;
                grid-row: 3/4;
                color: #2ddc4b;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }
    }
</style>