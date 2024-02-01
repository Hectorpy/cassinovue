<template>
    <div class="banners">
        <splide :options="options" style="max-width: 100%;">
          <splide-slide  v-for="(b, i) in banners" :key="i" >
            <div class="picture double" v-if = "b.img != null">
              <img :src="require('@/assets/images/game-img/banners/'+  b.img)" style="height: 210px; width: 100%; border-radius: 14px;"/>
            </div>
          </splide-slide>
        </splide>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                banners : new Array(8).fill({}),
                options : {
                    rewind : true,
                    perPage: 3,
                    gap    : '1rem',
                    pagination: false,
                    breakpoints: {
                        1080: {
                            perPage: 2
                        },
                        756: {
                            perPage: 1
                        }
                    },
                },
            };
        },
        created() {
            this.getBanners()
        },
        methods: {
            async getBanners(){
                const res = await this.$api.auth.getBanners();
                this.banners = res
            }
        }
    }
</script>

<style lang="scss" scoped>
    .banners {
        position: relative;
        margin-bottom: 40px;
    }

</style>