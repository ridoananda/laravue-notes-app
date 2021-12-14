import { createStore } from 'vuex'
import axios from 'axios'
import router from "../router";
// Create a new store instance.
const store = createStore({
  state: () => ({
    user: null,
    notes: [],
    note: null,
  }),
  mutations: {
    SET_USER_LOGIN(state, data){
      state.user = data
    },
    SET_NOTE(state, data){
      state.note = data
    },
    SET_NOTES(state, data){
      state.notes = data
    },
    CLEAR_USER_LOGIN(state){
      state.user = null
    }
  },
  actions: {
    async noteDetail({ commit, state }, slug){
      try {
        const { data } = await axios.get(`/api/note/${slug}`)
        commit('SET_NOTE', data.data)
      } catch (error) {
        if (error.response.status == 404) router.push({ name: 'NoteNotFound' })
      }
    },
    async noteLoad({ commit, state }){
      try {
        const { data } = await axios.get(`/api/note`)
        commit('SET_NOTES', data.data)
      } catch (error) {
        // if (error.response.status == 404) router.push({ name: 'NoteNotFound' })
      }
    },
    async logout({ commit }){
      try {
        await axios.post('/logout')
        commit('CLEAR_USER_LOGIN')
        router.push('/')
      } catch (error) {
        console.log(error.response);
      }
    },
    async checkUserLoggedIn({commit}){
      try {
          await axios.get('/api/authenticated')
          const { data } = await axios.get('/api/user')
          commit('SET_USER_LOGIN', data)
      } catch (error) {
          commit('CLEAR_USER_LOGIN')
      }
    }
  },
  getters: {
    isLoggedIn: state => !!state.user,
    getNote: state => state.note
  }
})

export default store