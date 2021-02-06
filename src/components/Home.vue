<template>
    <v-container>
        <v-row wrap>
            <v-col cols="12" xs="12" sm="6" class="text-center">
                <v-btn large router to="/meetups" class=" purple lighten-1 white--text">Explore Meetups</v-btn>
            </v-col>
            <v-col cols="12" xs="12" sm="6"  class="text-center">
                <v-btn large route to="/meetup/new" class=" purple lighten-1 white--text">Organize Meetup</v-btn>
            </v-col>
        </v-row
>
        <v-row wrap>
            <v-col xs="12">
                <v-carousel cycle height="450" style="cursor: pointer;">
                    <v-carousel-item
                    v-for="(meetup) in meetups"
                    :key="meetup.id"
                    :src="meetup.imageUrl"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                    @click="onLoadMeetup(meetup.id)"
                    >
                    <div class="title">{{ meetup.title  }}</div>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>

        <v-row wrap>
            <v-col cols="12" xs="12" class="text-center">
                <p>Join Our Awsomwe Meetup!</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
  data () {
    return {
      meetups: [
        { imageUrl: 'siu.jpg', id: 'siu1234', title: 'Meetup in SIU' },
        { imageUrl: 'sust.jpg', id: 'sust1234', title: 'Meetup in SUST' },
        { imageUrl: 'lu.jpg', id: 'lu1234', title: 'Meetup in LU' }

      ]
    }
  },
  methods: {
    onLoadMeetup (id) {
      this.$router.push('/meetups/' + id)
    }
  }
}
</script>

<style scoped>
.title {
    position: absolute;
    bottom: 0px;
    font-size : 2em;
    text-align : center;
    text-justify: center;
    font-style: italic;
    background: rgba(0, 0, 0, 0.25);
    padding: 10px;
}
</style>
