<template>
    <div class="userpage">
        <topnav v-bind:barner="barner" v-bind:links="links"></topnav>
    </div>
</template>
<script>
import Topnav from './components/topnav'
export default {
    components:{
        "topnav":Topnav
    },
    data(){
        return {
            barner:{"title":"Virtual Dealership","subtitle":"Username"},
            links:[{"title":"Logout","link":"/"}]
        }
    },
    methods:{
        fetch_cars:function(){}
    }    
}
</script>
<style scoped>

</style>