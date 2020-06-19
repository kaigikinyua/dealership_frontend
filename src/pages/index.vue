<template>
    <div>
        <topnav v-bind:barner="barner" v-bind:links="links"></topnav>
    </div>    
</template>

<script>
import Topnav from "./components/topnav"
export default {
    name:"Index",
    components:{
        "topnav":Topnav
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