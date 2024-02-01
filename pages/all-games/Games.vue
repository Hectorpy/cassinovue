<template>
    <div class="all-games">
        <h3 class="mb-3">All Games</h3>
        <div class="lobby">
            <div class="lobby__tabs" style="">
                <div class = "categories">
                    <div v-for = "(c, index) in categories" :key ="index">
                        <template v-if = "index == 1">
                            <div v-if = "$store.state.account.name != ''" @click = "selectCategory(index)" :class="index == selectedCategory ? 'tab--active': ''" class="tab">
                                <span class="icon"><img :src = "require('@/assets/images/game-img/' + c.img)"/></span>
                                <span class = "title">{{c.title}}</span>
                                <span v-if = "index == selectedCategory" class="badge">{{totalCount}} +</span>
                            </div>
                        </template>
                        <template v-else>
                            <div  @click = "selectCategory(index)" :class="index == selectedCategory ? 'tab--active': ''" class="tab">
                                <span class="icon"><img :src = "require('@/assets/images/game-img/' + c.img)"/></span>
                                <span class = "title">{{c.title}}</span>
                                <span v-if = "index == selectedCategory" class="badge">{{totalCount}} +</span>
                            </div>
                        </template>
                    </div>
                </div>
                <div class="input input-sm" style = "width:175px; min-width: 30px;">
                    <div class="input-inner">
                        <span class="input-icon"><font-awesome-icon icon="fa-solid fa-search" color="#55657e"/></span>
                        <input v-model = "gameSearchKey" v-on:input="searchGameList()" autocomplete="off" class="input-tag" placeholder="Search for Games"/>
                        <button type="button" :class="1 > 2 ? 'input-btn-clear visible': 'input-btn-clear'"><font-awesome-icon icon="fa-solid fa-xmark" /></button>
                        <div class="input-btn-successful"><font-awesome-icon icon="fa-solid fa-check" /></div>
                    </div>
                </div>
            </div>
            <div class="lobby__tabs-mobile">
                <div :class="['dropdown dropdown-lg dropdown-bottomRight dropdown-fullwidth', categoryDrop ? 'dropdown-opened' : '',]" style = "margin-bottom: 10px;" >
                    <div class="dropdown-trigger" @click="categoryDrop = !categoryDrop" style = "justify-content: space-between;">
                        <div style="display: flex; align-item: center;">
                            <span class="icon"><img :src = "require('@/assets/images/game-img/' + categories[selectedCategory].img)"/></span>
                            <span class = "title ms-2">{{categories[selectedCategory].title}}</span>
                        </div>
                        <font-awesome-icon icon="fa-solid fa-angle-down" class="icon-arrow"/>
                    </div>
                    <div class="dropdown-inner" style="width: 100%">
                        <div class="dropdown-content">
                            <div class="dropdown-menu-lg">
                                <ul class="dropdown-menu-inner">
                                    <li v-for = "(c, index) in categories" :key ="index" @click = "selectCategory(index)" :class="index == selectedCategory ? 'dropdown-menu-link-selected': ''" class="dropdown-menu-item">
                                        <template v-if = "index == 1">
                                            <button v-if = "$store.state.account.name != ''" class = "dropdown-menu-link">
                                                <span class="icon"><img :src ="require('@/assets/images/game-img/'+ c.img)"/></span>
                                                <span class = "title ms-2">{{c.title}}</span>
                                            </button>
                                        </template>
                                        <template v-else>
                                            <button class = "dropdown-menu-link">
                                                <span class="icon"><img :src ="require('@/assets/images/game-img/'+ c.img)"/></span>
                                                <span class = "title ms-2">{{c.title}}</span>
                                            </button>
                                        </template>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="head-subcategories">
            <div class="head-subcategories__tags mb-3">
                <button @click="selectSubCategory(0)" :class="$route.query.tag == undefined ? 'active': ''" type="button" size="sm" class="button-tab button-tab_sm button-tab_blue">
                    <span>All</span> 
                </button>
                <button @click="selectSubCategory(s)" v-for="(s, i) in subCategories" :key="i" :class="$route.query.tag == s ? 'active': ''" type="button" size="sm" class="button-tab button-tab_sm button-tab_blue">
                    <span>{{s}}</span> 
                </button>
            </div>
            <div class ="mb-3">
                <div :class="['dropdown dropdown-lg dropdown-bottomRight dropdown-fullwidth', providerDrop ? 'dropdown-opened' : '',]" >

                    <div class="dropdown-trigger" @click="providerDropToggle">
                        <font-awesome-icon icon="fa-solid fa-filter" class="me-2" style="transform: rotate(0);"/>
                        <span class="text" v-if="selectedProvider < 0">Select provider</span>
                        <template v-else>
                            <span class="text">{{providers[selectedProvider].name}}</span>
                        </template>
                        <font-awesome-icon icon="fa-solid fa-angle-down" class="icon-arrow"/>
                    </div>
                    <div class="dropdown-inner" style="width: 100%">
                        <div class="dropdown-content">
                            <div class="input input-md">
                                <div class="input-inner">
                                    <span class="input-icon"><font-awesome-icon icon="fa-solid fa-magnifying-glass"/></span>
                                    <input v-model = "providerSearchKey" v-on:input="searchProvider()" autocomplete="off" placeholder="Search" class="input-tag"/>
                                    <button type="button" :class=" 1 > 2 ? 'input-btn-clear visible' : 'input-btn-clear'"><font-awesome-icon icon="fa-solid fa-xmark" /></button>
                                    <div class="input-btn-successful"><font-awesome-icon icon="fa-solid fa-check" /></div>
                                </div>
                            </div>
                            <div class="dropdown-menu-lg">
                                <ul id="cryptoMenu" class="dropdown-menu-inner dropdown-menu-inner-has-scroll" style="max-height: 200px">
                                    <li class="dropdown-menu-item" v-if = "selectedProvider != -1">
                                        <button class="dropdown-menu-link" @click="selectProvider(-1)">
                                            All providers
                                        </button>
                                    </li>
                                    <li v-for="(p, index) in providers" :key="index" :value="p.name" class="dropdown-menu-item">
                                    <button :class="selectedProvider === index ? 'dropdown-menu-link-selected' : ''" @click="selectProvider(index)" class="dropdown-menu-link">
                                        <span class="currency is-wallet">
                                        <img :src="require(`@/assets/images/games/providers/${p.icon}`)" :alt="p.name" width="16" height="16" class="currency-icon"/>
                                        <span class="provider__label">{{p.name}}</span>
                                        <div class="currency-balances">
                                            <span class="currency-balances-balance" style="font-size: 14px">
                                            <span style="color: #fff" class="font-digits">{{p.amount}}</span>
                                            </span>
                                        </div>
                                        </span>
                                    </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        <div class="filters mb-3">
            <div class="input input-md">
                <div class="input-inner">
                    <span class="input-icon"><font-awesome-icon icon="fa-solid fa-search" color="#55657e"/></span>
                    <input v-model = "gameSearchKey" v-on:input="searchGameList()" autocomplete="off" class="input-tag" placeholder="Search for Games"/>
                    <button type="button" :class="1 > 2 ? 'input-btn-clear visible': 'input-btn-clear'"><font-awesome-icon icon="fa-solid fa-xmark" /></button>
                    <div class="input-btn-successful"><font-awesome-icon icon="fa-solid fa-check" /></div>
                </div>
            </div>
        </div>
        <div class="games">
            <div class="games__row">
                <div v-for="(g, i) in games" :key="i">
                    <GameCard :data = "g"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GameCard from '@/components/cards/GameCard.vue'
export default {
    name: 'Games',
    components: {GameCard},
    data() {
        return {
            categories: [
                {url: undefined, img: 'icon-lobby.png', title: 'All games'},
                {url: 'favorite', img: 'download.png', title: 'Favorite'},
                {url: 'dapps', img: 'icon-inhouse.png', title: 'In-House'},
                {url: 'slots', img: 'icon-slots.png', title: 'Slots'},
                {url: 'live', img: 'icon-live.png', title: 'Live'},
                {url: 'table', img: 'icon-table.png', title: 'Table'},
                {url: 'special', img: 'icon-special.png', title: 'Special'},
            ],
            categoryDrop: false,
            selectedCategory: 0,
            
            resGames: [],
            games: [],
            repoProviders: [],
            providers: [],
            catSelection: 0,
            subSelection: 'All',
            totalCount: 0,
            subCategories: [],
            providerDrop: false,
            currentCryptoIndex: -1,
            selectedProvider: -1,
            providerSearchKey: '',
            gameSearchKey: '',
        };
    },
    created() {
        this.getGameList();
    },
    
    methods: {
        async getGameList(){
            this.resGames = []
            let data = {}

            if (this.$route.query.tab == undefined){
                data.type = 0
                this.selectedCategory = 0
            } else if (this.$route.query.tab == 'favorite'){
                data.type = 1
                this.selectedCategory = 1
            } else if (this.$route.query.tab == 'dapps'){
                data.type = 2
                this.selectedCategory = 2
            } else if (this.$route.query.tab == 'slots'){
                data.type = 3
                this.selectedCategory = 3

            } else if (this.$route.query.tab == 'live'){
                data.type = 4
                this.selectedCategory = 4

            } else if (this.$route.query.tab == 'table'){
                data.type = 5
                this.selectedCategory = 5
            } else if (this.$route.query.tab == 'special'){
                data.type = 6
                this.selectedCategory = 6
            }

            // data.type = this.catSelection
            const res = await this.$api.auth.getGameList(data)
            this.resGames = res.list
            this.totalCount = res.list.length;
            this.repoProviders = res.providers;
            this.providers = res.providers;
            this.setSubCategories(this.resGames);
            this.setCurGameList(this.resGames);
        },
        setSubCategories(list){
            this.subCategories = []
            // provider filter
            var tempList = [];
            if (this.selectedProvider < 0){
                tempList = list
            } else {
                list.map (a => {
                    if (a.provider == this.providers[this.selectedProvider].name){
                        tempList.push(a)
                    }
                })
            }
            const groupByCategory = tempList.reduce((group, product) => {
                const { subType } = product;
                if (subType != ""){
                    group[subType] = group[subType] ?? [];
                    group[subType].push(product);
                }
                return group;
            }, {});
            Object.keys(groupByCategory).map(c => {
                this.subCategories.push(c)
            })
        },
        setCurGameList(list){
            this.games = []
            // provider filter
            var tempList = [];
            if (this.selectedProvider < 0){
                tempList = list
            } else {
                list.map (a => {
                    if (a.provider == this.providers[this.selectedProvider].name){
                        tempList.push(a)
                    }
                })
            }
            // subcategory filter
            if (this.$route.query.tag == undefined){
                this.games = tempList
            } else {
                tempList.map(r => {
                    if (r.subType == this.$route.query.tag){
                        this.games.push(r)
                    }
                })
            }
        },
        selectCategory(index){
            this.selectedCategory = index;
            this.categoryDrop = false
            this.$router.push({
                path: '/all-games',
                query: {tab : this.categories[this.selectedCategory].url}
            })
            .then(()=> {
                this.subSelection = 'All'
                this.selectedProvider = -1
                this.getGameList()
            })

        },
        selectProvider(index){
            this.selectedProvider = index
            this.providerDrop = false
            this.setSubCategories(this.resGames)
            this.setCurGameList(this.resGames);
        },
        selectSubCategory(category){
            if (category == 0){
                this.$router.push({
                    path: this.$route.path,
                    query: {tab: this.$route.query.tab}
                })
                .then(() => {
                    this.setCurGameList(this.resGames);
                })
            } else {
                this.$router.push({
                    path: this.$route.fullPath,
                    query: {tag: category}
                }).then(() => {
                    this.setCurGameList(this.resGames);
                })
            }
        },
        searchProvider(){
            if (this.providerSearchKey == ''){
                this.providers = this.repoProviders
                return
            }
            var needleRegExp = new RegExp(this.providerSearchKey.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "i");
            var result = this.providers.filter(c => c.name.match(needleRegExp))
            this.providers = result
        },
        searchGameList(){
            if (this.gameSearchKey == ''){
                this.setCurGameList(this.resGames)
                return
            }
            var needleRegExp = new RegExp(this.gameSearchKey.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "i");
            var result = this.games.filter(c => c.name.match(needleRegExp))
            this.games = result
        },
        providerDropToggle: function () {
          this.providerDrop = !this.providerDrop;
        },
    }
}
</script>
<style lang="scss" scoped>
    .all-games {
        .head-subcategories{
            display: flex;
            justify-content: space-between;
            align-items: center;
            @media (max-width: $fury-start-collapse){
                display: block;
            }
            .dropdown {
                min-width: 240px;
                .provider__label{
                    font-size: 12px;
                }
            }
        }
        
    }
</style>