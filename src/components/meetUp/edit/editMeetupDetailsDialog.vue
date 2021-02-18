<template>
    <v-dialog width="350px" persistent v-model="editDialog">
        <template v-slot:activator="{ on, attrs }">
            <v-btn fab depressed small accent v-bind="attrs" v-on="on" class="cyan accent-2">
                <v-icon>edit</v-icon>
            </v-btn>
       </template>

    <v-card>
        <v-card-title>
          <span class="headline">Edit Meetup</span>
        </v-card-title>
        <v-divider></v-divider>

        <v-card-text>
          <v-container>
            <v-row>

              <v-col cols="12">
                <v-text-field name="title" label="Title" id="title" v-model="editedTitle" required></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-textarea name="description" label="Description" id="description" v-model="editedDescription"></v-textarea>
              </v-col>

            </v-row>
          </v-container>

        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="pa-2">
            <v-btn  depressed class="blue--text darken-1" @click="editDialog = false">Close</v-btn>
            <v-btn depressed class="blue--text darken-1" @click="onSaveChanges">Save</v-btn>
        </v-card-actions>
      </v-card>

    </v-dialog>
</template>>

<script>

export default {
  props: ['meetup'],
  data () {
    return {
      editDialog: false,
      editedTitle: this.meetup.title,
      editedDescription: this.meetup.description
    }
  },
  methods: {
    onSaveChanges () {
      if (this.editedTitle.trim() === '' || this.editedDescription.trim() === '') {
        return
      }
      this.editDialog = false
      this.$store.dispatch('updateMeetupData', {
        id: this.meetup.id,
        title: this.editedTitle,
        description: this.editedDescription
      })
    }
  }
}
</script>
