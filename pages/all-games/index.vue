<template>
    <div>
        <Games/>
        <ShowMore/>
    </div>
</template>

<script>
    import Games from './Games.vue'
    import ShowMore from './ShowMore.vue'
    
    export default {
        name: 'GamesIndex',
        components: {Games, ShowMore},
    }
</script>