<template>
    <!-- <div  class="right-panel-container"> -->
        <div v-if = "$store.state.isRightPanelToggled" class="notifications-container">
            <div class="notifications__header">
                <p class="notifications__title">Notifications</p>
                <div class="notifications__right">
                    <div :class="viewDrop ? 'dropdown-opened' : ''" class="dropdown " style="font-size: 12px;">
                        <div class="dropdown-trigger " @click="viewDrop = !viewDrop">
                            <p class="px-2">{{dropViews[selectedView]}}</p>
                            <font-awesome-icon icon="fa-solid fa-angle-down" class="icon-arrow"/>
                        </div>
                        <div class="dropdown-inner" style="width: 100%;">
                            <div class="dropdown-content">
                            <div class="dropdown-menu-lg">
                                <ul class="dropdown-menu-inner" style="max-height: 200px">
                                    <li v-for="(v, index) in dropViews" :key="index" @click="selectView(index)" :class="selectedView == index ? 'dropdown-menu-link-selected' : ''" class="dropdown-menu-link">{{v}}</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                    <button title="Close panel">
                        <font-awesome-icon class="ms-1" icon ="fa fa-times" style="color: #fff;" @click="closePanel()"/>
                    </button>
                </div>
            </div>
            <div class="notifications-list">
                <div class="notifies">
                    <div class="binary-switcher">
                        <button :class="leftSelected? 'selected':'' " @click="leftSelection()">
                            <span>Platform</span>
                            <div class="option-counter px-1">{{unreadCount}}</div>
                        </button>
                        <button :class="leftSelected? '':'selected' " @click="rightSelection()">
                            <span>Personal</span>
                            <div class="option-counter px-1">{{personalCount}}</div>
                        </button>
                    </div>
                    <div class="notifies__body">
                        <div class="scroll-area">
                            <div class="no-data" v-if = "list.length < 1">
                                <img src="@/assets/images/notifications/no-data-image.faa010e.png" alt="" class="no-data__images">
                                <span> You don't have any platform notifications</span>
                            </div>
                            <NotifyCard v-else-if ="leftSelected" v-for = "(l, index) in list" :key = "index" :data = "l"/>
                            <PersonalCard v-else-if ="!leftSelected" v-for = "(l, j) in list" :key = "j" :data = "l"/>
                        </div>
                    </div>
                    <div class = "notifies__footer py-2" >
                        <p style="">Mark as read</p>
                    </div>
                </div>
            </div>

        </div>
    <!-- </div> -->
</template>
<script>
    import NotifyCard from '../components/cards/NotifyCard.vue'
    import PersonalCard from '../components/cards/PersonalCard.vue'
    export default {
        name: 'RightPanel',
        components: {NotifyCard, PersonalCard},

        data() {
        return {
            viewDrop: false,
            dropViews: ['View all', 'Unread'],
            selectedView: 0, // 0: view all, 1: unread
            leftSelected: true,
            list: [],
            unreadCount: 0,
            personalCount: 0,
        };
        },
        created(){
            this.getNotificationList();
        },
        methods : {
            rightSelection() {
                this.list = []
                this.leftSelected = false
                this.getPersonalList()
            },
            leftSelection() {
                this.list = []
                this.leftSelected = true
                this.getNotificationList()
            },
            async getNotificationList(){
                var data = {}
                data.type = this.selectedView
                const response = await this.$api.auth.getNotificationList(data);
                this.list = response.list
                this.unreadCount = response.unreadCount
                this.personalCount = response.personalCount
            },
            async getPersonalList(){
                var data = {}
                const response = await this.$api.auth.getPersonalList(data);
                this.list = response
            },
            selectView(index){
                this.selectedView = index;
                this.viewDrop = false;
                if (!this.leftSelected)
                return
                this.getNotificationList()
            },
            closePanel(){
                this.$store.commit("setRightPanelToggle");
            },
        }
    }
</script>
<style lang="scss" scoped>
    
    .switch-option {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .notifications-container {
        background-color: #111923;
        padding-top: 64px;
        position: fixed;
        z-index: 103;
        top: 0;
        bottom: 0;
        right: 0;
        width: 325px;
        @media (max-width: 1000px) {
            z-index: 100;
            padding-bottom: 60px;
        }
        @media (max-width: 768px) {
            width: 100%;
        }
        .notifications__header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px;
            background-color: #202a39;
            .notifications__title {
            margin: 0 0 0 4px;
            }
            .notifications__right {
                display: flex;
                justify-content: flex-end;
            }
        }
       .notifications-list {
            margin-left: 12px;
            margin-right: 12px;
            margin-top: 12px;
            height: 100%;
            .notifies {
                height: 100%;
                display: flex;
                flex-direction: column;
                .notifies__body {
                    flex: 1 1;
                    position: relative;
                    margin-right: -8px;
                    min-height: calc(100vh - 200px);
                    
                    .scroll-area{
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        width: 100%;
                        padding-right: 8px;
                        padding-bottom: 16px;
                        overflow-y: auto;
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
                        .no-data {
                            max-width: 165px;
                            margin: 0 auto;
                            text-align: center;
                            min-height: 200px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            flex-direction: column;
                            margin-bottom: 44px;
                            color: #55657e;
                            .no-data__images {
                                width: 165px;
                                height: 165px;
                                -webkit-mask-image: linear-gradient(180deg,#000 60%,transparent 90%);
                                mask-image: linear-gradient(180deg,#000 60%,transparent 90%);
                                -o-object-fit: contain;
                                object-fit: contain;
                            }
                        }
                    }
                }
                .notifies__footer {
                    @media (max-width: 1000px) {
                        bottom: 60px;
                    }
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;

                    display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding-right: 8px;
            color: #55657e;
            background-color: #1c2532;
            z-index: 300;
                }
            }
        }
        .notifications-footer {
            position: absolute;
            bottom:0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding-right: 8px;
            color: #55657e;
            background-color: #1c2532;
            z-index: 300;

        }

    }
   
    .right-panel-container { // notification container (source)
        padding-top: 64px;
        position: fixed;
        z-index: 103;
        right: 0;
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