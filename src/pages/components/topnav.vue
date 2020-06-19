<template>
    <div class="topnav">
        <div class="barner">
            <h3 class="title">{{barner.title}} | {{barner.subtitle}}</h3>
        </div>
        <div class="links">
            <ul class="links">
                <li class="link" v-for="link in links" v-bind:key="link">
                    {{link.title}}
                </li>
                <!--add responsive button for navbar-->
            </ul>
        </div>
        <!--sidenav displayed for mobile-->
    </div>
</template>

<script>
export default {
    name:"Topnav",
    props:['barner','links']
}
</script>

<style scoped>
    li.link{
        padding:5px;
        border:1px solid transparent;
        border-bottom:1px solid crimson;
        transition:1s;
    }
    li:hover,.active{
        box-shadow: 1px 1px 5px 5px rgba(10,10,10,0.2);
    }
</style>