<template>
  <v-app id="app">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      dark
    >
      <v-list dense>
        <v-list-tile @click="handleSideNavClick('/')">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="handleSideNavClick('/printing')">
          <v-list-tile-action>
            <v-icon>brush</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>3D Printing</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="handleSideNavClick('/electronics')">
          <v-list-tile-action>
            <v-icon>bolt</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Electronics</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="deep-purple darken-4 toolbar" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <span>Gill</span>
        <span class="font-weight-light">Rocks</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://www.hackster.io/ryanjgill2"
        target="_blank"
      >
        <v-icon>fab fa-hackerrank</v-icon>
      </v-btn>
      <v-btn
        flat
        href="https://github.com/ryanjgill"
        target="_blank"
      >
        <v-icon>fab fa-github</v-icon>
      </v-btn>
      <v-btn
        flat
        href="https://twitter.com/ryanjgill2?lang=en"
        target="_blank"
      >
        <v-icon>fab fa-twitter</v-icon>
      </v-btn>
      <v-btn
        flat
        href="https://www.youtube.com/channel/UCT2PSrm4tvfGmnKqzazHzgQ/videos"
        target="_blank"
      >
        <v-icon>fab fa-youtube</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height grey lighten-3>
        <v-layout row wrap>
          <v-flex xs12>
            <router-view/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="grey darken-4" >
      <v-layout row>
        <v-flex class="white--text text-xs-center" xs12>
          &copy; {{new Date().getFullYear()}}
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data () {
    return {
      drawer: null
    }
  },
  methods: {
    handleSideNavClick(path) {
      // route to link
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss">
body {
  overflow-x: hidden;
}

.toolbar a.v-btn {
  margin: 0;
  min-width: 44px;
}

@media screen and (max-width: 450px) {
  .toolbar a.v-btn {
    margin: 0;
    min-width: 12px;
    width: 12px;
  }
}
</style>
