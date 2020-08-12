<template>
    <div>
        <h3>Login</h3>
        <div class='right menu'>
            <h1><a href="#" class="ui-item" @click="login"> login-pp</a></h1>            
        </div>        
    </div>
</template>


<script>
import { mapActions } from 'vuex';
export default {
    name: 'AppHeader',
     methods: 
     {
         ...mapActions(['login'])
     }
};
</script>

