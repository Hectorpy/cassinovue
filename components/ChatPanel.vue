<template>
    <div v-if = "$store.state.isRightPanelToggled" class="chat-container chat-container--opened">
        <div class="new-chat">
            <span class="tint"></span>
            <div class="new-chat__header">
                <div class="users-online__block">
                    <font-awesome-icon class="header__icon" icon ="fa-solid fa-user"/>
                    <span class="users-online__text">207</span>
                </div>
                <div :class="dropdownOpened ? 'dropdown-opened' : ''" class="room-select__component room-select dropdown" style="font-size: 12px;">
                    <div class="dropdown-trigger p-1" @click="dropdownOpened = !dropdownOpened">
                        <img class="mx-1" width="16" height="16" focusable="false" aria-hidden="true" :src="types[selectedType].img"/>
                        <span class="text mx-1">{{types[selectedType].name}}</span>
                        <font-awesome-icon icon="fa-solid fa-angle-down" class="icon-arrow mx-1"/>
                    </div>
                    <div class="dropdown-inner" style="width: 100%; font-size: 12px;">
                        <div class="dropdown-content">
                            <div class="dropdown-menu-lg">
                                <ul id="cryptoMenu" class="dropdown-menu-inner" style="max-height: 200px">
                                    <li v-for="(m, index) in types" :key="index" :value="m" class="dropdown-menu-item">
                                        <button :class="index === selectedType ? 'dropdown-menu-link-selected' : ''" @click="selectType(index)" class="dropdown-menu-link">
                                        <span class="currency ">
                                            <img class="mx-1" width="16" height="16" focusable="false" aria-hidden="true" :src="m.img"/>
                                            <span class="provider__label">{{m.name}}</span>
                                        </span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="settings__block">
                    <div :class="settingDrop ? 'dropdown-opened' : ''" class="dropdown" style="font-size: 12px; min-width: 125px;">
                        <div class="p-1" @click="settingDrop = !settingDrop" style="display: flex; justify-content: end;">
                            <font-awesome-icon icon ="fa fa-cog"/>
                        </div>
                        <div class="dropdown-inner" style="width: 125%; font-size: 12px; z-index: 2550; margin-left: -35px;">
                            <div class="dropdown-content">
                                <div  class="dropdown-menu-lg">
                                    <!-- <div class="chat-settings"> -->
                                        <ul id="cryptoMenu" class="dropdown-menu-inner" style="max-height: 200px; ">
                                            <li><font-awesome-icon icon="fa-solid fa-gif"/> GIFs in chat</li>
                                            <li><font-awesome-icon icon="fa-solid fa-volume-high"/>Sounds</li>
                                            <li><font-awesome-icon icon="fa-sharp fa-solid fa-paper-plane"/>Ignore List</li>
                                        </ul>
                                        <!-- <div class = "toggle" style="justify-content: space-between;">
                                            <div class="toggle__label">
                                                <div class="toggle__icon-wrapper" style="color: currentcolor;">
                                                    <font-awesome-icon icon="fa-solid fa-gif"/>
                                                </div>
                                                <span class="toggle__title">GIFs in chat</span>
                                            </div>
                                        </div> -->
                                        
                                    <!-- </div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <button title="Chat rules" class="btn-rules">
                        <font-awesome-icon class="ms-1" icon ="fa fa-info-circle"/>
                    </button>
                </div>
            </div>
            <div class="new-chat__content">
                <div class="pinned-block">
                    <div class="pinned-message">
                        <div class="pinned-message__header">
                            <span class="pinned-message__title">Pinned message</span>
                            <div class="pinned-message__buttons">
                                <button class="pinned-message__expand-button">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 4.5L6 7.5L9 4.5" stroke="#55657E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <p class="pinned-message__content userGuest">🤑GIVEAWAY for $170 in BFG. 
                            Fill the Oktoberfest Mug with Likes &amp; Retweets
                            👉 <a class="user-tag__button" target="_blank" href="https://twitter.com/betfury_gaming/status/1572900850887950336">Join on TWITTER</a> 👈 
                        </p>
                    </div>
                </div>
                <div class="message__list with-pinned">
                    <div id="scrollTriggerTop" class="scroll-trigger"></div>
                    <div class="message" id="632c8c5584787061f1ac62c3" index="0">
                        <div class="message__container">
                            <div class="new-chat__avatar" size="chat">
                                <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="progress">
                                    <path d="M 97.24186566265863 54.94531381322933 A 47.5 47.5 0 0 0 50 2.5" fill="none" stroke="#1BB83D" stroke-width="5"></path>
                                </svg>
                                <div class="user avatar user--clickable">
                                    <div class="user__avatar" style="width: 33px; height: 33px;">
                                        <div class="user__inner">
                                            <picture>
                                                <source srcset="/_nuxt/img/sprite-4.e90ec82.avif" type="image/avif">
                                                <source srcset="/_nuxt/img/sprite-4.6eaccb5.webp" type="image/webp">
                                                <img height="33" width="792" alt="" style="transform: translateX(-297px);">
                                            </picture>
                                        </div>
                                    </div>
                                </div>
                                <div class="level">
                                    <span>4</span>
                                </div>
                            </div>
                            <div class="msg-content">
                                <div class="msg-content__header">
                                    <div class="msg-content__header-left">
                                        <span class="msg-content__user-name">Flamme01</span>
                                    </div>
                                    <div class="msg-content__header-right msg-actions">
                                        <button type="button" class="msg-action msg-action--tips">
                                            <font-awesome-icon icon = "fa-sharp fa-solid fa-download" />
                                        </button>
                                        <button type="button" class="msg-action msg-action__reply">
                                            <font-awesome-icon icon="fa-sharp fa-solid fa-share" />
                                        </button>
                                    </div>
                                </div>
                                <p>👍 👍 👍 </p>
                            </div>
                            <div class="like-block">
                                <button class="like-block__btn">
                                    <font-awesome-icon icon = "fa-solid fa-heart" />
                                </button>
                                <span class="like-block__count">1</span>
                            </div>
                        </div>
                    </div>
                    <div class="message" id="632c8c5584787061f1ac62c3" index="0">
                        <div class="message__container">
                            <div class="new-chat__avatar" size="chat">
                                <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="progress">
                                    <path d="M 97.24186566265863 54.94531381322933 A 47.5 47.5 0 0 0 50 2.5" fill="none" stroke="#1BB83D" stroke-width="5"></path>
                                </svg>
                                <div class="user avatar user--clickable">
                                    <div class="user__avatar" style="width: 33px; height: 33px;">
                                        <div class="user__inner">
                                            <picture>
                                                <source srcset="/_nuxt/img/sprite-4.e90ec82.avif" type="image/avif">
                                                <source srcset="/_nuxt/img/sprite-4.6eaccb5.webp" type="image/webp">
                                                <img height="33" width="792" alt="" style="transform: translateX(-297px);">
                                            </picture>
                                        </div>
                                    </div>
                                </div>
                                <div class="level">
                                    <span>4</span>
                                </div>
                            </div>
                            <div class="msg-content">
                                <div class="msg-content__header">
                                    <div class="msg-content__header-left">
                                        <span class="msg-content__user-name">Flamme01</span>
                                    </div>
                                    <div class="msg-content__header-right msg-actions">
                                        <button type="button" class="msg-action msg-action--tips">
                                            <svg width="16" height="16" focusable="false" aria-hidden="true" class="">
                                                <use xlink:href="/_nuxt/img/svg-sprite.9307dce.svg#icon-tips" class="svg-use"></use>
                                            </svg>
                                        </button>
                                        <button type="button" class="msg-action msg-action__reply">
                                            <svg width="16" height="16" focusable="false" aria-hidden="true" class="">
                                                <use xlink:href="/_nuxt/img/svg-sprite.9307dce.svg#icon-chat-reply" class="svg-use"></use>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div class="msg-content__reply-block">
                                    <div class="msg-content__body">
                                        <span>Sweet</span>
                                        <p>Hi</p>
                                    </div>
                                </div>
                                <p>👍 👍 👍 </p>
                            </div>
                            <div class="like-block">
                                <button class="like-block__btn">
                                    <font-awesome-icon icon = "fa-solid fa-heart" />
                                </button>
                                <span class="like-block__count">1</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="new-chat__footer with-shadow">
                <div class="user-input">
                    <div class="textarea-wrapper logged">
                        <div class="textarea__left">
                            <font-awesome-icon icon="fa-sharp fa-solid fa-ban" />
                        </div>
                        <div class="scroll-wrapper">
                            <textarea id="message-textarea" rows="1" disabled="disabled" tabindex="-1" spellcheck="false" 
                                placeholder="Chat is available from Rank 2" maxlength="160" class="textarea --not-allowed" style="height: 22px;"></textarea>
                        </div>
                        <div class="textarea__right">
                            <div class="textarea__actions">
                                <button disabled="disabled" class="send__button">
                                    <font-awesome-icon icon="fa-sharp fa-solid fa-paper-plane" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'ChatPanel',

    data() {
      return {
        settingDrop: false,
        dropdownOpened: false,
        selectedType: 0,
        types: [
            {name: 'Global', img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAxlBMVEVMaXGHp3gxZsssU7gmQaJshZc4XcAmMmw2PmIzMzdPaXaAgIApNG0nMGg0QnlgcVNKRxRuaRpNcaWOm2EpSKkvOXm3s0wyX7kwOEZDQBNUYUJjiMpagr0tYssyZ8wnTrs6fNM2dM/3/9EsW8YlNX4nO4x2gnO/v1pfncaDwMeVyJ40ZsM1SYusqkuir2SMiUWHopabynecn1FBh9GmznTB4MbX433w/76pzcrl+ps7V57BsUdVZYdcYVSMkySZqzup46VUjbZQvBorAAAAHnRSTlMA/fFX/hEo/B1D+QJcxDMw8/j+T8dMvPv+sqk+qq/HbGrFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAArklEQVQYlW2P1xKCQBAEDzw4gkgwpyPnnBSz/v9PWYBSPrhv3VWzOwvA/6FomvrB7Y5UOG4jfnlE6i+CeNxltmea1LwgqIgilXqz18um9r3MTeV1t4/UG8M4ng5ucZOYNoG1uhOJY68mAAAx1D3ff+Z5fLVRKygCa1oZVIkDLdRGwCLEGGduzEVI6K5Ml6ZpKhcnstD8U0xVVfUMLTQeqs4gtJEwMAA8w7IM///xNwkdENDJcKDCAAAAAElFTkSuQmCC'},
            {name: 'Crypto', img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAxlBMVEVMaXGHp3gxZsssU7gmQaJshZc4XcAmMmw2PmIzMzdPaXaAgIApNG0nMGg0QnlgcVNKRxRuaRpNcaWOm2EpSKkvOXm3s0wyX7kwOEZDQBNUYUJjiMpagr0tYssyZ8wnTrs6fNM2dM/3/9EsW8YlNX4nO4x2gnO/v1pfncaDwMeVyJ40ZsM1SYusqkuir2SMiUWHopabynecn1FBh9GmznTB4MbX433w/76pzcrl+ps7V57BsUdVZYdcYVSMkySZqzup46VUjbZQvBorAAAAHnRSTlMA/fFX/hEo/B1D+QJcxDMw8/j+T8dMvPv+sqk+qq/HbGrFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAArklEQVQYlW2P1xKCQBAEDzw4gkgwpyPnnBSz/v9PWYBSPrhv3VWzOwvA/6FomvrB7Y5UOG4jfnlE6i+CeNxltmea1LwgqIgilXqz18um9r3MTeV1t4/UG8M4ng5ucZOYNoG1uhOJY68mAAAx1D3ff+Z5fLVRKygCa1oZVIkDLdRGwCLEGGduzEVI6K5Ml6ZpKhcnstD8U0xVVfUMLTQeqs4gtJEwMAA8w7IM///xNwkdENDJcKDCAAAAAElFTkSuQmCC'},
            {name: 'Global', img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAxlBMVEVMaXGHp3gxZsssU7gmQaJshZc4XcAmMmw2PmIzMzdPaXaAgIApNG0nMGg0QnlgcVNKRxRuaRpNcaWOm2EpSKkvOXm3s0wyX7kwOEZDQBNUYUJjiMpagr0tYssyZ8wnTrs6fNM2dM/3/9EsW8YlNX4nO4x2gnO/v1pfncaDwMeVyJ40ZsM1SYusqkuir2SMiUWHopabynecn1FBh9GmznTB4MbX433w/76pzcrl+ps7V57BsUdVZYdcYVSMkySZqzup46VUjbZQvBorAAAAHnRSTlMA/fFX/hEo/B1D+QJcxDMw8/j+T8dMvPv+sqk+qq/HbGrFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAArklEQVQYlW2P1xKCQBAEDzw4gkgwpyPnnBSz/v9PWYBSPrhv3VWzOwvA/6FomvrB7Y5UOG4jfnlE6i+CeNxltmea1LwgqIgilXqz18um9r3MTeV1t4/UG8M4ng5ucZOYNoG1uhOJY68mAAAx1D3ff+Z5fLVRKygCa1oZVIkDLdRGwCLEGGduzEVI6K5Ml6ZpKhcnstD8U0xVVfUMLTQeqs4gtJEwMAA8w7IM///xNwkdENDJcKDCAAAAAElFTkSuQmCC'},

        ] 
      };
    },
    methods : {
        selectType(index){
            this.selectedType = index;
            this.dropdownOpened = false;
        }
    }
  }
</script>
<style lang="scss" scoped>
    // user info avatar section for betfury
    .chat-settings {
        background-color: #263041;
        box-shadow: 2px 2px 20px 2px 2px 20px rgba(0,0,0,.3);
        border-radius: 10px;
        padding: 12px;
        min-width: 216px;
        display: flex;
        flex-direction: column;
        grid-gap: 12px;
        gap: 12px;
        .toggle {
            background-color: unset;
            display: flex;
            align-items: center;
            padding: 0;
            border: none;
            width: 100%;
            color: #93acd3;
            cursor: pointer;
            transition: color .1s ease-in-out;
            .toggle__label {
                letter-spacing: -.02em;
                font-weight: 600;
                line-height: 20px;
                font-size: 12px;
                display: flex;
                grid-gap: 8px;
                gap: 8px;
                .toggle__title {
                    color: #fff;
                }
            }
        }
    }
    .user--clickable {
        cursor: pointer;
    }
    .user {
        display: flex;
        align-items: center;
        .user__avatar {
            position: relative;
            flex-shrink: 0;
            .user__inner {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                overflow: hidden;
                border-radius: 50%;
                img {
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    pointer-events: none;
                    display: block;
                    width: auto;
                    height: 100%;
                    max-width: none;
                }
            }
        }
    }
    
    .avatar {
        top: 50%;
        transform: translate(-50%,-50%);
        position: absolute;
        left: 50%;
    }
    

    


    .with-shadow {
        box-shadow: 0 -8px 32px #111923;
    }
    .tint {
        width: 100%;
        height: 100%;
        display: block;
        background-color: transparent;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
        transition: all .4s ease-in-out;
        z-index: 4;
    }
    .room-select__component {
        position: relative;
        .room-select__button {
            background-color: #2a3546;
            padding: 4px 8px;
            min-width: 100px;
            height: 28px;
            display: flex;
            align-items: center;
            border-radius: 8px;
            cursor: pointer;
        }
    }
    .chat-container--opened {
    z-index: 103;
    right: 0!important;}
    .chat-container {
        padding-top: 64px;
        position: fixed;
        z-index: 1;
        top: 0;
        bottom: 0;
        width: 325px;
        background-color: #111923;
        // right: -325px;
        transition: right .4s ease-in-out;
        .new-chat {
            background-color: #111923;
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            position: relative;
            .new-chat__header {
                display: flex;
                align-items: center;
                padding: 8px;
                background-color: #202a39;
                .users-online__block {
                    display: flex;
                    align-items: center;
                    min-width: 55px;
                    .header__icon {
                        color: #55657e;
                    }
                    .users-online__text {
                        margin: 0 8px;
                        font-size: 9px;
                        color: #93acd3;
                        cursor: default;
                    }
                }
                .room-select {
                    margin-right : auto;
                }
                .settings__block {
                    display: flex;
                    align-items: center;
                    margin-left: auto;
                    .btn-rules{
                        padding: 4px;
                    }
                }
            }
            .new-chat__content {
                position: relative;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                overflow: hidden;
                &::-webkit-scrollbar {
                display: none;
            }
                .pinned-block {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    width: 100%;
                    z-index: 1;
                    background-color: #1c2532;
                    filter: drop-shadow(0 8px 32px #111923);
                    .pinned-message {
                        width: 100%;
                        padding: 8px 8px 8px 18px;
                        transition: all .4s ease-in-out;
                        cursor: pointer;
                        position: relative;
                        .pinned-message__header {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            .pinned-message__title {
                                font-weight: 600;
                                font-size: 12px;
                                color: #fff;
                            }
                            .pinned-message__buttons {
                                display: flex;
                                align-items: center;
                                .pinned-message__buttons button {
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                }
                            }
                        }
                        .pinned-message__content {
                            margin: 0;
                            color: #93acd3;
                            font-size: 11px;
                            word-break: break-word;
                            padding-right: 15px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            // overflow-x: hidden;
                            white-space: nowrap;
                        }
                    }
                }
                .with-pinned {
                    height: calc(100% - 50px);
                    margin-top: 50px;
                }
                .message__list {
                    height: 100%;
                    overflow-y: scroll;
                    -ms-scroll-chaining: none;
                    overscroll-behavior: contain;
                    &::-webkit-scrollbar {
                        width: 4px;
                        height: 4px;
                    }

                    &::-webkit-scrollbar,
                    &::-webkit-scrollbar-track {
                        background-color: rgba(13, 19, 28, 0.8);
                        border-radius: 2px;
                    }

                    &::-webkit-scrollbar-thumb {
                        border-radius: 2px;
                        background-color: #2a3546;
                    }
                    .message {
                        -webkit-touch-callout: none!important;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                        user-select: none;
                        transition: background-color .4s ease-in-out;
                        transition: background-color .1s ease-in-out;
                        .message__container {
                            display: flex;
                            align-items: center;
                            padding: 4px 8px;
                            width: 100%;
                            transition: background-color .1s ease-in-out;
                            .new-chat__avatar {
                                margin-right: 6px;
                                min-width: 40px;
                                height: 48px;
                                position: relative;
                                margin-top: auto;
                                .level {
                                        position: absolute;
                                        left: 50%;
                                        bottom: -3px;
                                        transform: translateX(-50%);
                                        background-color: #2283f6;
                                        font-size: 8px;
                                        line-height: 10px;
                                        font-weight: 700;
                                        color: #fff;
                                        border-radius: 7px;
                                        border: 2px solid #111923;
                                        padding-left: 4px;
                                        padding-right: 4px;
                                        height: 14px;
                                        text-align: center;
                                        vertical-align: center;
                                }
                                .progress {
                                    width: 100%;
                                    height: 100%;
                                    position: absolute;
                                    display: block;
                                }
                            }
                            .msg-content {
                                padding: 8px 12px;
                                border-radius: 12px;
                                background-color: #1c2532;
                                width: 100%;
                                .msg-content__header {
                                    display: flex;
                                    align-items: center;
                                    width: 100%;
                                    color: #fff;
                                    margin-bottom: 2px;
                                    justify-content: space-between;
                                    // margin-bottom: 4px;
                                    .msg-content__header-left {
                                        display: flex;
                                        align-items: center;
                                        grid-gap: 5px;
                                        gap: 5px;
                                        .msg-content__user-name {
                                            font-weight: 600;
                                            font-size: 12px;
                                            line-height: 20px;
                                        }
                                    }
                                    .msg-content__header-right {
                                        display: flex;
                                        grid-gap: 4px;
                                        gap: 4px;
                                        margin-right: 2px;
                                        justify-content: flex-end;
                                        color: #55657e;
                                        .msg-action {
                                            padding: 0;
                                            transition: color .1s ease-in-out;
                                        }
                                    }
                                }
                                .msg-content__reply-block{
                                    position: relative;
                                    padding-left: 8px;
                                    display: flex;
                                    grid-gap: 6px;
                                    gap: 6px;
                                    margin-bottom: 8px;
                                    margin-top: 8px;
                                    cursor: pointer;
                                    border-left: 2px solid #2a3546;
                                }
                            }
                            .like-block {
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                margin-left: 8px;
                                margin-right: 0;
                                .like-block__btn {
                                    padding: 0;
                                }
                                .like-block__count{
                                    transition: color .15s linear;
                                    text-align: center;
                                    font-size: 9px;
                                    color: #55657e;
                                    font-weight: 600;
                                    cursor: default;
                                }
                            }
                        }
                    }
                }
            }
            .new-chat__footer{
                background-color: #1c2532;
                display: flex;
                flex-direction: column;
                z-index: 4;
                .user-input {
                    padding: 16px;
                    background-color: #1c2532;
                    box-shadow: 0 0 20px rgb(0 0 0 / 30%);
                    .textarea-wrapper {
                        position: relative;
                        display: flex;
                        align-items: center;
                        width: 100%;
                        .textarea__left {
                            color: #ffb636;
                            margin: 10px 0 10px 16px;
                        }
                        .scroll-wrapper {
                            direction: rtl;
                            margin: 10px 0 8px 6px;
                            overflow-y: auto;
                            max-height: 64px;
                            width: 100%;
                            background-color: #161f2c;
                            border-radius: 12px;
                            color: #93acd3;
                            display: flex;
                            .textarea {
                                direction: ltr;
                                resize: none;
                                border: none;
                                outline: none;
                                line-height: 16px;
                                font-size: 11px;
                                height: 22px;
                                width: calc(100% - 6px);
                                background: none;
                            }
                        }
                        .textarea__right {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-self: flex-end;
                            margin: 6px 8px;
                            .textarea__actions {
                                display: flex;
                                align-items: center;
                                .send__button {
                                    margin-left: 4px;
                                    margin-right: 0;
                                    width: 32px;
                                    height: 32px;
                                    background-color: #2283f6;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    border-radius: 8px;
                                    color: #fff;
                                    &:disabled {
                                        background-color: #202a39;
                                        color: #3c485c;
                                        cursor: not-allowed;
                                    }
                                }
                            }
                        }
                    }
                    .logged {
                        background-color: #161f2c;
                        border-radius: 12px;
                    }
                }
                
            }
        }
    }
</style>