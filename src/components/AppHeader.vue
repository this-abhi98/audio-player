<template>
    <div>
        <div class="dialog" v-if="!isLoggedIn">
            <h1><a href="#"  @click="login">Hey! Click me to approve yourself to spotify</a></h1>            
        </div>        
    </div>
</template>


<script>
import { mapActions,mapGetters} from 'vuex';
export default {
    name: 'AppHeader',

     computed:{

        ...mapGetters(['isLoggedIn'])

    },
     methods: 
     {
         ...mapActions(['login'])     //map this login present in actions present in auth file in store folder
     }
};
</script>


<style  scoped>
.dialog{
    position:absolute;
    text-align: center;
    height: 40%;
    width: 40%;
    background-color: aquamarine;
    color: white;
    padding-top: 8%;
    margin-left:-100px ;
}
</style>
