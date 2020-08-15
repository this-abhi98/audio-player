
<template>
  <div class="wrapper">
    <div class="player__container">
      <div class="player__body">
        <div class="body__cover">
          <ul class="list list--cover">
            <li>
              <a class="list__link" href>
                <i class="fa fa-navicon"></i>
              </a>
            </li>

            <li>
              <a class="list__link" href></a>
            </li>

            <li>
              <a class="list__link" href>
                <i class="fa fa-search"></i>
              </a>
            </li>
          </ul>

          <img :src="imgUrl" alt="Album cover" />

          <div class="range" ></div>
        </div>

        <div class="body__info">
          <div class="info__album">{{selectedAudio.album.album_type}}</div>

          <div class="info__song">{{selectedAudio.name}}</div>

          <div class="info__artist">{{selectedAudio.artists[0].name}}</div>
        </div>

        <div class="body__buttons">
          <ul class="list list--buttons">
            <li>
              <a href="#" class="list__link">
                <i class="fa fa-step-backward"></i>
              </a>
            </li>


             <audio autoplay id="player" :src="audioUrl"></audio>

            <li onclick="document.getElementById('player').play()">
              <a href="#" class="list__link" >

                <i height='10px' width='10px' class="fa fa-play"></i>
              </a>
            </li>

          <li onclick="document.getElementById('player').pause()" >
              <a href="#" class="list__link">
                <i height='10px' width='10px' class="fa fa-pause"></i>
              </a>
            </li>
           

            <li>
              <a href="#" class="list__link">
                <i class="fa fa-step-forward"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="player__footer">
        <ul class="list list--footer">
          <li>
            <a href="#" class="list__link">
              <i class="fa fa-heart-o"></i>
            </a>
          </li>

          <li>
            <a href="#" class="list__link">
              <i class="fa fa-random"></i>
            </a>
          </li>

          <li>
            <a href="#" class="list__link">
              <i class="fa fa-undo"></i>
            </a>
          </li>

          <li>
            <a href="#" class="list__link">
              <i class="fa fa-ellipsis-h"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>

export default {


  props: ["selectedAudio"],
  computed: {
    audioUrl() {
      return this.selectedAudio.preview_url;
    },
    imgUrl(){

        return this.selectedAudio.album.images[1].url;
    },
  
  },

};
</script>

<style lang="scss" scoped>
@import "../assets/styles/musicPlayer.scss";

video{
    width: 100%;

}
.video-js .vjs-tech {
    top: -2px;
}

.video-js {
    overflow: hidden;
}
</style>