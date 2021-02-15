import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase/app'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import DateFilter from './filters/date'
import AlertCmp from './components/shared/alert'
import EditMeetup from './components/meetUp/edit/editMeetupDetailsDialog'
import EditMeetupDate from './components/meetUp/edit/editMeetupDateDialog'
import RegisterDialog from './components/registration/registerDialog'

Vue.config.productionTip = false
Vue.component('app-alert', AlertCmp)
Vue.component('app-edit-meetup', EditMeetup)
Vue.component('app-edit-date', EditMeetupDate)
Vue.component('app-register-dialog', RegisterDialog)

Vue.filter('date', DateFilter)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created () {
    var firebaseApp = {
      apiKey: 'AIzaSyCzO5vnNt2sW8PKy63zGWhFrb3JHEB8ni8',
      authDomain: 'devmeetup-81b1c.firebaseapp.com',
      projectId: 'devmeetup-81b1c',
      storageBucket: 'gs://devmeetup-81b1c.appspot.com',
      messagingSenderId: '681393389025',
      appId: '1:681393389025:web:866370624dbd4d2dcee6a0'
    }
    firebase.initializeApp(firebaseApp)

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })

    this.$store.dispatch('loadMeetups')
  }
}).$mount('#app')
