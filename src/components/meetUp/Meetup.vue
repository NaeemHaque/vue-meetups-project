<template>
<v-container>

    <v-row wrap v-if="loading">
      <v-col xs="12" class="text-center">
        <v-progress-circular
          indeterminate
          color="primary"
          :width="7"
          :size="70"
          v-if="loading"
          ></v-progress-circular>
      </v-col>
    </v-row>

    <v-row  wrap v-else>
        <v-col xs="12">
            <v-card>

                <v-card-title class="cyan accent-2">{{ meetup.title }}
                  <template v-if="userIsCreator">
                    <v-spacer></v-spacer>
                    <app-edit-meetup :meetup="meetup"></app-edit-meetup>
                  </template>
                </v-card-title>

                <v-img :src=" meetup.imageUrl " height="250px"></v-img>
                <v-card-title class="blue--text lighten-1">
                  <div>{{ meetup.date | date }} - {{ meetup.location }}.</div>
                  <!-- <div><app-edit-date :meetup="meetup" v-if="userIsCreator"></app-edit-date></div> -->
                </v-card-title>
                <v-card-text class="text-justify">{{ meetup.description }}</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <app-register-dialog
                    :meetupId="meetup.id"
                    v-if="userIsAuthenticated && !userIsCreator"
                    ></app-register-dialog>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    meetup () {
      return this.$store.getters.loadMeetup(this.id)
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    },
    userIsCreator () {
      if (!this.userIsAuthenticated) {
        return false
      }
      return this.$store.getters.user.id === this.meetup.creatorId
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>
