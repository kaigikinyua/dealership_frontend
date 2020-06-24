<template>
    <div class="login">
    <topnav :barner="barner" :links="links"></topnav>
    <div class="form">
        <h3 class="title">Signup</h3>
        <input class="text" name="email" placeholder="Email"/>
        <input class="text" type="password" placeholder="Password"/>
        <button>Submit</button>
    </div>
    </div>
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
            barner:{"title":"Virtual Dealership","subtitle":"Signup"}
        }
    }
}
</script>
<style scoped>

</style>