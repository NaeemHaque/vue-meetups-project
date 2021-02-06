<template>
  <v-app>
    <v-navigation-drawer
    v-model="sideNav"
    absolute>
      <v-list class="mt-15">
        <v-list-item v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar dark app class="purple lighten-1">
      <v-app-bar-nav-icon @click="sideNav = !sideNav" class="hidden-sm-and-up">

      </v-app-bar-nav-icon>

      <v-toolbar-title>
        <router-link to="/" v-slot="{ navigate }" custom style="cursor: pointer">
          <span  @click="navigate">DevMeetup</span>
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn depressed class="hidden-xs-only purple lighten-1" v-for="item in menuItems" :key="item.title" :to="item.link">
        <v-icon left>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>

      <v-toolbar-items>

      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    sideNav: false,
    menuItems: [
      { icon: 'people', title: 'View Meetups', link: '/meetups' },
      { icon: 'room', title: 'Organize Meetup', link: '/meetup/new' },
      { icon: 'person', title: 'Profile', link: '/profie' },
      { icon: 'face', title: 'Sign up', link: '/signup' },
      { icon: 'lock_open', title: 'Sign in', link: '/Signin' }
    ]
  })
}
</script>
