<template>
    <div class="notify">
        <div class="notify__inner">
            <div class="notify__header">
                <span class="datetime notify__date">{{data.date}}</span>
                <span v-if = "data.isNew" class="notify__chip">New</span>
            </div>
            <div class="notify__content">
                <p class="notify__title">{{data.title}}</p>
                <div class="notify__image-block">
                    <div class="notify__image-link">
                    <a class="link notify__image-link link_md">
                        <span class="link__text"></span>
                        <svg focusable="false" aria-hidden="true" class="link__icon">
                            <use xlink:href="/_nuxt/img/svg-sprite.9307dce.svg#icon-arrow-right-small" class="svg-use"></use>
                        </svg>
                    </a>
                    </div>
                    <picture class="notify__image">
                        <img :src="require('@/assets/images/notifications/' + data.img)" alt="" class="notify__image">
                    </picture>
                </div>
                <p class="notify__text" :class="showToggled ? '': 'notify__text--overflow' ">{{data.desc}}</p>
                <div class="notify__show-all" v-if = "!showToggled" @click="showToggled = !showToggled">Show all <font-awesome-icon icon="fa-solid fa-angle-down" class="icon-arrow"/>
                </div>
                <div class="notify__show-all" v-if = "showToggled" @click="showToggled = !showToggled">Hide <font-awesome-icon icon="fa-solid fa-angle-up" class="icon-arrow"/>
                </div>
            </div>
            <div class="notify__footer">
                <div>
                    <div>
                        <a class="link link_md">
                            <span class="link__text">See now</span>
                            <font-awesome-icon icon="fa-solid fa-chevron-right" class="ms-2"/>
                        </a>
                    </div>
                </div>
                <button class="notify__mark-btn">
                    <span class="mark-read mark-btn_text">Mark as read</span>
                    <svg width="16" height="16" focusable="false" aria-hidden="true" class="">
                        <use xlink:href="/_nuxt/img/svg-sprite.9307dce.svg#icon-checkmark-circle" class="svg-use"></use>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: "NotifyCard",
    props: {
      data: Object,
    },
    data() {
      return {
        showToggled: false,
      };
    },
  };
</script>
<style lang="scss" scoped>
    .notify {
        position: relative;
        border-radius: 8px;
        background-color: #1c2532;
        cursor: pointer;
        transition: background-color .1s ease-in-out,border-color .1s ease-in-out;
        &:not(:last-child){
            margin-bottom: 8px;
        }
        .notify__inner {
            min-height: 44px;
            display: flex;
            flex-direction: column;
            padding: 12px 12px 0;
            .notify__header {
                display: flex;
                justify-content: space-between;
                margin-bottom: 4px;
                .notify__date {
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 18px;
                    color: #55657e;
                }
                .notify__chip {
                    background-color: #1bb83d;
                    text-transform: uppercase;
                    font-weight: 700;
                    padding: 1px 7px;
                    font-size: 11px;
                    letter-spacing: .06em;
                    border-radius: 56px;
                    display: flex;
                    align-items: center;
                }
                .datetime {
                    white-space: nowrap;
                }
            }
            .notify__content {
                position: relative;
                flex-grow: 1;
                .notify__title {
                    font-weight: 600;
                    font-size: 16px;
                    margin-bottom: 8px;
                }
                .notify__image-block {
                    position: relative;
                    .notify__image-link {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                    }
                    .notify__image {
                        height: 100px;
                        width: 100%;
                        -o-object-fit: cover;
                        object-fit: cover;
                        margin-bottom: 8px;
                        border-radius: 8px;
                    }
                }
                .notify__text {
                    font-size: 12px;
                    color: #93acd3;
                    margin-bottom: 12px;
                    overflow: hidden;
                    transition: all .3s;
                }
                .notify__text--overflow {
                    max-height: 36px;
                    transition: all .3s;
                }
                .notify__show-all {
                    position: absolute;
                    bottom: 12px;
                    right: 0;
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 18px;
                    width: 115px;
                    text-align: right;
                    background: linear-gradient(270deg,#1c2532 68.52%,rgba(28,37,50,0));
                }
            }
            .notify__footer {
                display: flex;
                align-items: center;
                border-top: 1px solid #2a3546;
                background-color: #202a39;
                justify-content: space-between;
                border-bottom-left-radius: 8px;
                border-bottom-right-radius: 8px;
                margin: 0 -12px;
                padding: 10px 12px;
                .notify__mark-btn {
                    color: #55657e;
                    font-weight: 600;
                    letter-spacing: .02em;
                    font-size: 11px;
                    margin-left: auto;
                    display: flex;
                    align-items: center;
                    grid-gap: 4px;
                    gap: 4px;
                }
            }
        }
    }
</style>