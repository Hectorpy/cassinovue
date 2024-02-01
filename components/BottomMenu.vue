<template>
    <div class="bottom-menu">
        <div @click="setAllGames" class="bottom-menu__item">
            <button class="menu-link" :class = "$route.path == '/all-games' && !$store.state.isLeftPanelToggled ? 'menu-link--active' : ''">
                <font-awesome-icon icon="fa-solid fa-gamepad" size="1x" class="mb-1"/>
                <span class="menu-link__label">All games</span>
            </button>
        </div>
        <div @click="setTourneys" class="bottom-menu__item">
            <button class="menu-link" :class="selectedMenu == 'Tourneys' ? 'menu-link--active' : ''">
                <font-awesome-icon icon="fa-solid fa-trophy" size="1x" class="mb-1"/>
                <span class="menu-link__label">Tourneys</span>
            </button>
        </div>
        <div @click="setChats" class="bottom-menu__item">
            <button class="menu-link" :class="selectedMenu == 'Chat' ? 'menu-link--active' : ''">
                <font-awesome-icon icon="fa-solid fa-comment-dots" size="1x" class="mb-1"/>
                <span class="menu-link__label">Chat</span>
            </button>
        </div>
        <div class="bottom-menu__item">
            <button class="menu-link" :class="selectedMenu == 'Sport'? 'menu-link--active' : ''">
                <font-awesome-icon icon="fa-solid fa-basketball" size="1x" class="mb-1"/>
                <span class="menu-link__label">Sport</span>
            </button>
        </div>
        <div @click="setMenuBars" class="bottom-menu__item">
            <button class="menu-link" :class="$store.state.isLeftPanelToggled? 'menu-link--active' : ''">
                <font-awesome-icon icon="fa-solid fa-bars" size="1x" class="mb-1"/>
                <span class="menu-link__label">Menu</span>
            </button>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'BottomMenu',
        data() {
            return {
                selectedMenu: 'AllGames',
            }
        },
        methods: {
            setAllGames() {
                this.selectedMenu = 'AllGames';
                this.$router.push('/all-games');
            },
            setTourneys() {
                this.selectedMenu = 'Tourneys';
                this.$router.push('/tourneys');
            },
            setChats(){
                this.selectedMenu = 'Chat';
            },
            switchSport() {
                this.selectedMenu = 'Sport';

            },
            setMenuBars(){
                this.$store.commit("setLeftPanelToggle");
            }
        }
    }
</script>
<style lang="scss" scoped>
    .bottom-menu {
        z-index: 104;
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: #161f2c;
        display: none;
        grid-template-columns: repeat(auto-fit,minmax(40px,1fr));
        grid-column-gap: 4px;
        padding-left: 24px;
        padding-right: 24px;
        padding-bottom: 8px;
        border-top: 1px solid rgba(183,207,255,.0509803922);
        overflow: hidden;
        @media (max-width : 1000px) {
            display: grid;
        }
        .bottom-menu__item {
            position: relative;
            height: 52px;
            .menu-link {
                position: relative;
                width: 100%;
                text-decoration: none;
                color: #93acd3;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100%;
                &:hover {

                }
                .menu-link__label {
                    font-weight: 600;
                    font-size: 9px;
                    line-height: 12px;
                    transition: color .1s ease-in-out;
                    text-overflow: ellipsis;
                    overflow-x: hidden;
                    white-space: nowrap;
                }
            }
            .menu-link--active {
                color: #fff;
                &::before {
                    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    top: -15px;
    left: 50%;
    transform: translate(-50%);
    background: #2283f6;
    filter: blur(15px);
    opacity: 1;
    transition: all .2s ease-in-out;
    z-index: -1;
                }
            }
        }
    }
</style>