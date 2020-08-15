import qs from "qs";

const CLIENT_ID ='380bf91e73e14b3facff1f9ba98646aa';
const ROOT_URL = 'https://accounts.spotify.com';
const REDIRECT_URI = 'https://abhishek-audio-player.netlify.app/callback';

export default {

    login(){
           const querystring = {
           client_id:CLIENT_ID,
           response_type:'token',
           redirect_uri:REDIRECT_URI
        };

       window.location = `${ROOT_URL}/authorize?${qs.stringify(querystring)}`;
    }
}; 