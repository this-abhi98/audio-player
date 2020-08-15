<template>

<router-link
  to="/playing"
>
<li class="media list-group-item audio-list-item" @click="onAudioSelect">
    <img :src="audio.album.images[2].url" alt class="mr-3" />
    <div class="desc">
      <h5 class="mt-0 mb-1">{{audio.name}}</h5>
    </div>
  </li>
</router-link>


</template>

<script>
export default {
  props: ["audio"],

  methods: {
    onAudioSelect() {
      this.$emit("audioSelect", this.audio);
      
    },
  },
};
</script>

<style scoped>
.audio-list-item {
  display: flex;
  cursor: pointer;
}
img {
  display: inline-block;
  width: 30%;
}
.desc {
  display: inline-block;
  width: 60%;
}

li:hover {
  background-color: wheat;
}
</style>