<template>
    <div>
        <input type="text">
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name:'AuthHandler',
    methods: mapActions(['finalizeLogin']),

    created(){                         //lifecycle method invoked when component created
    this.finalizeLogin(window.location.hash);            //pass values after hash in url to finalizeLogin in store/auth.
    }
};
</script>