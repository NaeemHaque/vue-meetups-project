<template>
    <v-container>
        <v-row wrap>
            <v-col cols="12" xs="12" sm="6" class="text-center">
                <v-btn large router to="/meetups" class=" blue darken-1 white--text">Explore Meetups</v-btn>
            </v-col>
            <v-col cols="12" xs="12" sm="6"  class="text-center">
                <v-btn large route to="/meetup/new" class=" blue darken-1 white--text">Organize Meetup</v-btn>
            </v-col>
        </v-row>

        <v-row>
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

        <v-row wrap>
            <v-col xs="12">
                <v-carousel cycle height="450" style="cursor: pointer;" v-if="!loading">
                    <v-carousel-item
                    v-for="(meetup) in meetups"
                    :key="meetup.id"
                    :src="meetup.imageUrl"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                    @click="onLoadMeetup(meetup.id)"
                    >
                    <div class="title">{{ meetup.title  }} - {{ meetup.location }}</div>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>

        <v-row wrap>
            <v-col cols="12" xs="12" class="text-center">
                <p class="headline">Join Our Awsomwe Meetup!</p>
            </v-col>
            <v-col class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam magni exercitationem quaerat sapiente natus dolor doloribus architecto in eum excepturi asperiores quibusdam tempora sequi, eligendi unde neque tempore temporibus voluptatum, iusto vel enim! Ullam iusto illum aliquam nulla aspernatur nihil consequuntur temporibus voluptatibus. Sed ut quos mollitia hic odit nulla modi repellat, non omnis, aliquam quae in molestiae. Ducimus, nihil. Quam enim vitae officia veritatis laboriosam voluptatem possimus dolor nihil, repellendus amet deleniti a assumenda odio, perferendis maxime placeat aliquid accusamus voluptas facere, dolorem ipsum velit recusandae debitis ut. Natus eius dolore tempora quas in? Vero dolorem quod fugiat.</v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
  computed: {
    meetups () {
      return this.$store.getters.featureMeetups
    },
    loading () {
      return this.$store.getters.loading
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
