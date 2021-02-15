<template>
    <v-dialog width="350px" persistent v-model="editDialog">
        <template v-slot:activator="{ on, attrs }">
        <v-btn  depressed small accent v-bind="attrs" v-on="on" class="blue--text lighten-1">
          Edit Date
        </v-btn>
      </template>

    <v-card>
        <v-card-title>
          <span class="headline">Edit Meetup Date</span>
        </v-card-title>
        <v-divider></v-divider>

        <v-card-text>
          <v-container>
            <v-row xs="12">
                <v-date-picker v-model="editableDate" style="width: 100%" color="purple lighten-1 white--text" actions>
                    <tamplate scope="{save, cancel}">
                        <v-btn
                        class="blue--text darken-1"
                        depressed
                        @click.native="editDialog = false">Close</v-btn>
                        <v-btn
                        class="blue--text darken-1"
                        depressed
                        @click.native="onSaveChanges">Save</v-btn>
                    </tamplate>
                </v-date-picker>
            </v-row>
          </v-container>

        </v-card-text>
      </v-card>

    </v-dialog>
</template>

<script>
export default {
  props: ['meetup'],
  data () {
    return {
      editDialog: false,
      editableDate: null
    }
  },
  methods: {
    onSaveChanges () {
      const newDate = new Date(this.meetup.date)
      const newDay = new Date(this.editableDate).getUTCDate()
      const newMonth = new Date(this.editableDate).getUTCMonth()
      const newYear = new Date(this.editableDate).getUTCFullYear()
      newDate.setUTCDate(newDay)
      newDate.setUTCMonth(newMonth)
      newDate.setUTCFullYear(newYear)
      this.$store.dispatch('updateMeetupData', {
        id: this.meetup.id,
        date: newDate
      })
    }
  },
  created () {
    this.editableDate = new Date(this.meetup.date)
  }
}
</script>
