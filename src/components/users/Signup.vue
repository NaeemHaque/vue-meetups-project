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
                        <form @submit.prevent="onSignup">

                            <v-row>
                                <v-col xs="12">
                                     <v-text-field name="email" label="Email" id="email" v-model="email" type="email" required></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col xs="12">
                                    <v-text-field name="password" label="Password" id="password" v-model="password" type="password" required></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col xs="12">
                                    <v-text-field name="confirmPassword" label="Re-enter Password" id="confirmPassword" v-model="confirmPassword" type="password" :rules="[comparedPassword]"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col xs="12">
                                    <v-btn type="submit" depressed :disabled="loading" :loading="loading" class="purple lighten-1 white--text p-2">
                                      Sign up</v-btn>
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
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  computed: {
    comparedPassword () {
      return this.password !== this.confirmPassword ? 'Password not match' : true
    },
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
    onSignup () {
      this.$store.dispatch('signUserUp', { email: this.email, password: this.password })
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>
