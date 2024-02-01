<template>
    <div class="info">

        <div class="info__left">
            <div style = "position: relative">
                <Avatar :size = "124" :levelShow = "true"/>
            </div>
        </div>

        <div class="info__right">
            <p class="info__date">15 days on the platform</p>
            <div class="info__name-wrap">
                <p class="info__name">{{userData.username}}</p>
            </div>
            <div class="data-cards">
                <div class="card">
                    <p class="card-title">Chat activity</p>
                    <div  class="chat-activity">
                        <p class="chat-activity__status">1/5
                            <span class="chat-activity__status-title chat-activity__status-title--rank-1">
                                Junior
                            </span>
                        </p>
                        <div>
                            <div class="icon">
                                <svg width="22" height="22" focusable="false" aria-hidden="true" class="">
                                    <use xlink:href="/_nuxt/img/svg-sprite.9307dce.svg#icon-question" class="svg-use"></use>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <p class="card-title">Likes received</p>
                    <div  class="chat-activity">
                        <font-awesome-icon icon="fa-solid fa-heart" class="currency-icon"/>
                        <span>0</span>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    import Avatar from '@/components/views/Avatar.vue';
    export default {
      components: {Avatar},
      data() {
      return {
        isChecked: false,
        userData: {
            statistics: {}
        }
      };
    },
      created() {
        this.getUserProfileData()
    },
    methods: {
        async getUserProfileData() {
            let data = {}
            const res = await this.$api.auth.getUserProfileData(data)
            this.userData = res
        },
    }
}
</script>

<style lang="scss" scoped>
    .info {
        display: flex;
        align-items: flex-start;
        letter-spacing: -.02em;
        grid-gap: 30px;
        gap: 30px;
        @media (max-width: 576px) {
            flex-direction: column;
            grid-gap: 0;
            gap: 0;
            align-items: center;
            margin-bottom: 24px;
        }
        .info__left {
            display: flex;
            flex-direction: column;
            margin-top: 16px;
            .info__avatar{
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
                z-index: 1;
            }
        }
        .info__right {
            padding-right: 5px;
            width: 100%;
            .info__date {
                font-weight: 600;
                font-size: 11px;
                line-height: 16px;
                color: #93acd3;
                margin-bottom: 0;
                @media (max-width: 576px){
                    text-align: center;
                }
            }
            .info__name-wrap {
                display: flex;
                align-items: center;
                margin-bottom: 10px;
                @media (max-width: 576px){
                    justify-content: center;
                }
                .info__name {
                    font-weight: 700;
                    font-size: 32px;
                    line-height: 36px;
                    color: #fff;
                    text-align: center;
                    margin-bottom: 0;
                    max-width: 277px;
                    overflow-y: hidden;
                    text-overflow: ellipsis;
                    overflow-x: hidden;
                    white-space: nowrap;
                }
            }
            .data-cards {
                display: flex;
                grid-gap: 12px;
                gap: 12px;
                .chat-activity__status {
                    font-weight: 600;
                    font-size: 11px;
                    line-height: 16px;
                    color: #93acd3;
                    margin: 0;
                }
                .chat-activity__status-title--rank-1 {
                    background: #93acd3;
                }
                .chat-activity__status-title {
                    display: inline-block;
                    margin-left: 6px;
                    padding: 2px 8px;
                    border-radius: 16px;
                    color: #fff;
                }
            }
        }
    }
</style>