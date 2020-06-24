<template>
    <topnav :barner="barner" :links="links"></topnav>
</template>
<script>

import Topnav from "./components/topnav";
export default {
    components:{
        "topnav":Topnav
    },
    data(){
        return{
            links:[{"title":"Home","link":"/"},{"title":"Signup","link":"/signup"}],
            barner:{"title":"Virtual Dealership","subtitle":"Login"}
        }
    }
}
</script>
<style scoped>

</style>