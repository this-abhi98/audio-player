<template>

<div>
    <AppHeader> </AppHeader>
    czzc
    <router-view></router-view>         <!--it will put particular component when it matches the route-->
</div>

</template>

<script>
import AppHeader from './components/AppHeader';

export default {
    name:'App',
    components: {
        AppHeader
    }
};
</script>

<style scoped>

</style>