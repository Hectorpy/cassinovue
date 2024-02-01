<template>
  <div>

    <div class="category">
      <div class = "head">
        <a class="title"><font-awesome-icon icon="fa fa-home" /><span class="ms-2 title-in-house">In-House Games</span></a>
        <div class="buttons">
          <button type="button" class="button button-md button-grey2 button-center button-full" @click="pushRouterToAllGames(0)">
            <span class="button-inner">
              <span class="button-text">
                <span>View All</span>
              </span>
            </span>
          </button>
          <button @click="previousSlideButtonClick('inHouses')" type="button" class="button button-md button-grey2 button-center button-full ms-2" aria-controls="testSlide-track" aria-label="Go to last slide">
            <span class="button-inner">
              <span class="button-text">
                <span><font-awesome-icon icon="fa-solid fa-chevron-left" /></span>
              </span>
            </span>
          </button>
          <button @click="nextSlideButtonClick('inHouses')" type="button" class="button button-md button-grey2 button-center button-full ms-2">
            <span class="button-inner">
              <span class="button-text">
                <span><font-awesome-icon icon="fa-solid fa-chevron-right" /></span>
              </span>
            </span>
          </button>
        </div>
      </div>
      <div class="body">
        <splide :options="options" style="max-width: 100%;" id = "inHouses">
          <splide-slide v-for="(h, i) in inHouses" :key="i">
            <GameCard v-if = "h.name" :data = "h"/>
          </splide-slide>
        </splide>
      </div>
    </div>

    <div class="category">
      <div class = "head">
        <a class="title"><font-awesome-icon icon="fa-solid fa-star" /><span class="ms-2">Top</span></a>
        <div class="buttons">
          <button type="button" class="button button-md button-grey2 button-center button-fullwidth" @click="pushRouterToAllGames('top')">
            <span class="button-inner">
              <span class="button-text">
                <span>View All</span>
              </span>
            </span>
          </button>
          <button @click="previousSlideButtonClick('tops')" type="button" class="button button-md button-grey2 button-center button-fullwidth ms-2">
            <span class="button-inner">
              <span class="button-text">
                <span><font-awesome-icon icon="fa-solid fa-chevron-left" /></span>
              </span>
            </span>
          </button>
          <button @click="nextSlideButtonClick('tops')" type="button" class="button button-md button-grey2 button-center button-fullwidth ms-2">
            <span class="button-inner">
              <span class="button-text">
                <span><font-awesome-icon icon="fa-solid fa-chevron-right" /></span>
              </span>
            </span>
          </button>
        </div>
      </div>
      <div class="body">
        <splide :options="options" style="max-width: 100%;" id = "tops">
          <splide-slide v-for="(t, i) in tops" :key="i">
            <GameCard v-if="t.name" :data = "t"/>
          </splide-slide>
        </splide>
      </div>
    </div>

    <div class="category">
      <div class = "head">
        <a class="title"><font-awesome-icon icon="fa-solid fa-star" /><span class="ms-2">Hot</span></a>
        <div class="buttons">
          <button type="button" class="button button-md button-grey2 button-center button-fullwidth" @click="pushRouterToAllGames('hot')">
            <span class="button-inner">
              <span class="button-text">
                <span>View All</span>
              </span>
            </span>
          </button>
          <button @click="previousSlideButtonClick('hots')" type="button" class="button button-md button-grey2 button-center button-fullwidth ms-2">
            <span class="button-inner">
              <span class="button-text">
                <span><font-awesome-icon icon="fa-solid fa-chevron-left" /></span>
              </span>
            </span>
          </button>
          <button @click="nextSlideButtonClick('hots')" type="button" class="button button-md button-grey2 button-center button-fullwidth ms-2">
            <span class="button-inner">
              <span class="button-text">
                <span><font-awesome-icon icon="fa-solid fa-chevron-right" /></span>
              </span>
            </span>
          </button>
        </div>
      </div>
      <div class="body">
        <splide :options="options" style="max-width: 100%;" id = "hots">
          <splide-slide v-for="(h, i) in hots" :key="i">
            <GameCard v-if="h.name" :data = "h"/>
          </splide-slide>
        </splide>
      </div>
    </div>

    <div class="category">
      <div class = "head">
        <a class="title"><font-awesome-icon icon="fa-solid fa-star" /><span class="ms-2">New</span></a>
        <div class="buttons">
          <button type="button" class="button button-md button-grey2 button-center button-fullwidth" @click="pushRouterToAllGames('new')">
            <span class="button-inner">
              <span class="button-text">
                <span>View All</span>
              </span>
            </span>
          </button>
          <button @click="previousSlideButtonClick('news')" type="button" class="button button-md button-grey2 button-center button-fullwidth ms-2">
            <span class="button-inner">
              <span class="button-text">
                <span><font-awesome-icon icon="fa-solid fa-chevron-left" /></span>
              </span>
            </span>
          </button>
          <button @click="nextSlideButtonClick('news')" type="button" class="button button-md button-grey2 button-center button-fullwidth ms-2">
            <span class="button-inner">
              <span class="button-text">
                <span><font-awesome-icon icon="fa-solid fa-chevron-right" /></span>
              </span>
            </span>
          </button>
        </div>
      </div>
      <div class="body">
        <splide :options="options" style="max-width: 100%;" id = "news">
          <splide-slide v-for="(n, i) in news" :key="i" >
            <GameCard v-if="n.name" :data = "n"/>
          </splide-slide>
        </splide>
      </div>
    </div>

    <div class="category">
      <div class = "head">
        <a class="title"><font-awesome-icon icon="fa fa-upload" /><span class="ms-2">Providers</span></a>
        <div class="buttons">
          <button @click="previousSlideButtonClick('providers')" type="button" class="button button-md button-grey2 button-center button-fullwidth ms-2">
            <span class="button-inner">
              <span class="button-text">
                <span><font-awesome-icon icon="fa-solid fa-chevron-left" /></span>
              </span>
            </span>
          </button>
          <button @click="nextSlideButtonClick('providers')" type="button" class="button button-md button-grey2 button-center button-fullwidth ms-2">
            <span class="button-inner">
              <span class="button-text">
                <span><font-awesome-icon icon="fa-solid fa-chevron-right" /></span>
              </span>
            </span>
          </button>
        </div>
      </div>
      <div class="body">
        <splide :options="options" style="max-width: 100%;" id ="providers">
          <splide-slide v-for="(p, i) in providers" :key="i">
            <div>
              <a title = "Space Dice" class="game-preview">
                <img  v-if = "p.img != null" :src="require('@/assets/images/game-img/providers/' + p.img)" style=" width: 100%; border-radius: 14px;"/>
              </a>
            </div>
          </splide-slide>
        </splide>
      </div>
    </div>

  </div>
</template>

<script>
  import GameCard from "@/components/cards/GameCard.vue"


  export default {
    components: {GameCard},
    name: 'LobbySummary',
    data(){
      return {
        options : {
          rewind : true,
          rewindByDrag: true,
          perPage: 6,
          gap    : '1rem',
          pagination: false,
          breakpoints: {
            800: {
              perPage: 4
            },
            560: {
              perPage: 3
            },
            420: {
              perPage: 2
            }
          },
        },
        inHouses: new Array(10).fill({}),
        tops : new Array(10).fill({}),
        hots : new Array(10).fill({}),
        news : new Array(10).fill({}),
        providers : new Array(8).fill({}),
      }
    },
    created(){
      this.getGamesSummary();
    },
    methods: {
      async getGamesSummary(){
        let data = {};
        const res = await this.$api.auth.getGamesSummary(data);
        this.inHouses = res.inHouses
        this.tops = res.tops
        this.hots = res.hots
        this.news = res.news
        this.providers = res.providers_home

      },
      pushRouterToAllGames(index){
        if (index == 0) {
          this.$router.push(
            {
              path: '/all-games',
              query: {tab: 'dapps'}
            }
          )
        } else {
          this.$router.push(
            {
              path: '/all-games',
              query: {tag: index}
            }
          )
        }
      },
      previousSlideButtonClick(id){
        var a = document.getElementById(id)
        var b = a.getElementsByClassName('splide__arrow--prev')
        b[0].click()
      },
      nextSlideButtonClick(id){
        var a = document.getElementById(id)
        var b = a.getElementsByClassName('splide__arrow--next')
        b[0].click()
      },
    }
  }
</script>
<style lang="css">
  #providers .splide__arrows .splide__arrow{
    display: none;
  }
  #hots .splide__arrows .splide__arrow{
    display: none;
  }
  #news .splide__arrows .splide__arrow{
    display: none;
  }
  #tops .splide__arrows .splide__arrow{
    display: none;
  }
  #inHouses .splide__arrows .splide__arrow{
    display: none;
  }
</style>
<style lang="scss" scoped>
.title-in-house{
  @media(max-width: 340px) {
    display: none;
  }
}
</style>