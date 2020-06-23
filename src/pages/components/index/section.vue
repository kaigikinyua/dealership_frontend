<template>
    <div class="content">
        <h3 class="title">{{data.title}}</h3>
        <div class="par">
            <p v-for="par in data.par" :key="par">{{par}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"Section",
    props:["data","colors"]
}
</script>
<style scoped>

</style>