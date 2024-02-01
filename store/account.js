import axios from 'axios'

const getDefaultState = () => {
  return {
    email: '',
    name: '',
    emailVerified: false,
    role: 10
  }
};
  // const state = getDefaultState()
const state = () => ({
  email: '',
  name: '',
  role: 10,
  token: ''
});

const mutations = {
  RESET_STATE: (state) => {
    window.sessionStorage.clear();
    window.localStorage.clear();
    document.cookie = 'auth._token.awsCognito = null'
    Object.assign(state, getDefaultState())
  },
  SET_ACCOUNT: (state, account) => {
    state.email = account.email
    state.name = account.username
    state.emailVerified = account.emailVerified
  },
  SET_ROLE: (state, role) => {
    state.role = role
  },
};

const actions = {
  resetState({ commit }) {
    return new Promise(() => {
      commit('RESET_STATE')
    })
  },
  setAccount({ commit }, account) {
    commit('SET_ACCOUNT', account)
  },
  setRole({commit}, role){
    commit('SET_ROLE', role)
  },
  async checkAWSLogin({ commit }){
    if (window.sessionStorage.getItem("token")) {
      const config = {
        headers:{
          Authorization: window.sessionStorage.getItem("token")
        }
      }
      await axios.get("https://6og8h9ot57.execute-api.ap-southeast-1.amazonaws.com/stg/profile", config)
      .then((data)=> {
          commit('SET_ACCOUNT', data.data.body)
      })
      .catch(error => {
        this.$toast.error('Please login again.')
        commit('RESET_STATE')
        this.$router.push('/')
        console.log(error)
      })
    } 
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  // getters
}