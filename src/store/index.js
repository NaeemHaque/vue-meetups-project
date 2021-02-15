import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
// import { lastIndexOf } from 'core-js/fn/array'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadMeetups: [
      { imageUrl: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', id: 'siu1234', title: 'Career Development', date: new Date(), location: 'Sylhet International University', description: 'Hello there. Here is nice description of your meetup' },
      { imageUrl: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', id: 'sdshd2', title: 'Researh Career', date: new Date(), location: 'Shahjalal University of Science and Technology', description: 'Hello there. Here is nice description of your meetup' },
      { imageUrl: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg', id: 'lu1234', title: 'Youth Leadership ', date: new Date(), location: 'Leading University', description: 'Hello there. Here is nice description of your meetup' }
    ],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    setLoadedMeetUps (state, payload) {
      state.loadMeetups = payload
    },
    createMeetup (state, payload) {
      state.loadMeetups.push(payload)
    },
    updateMeetup (state, payload) {
      const meetup = state.loadMeetups.find(meetup => {
        return meetup.id === payload.id
      })
      if (payload.title) {
        meetup.title = payload.title
      }
      if (payload.description) {
        meetup.description = payload.description
      }
      if (payload.date) {
        meetup.date = payload.date
      }
    },
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state, payload) {
      state.error = null
    }
  },
  actions: {
    loadMeetups ({ commit }) {
      commit('setLoading', true)
      firebase.database().ref('meetups').once('value')
        .then(data => {
          const meetUps = []
          const obj = data.val()
          for (var key in obj) {
            meetUps.push({
              id: key,
              title: obj[key].title,
              location: obj[key].location,
              description: obj[key].description,
              imageUrl: obj[key].imageUrl,
              date: obj[key].date,
              creatorId: obj[key].creatorId
            })
          }
          commit('setLoading', false)
          commit('setLoadedMeetUps', meetUps)
        })
        .catch(error => {
          commit('setLoading', false)
          console.log(error)
        })
    },
    createMeetup ({ commit, getters }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        description: payload.description,
        date: payload.date.toISOString(),
        creatorId: getters.user.id
      }
      let imageUrl
      let key
      firebase.database().ref('meetups').push(meetup)
        .then(data => {
          key = data.key
          return key
        })
        .then(key => {
          const filename = payload.image.name
          const ext = filename.slice(filename.lastIndexOf('.'))
          // return firebase.storage().ref('meetups/' + key + '.' + ext).put(payload.image)
          return firebase.storage().ref().child('meetups/' + key + '.' + ext).put(payload.image)
        })
        .then(fileData => {
          imageUrl = fileData.getMetadata.getDownloadURl(0)
          // imageUrl = fileData.metadata.downloadURLs(0)
          return firebase.database.ref('meetups').child(key).update({ imageUrl: imageUrl })
        })
        .then(() => {
          commit('createMeetup', {
            ...meetup,
            imageUrl: imageUrl,
            id: key
          })
        })
        .catch(error => {
          console.log(error)
        })
      // reach out to firebase and store it
    },
    updateMeetupData ({ commit }, payload) {
      commit('setLoading', true)
      const updateObj = {}
      if (payload.title) {
        updateObj.title = payload.title
      }
      if (payload.description) {
        updateObj.description = payload.description
      }
      if (payload.date) {
        updateObj.date = payload.date
      }
      firebase.database().ref('meetups').child(payload.id).update(updateObj)
        .then(() => {
          commit('setLoading', false)
          commit('updateMeetup', payload)
        })
        .catch(error => {
          commit('setLoading', false)
          console.log(error)
        })
    },
    signUserUp ({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
            registerdMeetups: []
          }
          commit('setUser', newUser)
        })
        .catch(error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        })
    },
    signUserIn ({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid,
            registerdMeetups: []
          }
          commit('setUser', newUser)
        })
        .catch(error => {
          commit('setLoading', false)
          commit('setError', error)
          console.log(error)
        })
    },
    autoSignIn ({ commit }, payload) {
      commit('setUser', { id: payload.uid, registerdMeetups: [] })
    },
    logout ({ commit }) {
      firebase.auth().signOut()
      commit('setUser', null)
    },
    clearError ({ commit }) {
      commit('clearError')
    }
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
    },
    user (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  }
})
