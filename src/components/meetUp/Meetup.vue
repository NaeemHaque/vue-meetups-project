<template>
<v-container>
    <v-row  wrap>
        <v-col xs="12">
            <v-card>
                <v-card-title class="blue--text lighten-1">{{ meetup.title }}</v-card-title>
                <v-img :src=" meetup.imageUrl " height="250px"></v-img>
                <v-card-title class="blue--text lighten-1">{{ meetup.date | date }} - {{ meetup.location }}.</v-card-title>
                <v-card-text class="text-justify">{{ meetup.description }}</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn depressed class="purple lighten-1 white--text pa-2">Register</v-btn>
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
    }
  }
}
</script>
