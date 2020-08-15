<template>

<ul class="list-unstyled list-group">
    <AudioListItem 
    @audioSelect='onAudioSelect'
    v-for="audio in audios" 
    :audio='audio' :key="audio.id"
    >
    </AudioListItem>
</ul>

    
</template>

<script>
import AudioListItem from "./AudioListItem";
export default {

    name:'AudioList',
    components:{
        AudioListItem
    },

    props:['audios'], 

    methods:{
        onAudioSelect(audio){
            this.$emit('audioSelect',audio);
        }
    },
      
}
</script>

<style scoped>

</style>