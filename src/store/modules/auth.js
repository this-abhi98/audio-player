import api from '../../api/spotify';
import qs from 'qs';

const state = {
    token: null //set token to null initially
};

const getters = {
    isLoggedIn: () => {
        return !!state.token
    }
};

const actions = {
    login: () => {
        api.login();   //call api in spotify
    },
     finalizeLogin( {commit},hash){

        const query=    qs.parse(hash.replace('#',''));          
    
        commit('setToken',query.access_token)            //setToken after grabbing the value
    
    },

    logout: ({ commit }) => {               //commit to call mutations
        commit('setTotken',null);               //set token to null to logout
    }
    
};

const mutations = {
    setToken:(state,token) => {
        state.token=token;
    }    
};

export default {
    state,
    getters,
    actions,
    mutations
};