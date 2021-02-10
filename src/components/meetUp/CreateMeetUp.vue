<template>
<v-container>
    <v-row>
        <v-col xs="12" offset-sm="3">
            <p class="headline blue--text lighten-1">Create a new Meetup</p>
        </v-col>
    </v-row>
    <v-row>
        <v-col xs="12">
            <v-form>
                <v-row>
                    <v-col xs="12" sm="6" offset-sm="3">
                        <v-text-field v-model="title" name="title" label="Title*" id="title" required></v-text-field>
                    </v-col>
                </v-row>
            </v-form>
        </v-col>
    </v-row>
    <v-row>
        <v-col xs="12">
            <v-form @submit.prevent="onCreate">
                <v-row>
                    <v-col xs="12" sm="6" offset-sm="3">
                        <v-text-field v-model="location" name="location" label="Location*" id="location" required></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col xs="12" sm="6" offset-sm="3">
                        <v-text-field v-model="imageUrl" name="imageUrl" label="Image URL*" id="imageUrl" required></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col xs="12" sm="6" offset-sm="3">
                        <v-img :src="imageUrl" height="250px"></v-img>
                    </v-col>
                </v-row>
                 <v-row>
                    <v-col xs="12" sm="6" offset-sm="3">
                        <v-textarea name="description" label="Description" id="description" v-model="description"></v-textarea>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col xs="12" sm="6" offset-sm="3">
                        <v-date-picker v-model="date" color="purple lighten-1 white--text"></v-date-picker>
                        <p> {{ date }}</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col xs="12" sm="6" offset-sm="3">
                        <v-time-picker ampm-in-title v-model="time" color="purple lighten-1 white--text"></v-time-picker>
                        <p> {{ time }}</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col xs="12" sm="6" offset-sm="3">
                        <v-btn depressed class="purple lighten-1 white--text pa-2" type="submit">Create Meetup</v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      location: '',
      description: '',
      imageUrl: '',
      date: '',
      time: ''
    }
  },
  computed: {
    formIsVallid () {
      return this.title !== '' && this.location !== '' && this.description !== '' && this.imageUrl !== ''
    },
    submittableDateTime () {
      const date = new Date(this.date)
      if (typeof this.time === 'string') {
        var hours = this.time.match(/^(\d+)/)[1]
        var minutes = this.time.match(/:(\d+)/)[1]
        date.setHours(hours)
        date.setMinutes(minutes)
      } else {
        date.setHours(this.time.getHours())
        date.setMinutes(this.time.getMinutes())
      }
      console.log(date)
      return date
    }
  },
  methods: {
    onCreate () {
      const meetupData = {
        title: this.title,
        location: this.location,
        imageUrl: this.imageUrl,
        description: this.description,
        date: this.submittableDateTime
      }
      this.$store.dispatch('createMeetup', meetupData)
      this.$router.push('/meetups')
    }
  }
}
</script>
