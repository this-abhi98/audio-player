const state = {

    token: null
    
};

const getters = {

    isLoggedIn: () => {
        return !!state.token
    }
    
};

const actions = {
    logout: ({ commit }) => {               //commit to call mutaions
        commit('setTotken',null);               //set token to null to logout
    }
    
};

const mutations = {
    setToken:(state,token) => {
        state.token=token;
    }    
};