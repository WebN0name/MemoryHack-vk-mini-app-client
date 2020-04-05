import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async Send_Person ({ commit }, data) {
      console.log(data)
      try {
        const config = { headers: { 'Content-Type': 'multipart/form-data' } }
        // axios.post('https://gentle-dawn-59875.herokuapp.com/uploadPhoto', data, {
        //   headers: {
        //     'Access-Control-Allow-Origin': '*',
        //     'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        //     'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
        //   }
        // })
        axios.post('https://gentle-dawn-59875.herokuapp.com/uploadPhoto', data).then(res => {
          console.log(res)
        })
      } catch (error) {
        console.log(error)
      }
    },

    async Get_Photos () {
      try {
        await axios.get('https://gentle-dawn-59875.herokuapp.com/getPhoto')
          .then(r => {
            console.log(r)
          })
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {

  }
})
