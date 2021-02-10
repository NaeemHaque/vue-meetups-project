import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadMeetups: [
      { imageUrl: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id: 'siu1234', title: 'Career Development', date: new Date(), location: 'Sylhet International University', description: 'Hello there. Here is nice description of your meetup' },
      { imageUrl: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', id: 'sdshd2', title: 'Researh Career', date: new Date(), location: 'Shahjalal University of Science and Technology', description: 'Hello there. Here is nice description of your meetup' },
      { imageUrl: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', id: 'lu1234', title: 'Youth Leadership ', date: new Date(), location: 'Leading University', description: 'Hello there. Here is nice description of your meetup' }
    ],
    users: {
      id: 'asvstdfs',
      registerdMeetups: ['siu1234']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({ commit }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'bdfhuag213'
      }
      // reach out to firebase and store it
      commit('createMeetup', meetup)
    }
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
