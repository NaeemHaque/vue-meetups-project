<template>
<v-container>
    <v-row wrap  v-for="meetup in meetups" :key="meetup.id">
        <v-col xs="12" md="8" sm="10" offset-sm="1" offset-md="2">
            <v-card class="cyan accent-2">
                <v-container fluid>
                    <v-row>
                        <v-col xs="6" md="5" sm="6">
                            <v-img :src="meetup.imageUrl" height="auto"></v-img>
                        </v-col>
                        <v-col xs="6" md="7" sm="6">
                            <v-card-title>{{ meetup.title }}</v-card-title>
                            <v-card-subtitle>{{ meetup.date | date }}</v-card-subtitle>
                            <v-card-actions>
                                <v-btn depressed class="cyan accent-2" small :to="'/meetups/'+ meetup.id" >
                                    <v-icon left>arrow_forward</v-icon>
                                    <span>View Meetup</span>
                                </v-btn>
                            </v-card-actions>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
  computed: {
    meetups () {
      return this.$store.getters.loadMeetups
    }
  }
}
</script>
