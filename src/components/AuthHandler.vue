<template>
  <div>
    <input @input="onInput" type="text" placeholder="Enter song name" />
  </div>
</template>

<script>

import { mapActions } from "vuex";
import qs from "qs";

var token = null;

export default {
  name: "AuthHandler",
  methods: {    
    ...mapActions(["finalizeLogin"]),
    onInput: function (event) {
      var searchTerm = event.target.value;
      
      this.$emit('termChange',token,searchTerm); 
    },
  },
  created() {
    //lifecycle method invoked when component created
    this.finalizeLogin(window.location.hash); //pass values after hash in url to finalizeLogin in store/auth.
  token = qs.parse(window.location.hash.replace("#", "")).access_token;
  },
};
</script>


<style scoped>
input[type=text] {
  width: 130px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  height: 30px;
  margin: 10px 40px;
}

/* When the input field gets focus, change its width to 100% */
input[type=text]:focus {
  width: 100%;
  height: 30px;
  margin-left:0;
}
</style>