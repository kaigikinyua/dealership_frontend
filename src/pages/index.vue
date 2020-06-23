<template>
    <div>
        <topnav v-bind:barner="barner" v-bind:links="links"></topnav>
        <slider></slider>
        <sect v-for="data in indexData" :key="data" :textData="data"></sect>
        <div class="contacts">
            <div class="container_middle">
                <h3 class="title">Contacts</h3>
                <table>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                </table>
            </div>
        </div>
    </div>    
</template>

<script>
import Topnav from "./components/topnav"
import Slider from "./components/index/slider"
import Section from "./components/index/section"
export default {
    name:"Index",
    components:{
        "topnav":Topnav,
        "slider":Slider,
        "sect":Section,
    },
    data(){
        return{
            links:[{"title":"Home"},{"title":"Guest"},{"title":"Sign Up"},{"title":"Login"}],
            barner:{"title":"Virtual Dealership","subtitle":"Home"},
            indexData:[
                {"title":"About Us","par":[
                    {"par":"Virtual Dealership is an imaginery vehicle purchasement application made to make your dreams come true."},
                    {"par":"We have a variety of vehicles limited only to your imagination from SUVs to saloons we even have concept cars!!"},
                    {"par":"You can compare different performances of vehicles! What are you waiting for?!"}
                ]},
                {"title":"Our Services","par":[
                    {"par":"Virtual Dealership is an imaginery vehicle purchasement application made to make your dreams come true."},
                    {"par":"We have a variety of vehicles limited only to your imagination from SUVs to saloons we even have concept cars!!"},
                    {"par":"You can compare different performances of vehicles! What are you waiting for?!"}
                ]},
            ]
        }
    }
}
</script>

<style lang ="scss" scoped>

</style>