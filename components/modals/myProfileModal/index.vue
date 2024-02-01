<template>
    <div class="f-modals">
        <div class="f-modal" style="max-width: 530px; height:95vh;">
            <div class="f-modal__container bottom-shadow has-height">
                <button class="f-modal__btn-close" @click="$store.commit('closeModal')">
                    <font-awesome-icon icon="fa-solid fa-xmark" style="width: 24px; height:24px;"/>
                </button>
                <div class="default-tab">
                    <div class="tab-inner">

                        <div class="header">
                            <div class="header__title">
                                <label>User profile</label>
                                <div class="tips">
                                    <button disabled="disabled" type="button" class="button button_md button_blue button_center">
                                        <span class="button__inner">
                                            <span class="button__icon">
                                                <font-awesome-icon icon="fa-solid fa-lightbulb"/>
                                            </span>
                                            <span class="button__text">
                                                Leave a tip
                                            </span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="body">
                            <div class="body__inner has-scroll">
                                <div class="total-info">
                                    <Info/>
                                    <div class="divider"></div>
                                    <Summary/>
                                    <div class="divider"></div>
                                    <div class="favorite-games">
                                        <FavoriteGames/>
                                    </div>
                                    <div class="divider"></div>
                                        <BattleRewards/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

  import Info from './Info.vue';
  import Summary from './Summary.vue';
  import FavoriteGames from './FavoriteGames.vue';
  import BattleRewards from './BattleRewards.vue';


  export default {
    name: 'MyProfileModal',
    components: {Info, Summary, FavoriteGames, BattleRewards},
  }

</script>

<style lang ="scss">
    
    .tips {
        margin-left: auto;
        margin-right: 42px;
    }
    .total-info {
        margin-top: 16px;

    }
    .divider {
        border-bottom: 1px solid #202a39;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .card {
        padding: 9px 16px;
        background: #161f2c;
        border-radius: 10px;
        flex-grow: 1;
        text-align: center;
        .card-title {
            font-feature-settings: "tnum" on,"lnum" on;
            color: #55657e;
            letter-spacing: -.02em;
            margin-bottom: 5px;
            font-size: 12px;
            font-weight: 600;
            line-height: 16px;
        }
        .chat-activity {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        @media (max-width: 550px)
        {
            &:last-child{
                grid-column: 1/3;
            }
        }
    }

</style>