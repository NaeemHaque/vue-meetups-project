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
            <v-form @submit.prevent="onCreateMeetup">
                <v-row>
                    <v-col xs="12" sm="6" offset-sm="3">
                        <v-text-field v-model="location" name="location" label="Location*" id="location" required></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col xs="12" sm="6" offset-sm="3">
                        <v-btn depressed small raised @click="onPickFile" class="blue darken-1 white--text">Upload Image</v-btn>
                        <input type="file" style="display: none" ref="fileInput" accept="image/*" @change="onFilePicked">
                    </v-col>
                </v-row>
                <v-row>
                    <v-col xs="12" sm="6" offset-sm="3">
                        <v-img :src="imageUrl" height="250" v-if="this.image"></v-img>
                    </v-col>
                </v-row>
                 <v-row>
                    <v-col xs="12" sm="6" offset-sm="3">
                        <v-textarea name="description" label="Description" id="description" v-model="description"></v-textarea>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col xs="12" sm="6" offset-sm="3">
                        <v-date-picker v-model="date" color="blue darken-1 white--text"></v-date-picker>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col xs="12" sm="6" offset-sm="3">
                        <v-time-picker ampm-in-title v-model="time" color="blue darken-1 white--text"></v-time-picker>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col xs="12" sm="6" offset-sm="3">
                        <v-btn depressed class="blue darken-1 white--text" type="submit" :disabled="!formIsVallid">Create Meetup</v-btn>
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
      time: '',
      image: null
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
      return date
    }
  },
  methods: {
    onCreateMeetup () {
      if (!this.formIsVallid) {
        return
      }
      if (!this.image) {
        return
      }
      const meetupData = {
        title: this.title,
        location: this.location,
        image: this.image,
        description: this.description,
        date: this.submittableDateTime
      }
      this.$store.dispatch('createMeetup', meetupData)
      this.$router.push('/meetups')
    },
    onPickFile () {
      this.$refs.fileInput.click()
    },
    onFilePicked (event) {
      const files = event.target.files
      var filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Please add a valid file')
      }
      const filereader = new FileReader()
      filereader.addEventListener('load', () => {
        this.imageUrl = filereader.result
      })
      filereader.readAsDataURL(files[0])
      this.image = files[0]
    }
  }
}
</script>
