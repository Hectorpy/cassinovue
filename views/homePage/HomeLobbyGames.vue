<template>
      <div class="">
        <div class="lobby__tabs">
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
                <input autocomplete="off" class="input-tag" placeholder="Search for Games"/>
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
  
        <HomeLobbyGamesSummary v-if = "selectedCategory < 1"/>
        <div v-else>
          <div class="games">
            <div class="games__row">
                <div v-for="(g, i) in games" :key="i">
                    <GameCard :data = "g"/>
                </div>
            </div>
          </div>
        </div>
      </div>
  </template>
    
  <script>
    import GameCard from "@/components/cards/GameCard.vue"
  
    import HomeLobbyGamesSummary from './HomeLobbyGamesSummary.vue'
  
      export default {
        name: "HomeLobbyGames",
        components: {HomeLobbyGamesSummary, GameCard},

        data() {
            return {
              categories: [
                {url: undefined, img: 'icon-lobby.png', title: 'Lobby'},
                {url: 'favorite', img: 'download.png', title: 'Favorite'},
                {url: 'dapps', img: 'icon-inhouse.png', title: 'In-House'},
                {url: 'slots', img: 'icon-slots.png', title: 'Slots'},
                {url: 'live', img: 'icon-live.png', title: 'Live'},
                {url: 'table', img: 'icon-table.png', title: 'Table'},
                {url: 'special', img: 'icon-special.png', title: 'Special'},
              ],
              categoryDrop: false,
              selectedCategory: 0,
  
              games: [],
              totalCount: 0,
              gameSearchKey: ''
            };
          },
          methods: {
            async selectCategory(index){
              this.selectedCategory = index
              this.categoryDrop = false
              if (index == 0)
                return
              this.getGameList()
            },
            async getGameList(){
              let data = {}
              data.type = this.selectedCategory
              const res = await this.$api.auth.getGameList(data)
              this.games = res.list
              this.totalCount = res.list.length
            },
            searchGameList(){
              if (this.gameSearchKey == ''){
                  this.setCurGameList(this.resGames)
                  return
              }
              var needleRegExp = new RegExp(this.gameSearchKey.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "i");
              var result = this.games.filter(c => c.name.match(needleRegExp))
              this.games = result
            }
          }
      };
  </script>
  <style lang="scss" scoped>
    .page-home__lobby-wrapper {
      min-height: 100vh;
      
    }
  </style>