<template>
    <div>
        <topnav v-bind:barner="barner" v-bind:links="links"></topnav>
        <slider></slider>
    </div>    
</template>

<script>
import Topnav from "./components/topnav"
import Slider from "./components/index/slider"
export default {
    name:"Index",
    components:{
        "topnav":Topnav,
        "slider":Slider
    },
    data(){
        return{
            links:[{"title":"Home"},{"title":"Sign Up"},{"title":"Login"}],
            barner:{"title":"Virtual Dealership","subtitle":"Home"}
        }
    }
}
</script>

<style lang ="scss" scoped>

</style>