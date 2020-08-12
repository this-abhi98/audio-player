import api from '../../api/imgur';

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
        api.login();   //call api in imgur
    },
    logout: ({ commit }) => {               //commit to call mutaions
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