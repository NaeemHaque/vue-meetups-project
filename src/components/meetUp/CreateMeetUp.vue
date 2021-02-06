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
            <v-form>
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
                        <v-textarea name="description" label="Description" id="description"></v-textarea>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col xs="12" sm="6" offset-sm="3">
                        <v-btn depressed class="purple lighten-1 white--text pa-2">Create Meetup</v-btn>
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
      imageUrl: ''
    }
  },
  computed: {
    formIsVallid () {
      return this.title !== '' && this.location !== '' && this.description !== '' && this.imageUrl !== ''
    }
  }
}
</script>
