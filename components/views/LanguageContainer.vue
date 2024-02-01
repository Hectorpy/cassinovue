<template>
    <b-dropdown class="m-md-2 ps-5" menu-class="per-page-menu">
      <template #button-content>
        <img :src="require(`@/assets/images/sidebar-icon/${language.imgUrl}`)" :alt="$i18n.locale" style="width: 15px; height: 15px;"/>
        <span class="ms-2">{{ language.name }}</span>    
      </template>
      <b-dropdown-item v-for="(locale, index) in $i18n.locales" :key="index" :active="language.name == locale.name ? true: false" @click="setLanguage(locale)">
        <img :src="require(`@/assets/images/sidebar-icon/${locale.imgUrl}`)" :alt="locale.code" style="width: 15px; height: 15px;"/>
        {{locale.name}}
      </b-dropdown-item>
    </b-dropdown>
</template>
<script>
    export default {
        data() {
            return {
                language: {
                    code: "en",
                    name: "English",
                    imgUrl: "en.png"
                },
            };
        },
        created() {
            this.language = this.$i18n.locales.find(({ code }) => code === this.$i18n.locale)
        },
        methods: {
            setLanguage(locale) {
                this.language = locale
                this.$store.commit("SET_LANGUAGE", locale.code)
                this.$i18n.locale = locale.code
            },
        }
    }
</script>