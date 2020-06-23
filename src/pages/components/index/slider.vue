<template>
    <div class="slidder">
        <div class="slide_container">
            <div class="images">
                <div class="slide" v-for="car in cars" v-bind:key="car" :style="'background-image:url('+car+');'"></div>
            </div>
            <div class="controller">
                <button class="controll">Next</button>
                <button class="controll">Previous</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Slidder",
    data(){
        return {
            cars:["/carpics/1.jpg","/carpics/2.jpg","/carpics/3.jpeg"],
        }
    }
}
</script>
<style scoped>
    div.slidder{
        position: relative;
        height: 100vh;width:100vw;
        overflow: hidden;
    }
    div.slide_container{
        position: relative;
        height: 70%;
        width:90%;
        left:50%;top:50%;
        transform: translate(-50%,-50%);
        display: grid;
        grid-template-rows: 5fr 1fr;
        overflow: hidden;
    }
    div.images{
        display: flex;
    }
    div.slide{
        position: relative;
        height:100%;
        width:100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    div.controller{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
</style>