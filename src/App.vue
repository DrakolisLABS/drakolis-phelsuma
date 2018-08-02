<template>
  <v-app id="app" dark>
    <navbar/>
    <v-content>
      <v-container fluid fill-height>

          <v-text-field
            value="John Doe"
            label="Regular"

          ></v-text-field>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>Drakolis &copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'
import NavBar from './components/NavBar.vue'
const fs = window.require('fs');
console.log(fs);
// Helpers
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.teal.darken1
  }
})

export default {
  components: {
    navbar: NavBar
  },
  props: {
    source: String
  }
}
</script>

<style>
/*
#app {
  font-family: 'Exo 2', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#viewport {
  padding-top: 1em;
  min-height: 1000px;
  justify-content: center;
  align-items: center;
}

#footer {
  min-height: 200px;
}
*/
</style>
