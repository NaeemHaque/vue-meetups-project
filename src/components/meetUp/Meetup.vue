<template>
<v-container>
    <v-row  wrap>
        <v-col xs="12">
            <v-card>
                <v-card-title class="blue--text lighten-1">{{ meetup.title }}</v-card-title>
                <v-img :src=" meetup.imageUrl " height="350px"></v-img>
                <v-card-title class="blue--text lighten-1">{{ meetup.date }} - {{ meetup.location }}.</v-card-title>
                <v-card-text class="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum nostrum exercitationem minus dignissimos illum, totam voluptatibus vero laboriosam, saepe laudantium illo repudiandae quibusdam quidem ipsam pariatur ut, possimus itaque ipsum reiciendis reprehenderit dolorum? Veniam architecto laborum recusandae ab magni? Voluptate, excepturi. Voluptates a eius ullam  itaque mollitia et! Optio delectus quidem fugiat quia esse!</v-card-text>
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
