<template>
  <v-dialog width="350px" persistent v-model="registerDialog">
      <template v-slot:activator="{ on, attrs }">
        <v-btn  depressed small accent v-bind="attrs" v-on="on" class="cyan accent-2 pa-2">
          {{ userIsRegistered ? 'Unregister' : 'Register' }}
        </v-btn>
      </template>

    <v-card>
      <v-container>
        <v-row wrap>
          <v-col xs="12">
            <v-card-title v-if="userIsRegistered">Unregister from Meetup?</v-card-title>
            <v-card-title v-else>Register for Meetup?</v-card-title>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row row wrap>
          <v-col xs="12">
            <v-card-text>You can always change your decision later on.</v-card-text>
          </v-col>
        </v-row>
        <v-row row wrap>
          <v-col xs="12">
            <v-card-actions>
              <v-btn
                class="red--text darken-1"
                depressed
                @click="registerDialog = false">Cancel</v-btn>
              <v-btn
                class="green--text darken-1"
                depressed
                @click="onAgree">Confirm</v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['meetupId'],
  data () {
    return {
      registerDialog: false
    }
  },
  computed: {
    userIsRegistered () {
      return this.$store.getters.user.registeredMeetups.findIndex(meetupId => {
        return meetupId === this.meetupId
      }) >= 0
    }
  },
  methods: {
    onAgree () {
      if (this.userIsRegistered) {
        this.$store.dispatch('unregisterUserFromMeetup', this.meetupId)
      } else {
        this.$store.dispatch('registerUserForMeetup', this.meetupId)
      }
    }
  }
}
</script>
