<template>
<v-container>
    <v-row v-if="error">
        <v-col xs="12" sm="6" offset-sm="3">
            <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
        </v-col>'
    </v-row>
    <v-row>
        <v-col xs="12" sm="6" offset-sm="3">
            <v-card>
                <v-card-text>
                    <v-container>
                        <form @submit.prevent="onSignin">
                            <v-row>
                            </v-row>
                            <v-row>
                                <v-col xs="12">
                                     <v-text-field name="email" label="Email" id="email" v-model="email" type="email" required prepend-icon="email"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col xs="12">
                                    <v-text-field name="password" label="Password" id="password" v-model="password" type="password" required prepend-icon="no_encryption"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col xs="12">
                                    <v-btn :disabled="loading" :loading="loading" type="submit" depressed class="purple lighten-1 white--text p-2">Sign in</v-btn>
                                </v-col>
                            </v-row>
                        </form>
                    </v-container>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      }
    }
  },
  methods: {
    onSignin () {
      this.$store.dispatch('signUserIn', { email: this.email, password: this.password })
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>
