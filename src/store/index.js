import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadMeetups: [
      { imageUrl: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id: 'siu1234', title: 'Career Development', date: '08 February 2021', location: 'Sylhet International University' },
      { imageUrl: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', id: 'sdshd2', date: '14 February 2021', location: 'Shahjalal University of Science and Technology' },
      { imageUrl: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', id: 'lu1234', title: 'Youth Leadership ', date: '26 March 2021', location: 'Leading University' }
    ],
    users: {
      id: 'asvstdfs',
      registerdMeetups: ['siu1234']
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    loadMeetups (state) {
      return state.loadMeetups.sort((meetUpA, meetUpB) => {
        return meetUpA.date > meetUpB.date
      })
    },
    featureMeetups (state, getters) {
      return getters.loadMeetups.slice(0, 5)
    },
    loadMeetup (state) {
      return meetupID => {
        return state.loadMeetups.find(meetup => {
          return meetup.id === meetupID
        })
      }
    }
  }
})
