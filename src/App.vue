<template>
<div class="wrapper">

  <div class="player__container">
    <AppHeader></AppHeader>

    <router-view name='a' @termChange="onTermChange"></router-view>

    <router-view  name="b" @audioSelect="onAudioSelect" :audios="audios"  ></router-view>
    <router-view :selectedAudio='selectedAudio'></router-view>

                                                                                                                    
  
    <!--it will put particular component when it matches the route-->
    
  </div>

</div>
  
</template>

<script>
import AppHeader from './components/AppHeader';
import axios from'axios';
export default {
    name:'App',
    components: {
        AppHeader,
    },

    data(){
      return{ audios: [],selectedAudio:null};
    },
    methods:{
        onTermChange(token,searchTerm){
        axios.get("https://api.spotify.com/v1/search", {
        headers: { Authorization: "Bearer " + token },
        params: {
          q:searchTerm,
          type:'track'
        }
      }).then((response) => {
        this.audios = response.data.tracks.items
        console.log(response.data.tracks.items)
      });
    },
    onAudioSelect(audio){
      this.selectedAudio=audio;
    }
  }
};
</script>

<style scoped lang="scss">
@import "./assets/styles/musicPlayer.scss";

  .player-container{
    font-family: 'Roboto', Arial, Verdana, sans-serif;
    background: #e4f2fb;
    height: 90vh;
  }
</style>