<template>
    <v-container>
        <v-row wrap>
            <v-col cols="12" xs="12" sm="6" class="text-center">
                <v-btn large router to="/meetups" class=" blue darken-1 white--text btn">Explore Meetups</v-btn>
            </v-col>
            <v-col cols="12" xs="12" sm="6"  class="text-center">
                <v-btn large route to="/meetup/new" class=" blue darken-1 white--text btn">Organize Meetup</v-btn>
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
                <v-carousel cycle height="auto" style="cursor: pointer;" v-if="!loading">
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
            <v-col class="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga distinctio assumenda exercitationem, nemo quasi eius modi nulla temporibus, sit ex explicabo sunt quisquam laborum excepturi adipisci magni non, reiciendis perferendis magnam provident est. Nesciunt id molestiae placeat nemo officiis facere quas! Molestiae tempore accusantium atque id repudiandae esse, ullam animi.</v-col>
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

@media (max-width: 767px) {
  .btn {
      height: 35px !important;
      bottom: 0 !important;
  }
  .title {
    font-size : 1em;
    font-style: italic;
    padding: 5px;
}
}
@media (max-width: 479px) {
  .title {
    font-size : 1.2rem;
    font-style: italic;
    padding: 3px;
}
}
</style>
