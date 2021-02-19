<template>
  <v-footer
    dark
    padless
    class=" purple lighten-1 text-center"
  >
    <v-card flat tile class="flex purple lighten-1 text-center">
        <v-container>
            <v-row>
                <v-col cols="12" class="ma-0 py-2">Get connected with me on social networks!</v-col>

                <v-col cols="12" class="ma-0 pa-0">
                    <v-btn
                    v-for="data in social"
                    :key="data.link"
                    class="mx-4 text-center"
                    dark
                    icon
                    :href="data.link"
                    target="_blank"
                    >
          <v-icon size="24px">
            {{ data.icon }}
          </v-icon>
        </v-btn>
            </v-col>
            </v-row>
        </v-container>

      <v-card-text class="grey darken-3 py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Naeem Haque</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    social: [
      { icon: 'mdi-facebook', link: 'https://www.facebook.com/naeem.haque.712' },
      { icon: 'mdi-twitter', link: 'https://twitter.com/NaeemHaque5' },
      { icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/gulam-sarwer-8626101a3/' },
      { icon: 'mdi-instagram', link: 'https://www.instagram.com/haque_naeem/' }
    ]
  })
}
</script>
