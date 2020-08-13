<template>
    <div>
        <h3 >Login</h3>
        {{isLoggedIn}}
        <div class='right menu'>
            <h1><a href="#" class="ui-item" @click="login"> login-pp</a></h1>            
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

