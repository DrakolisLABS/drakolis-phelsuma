<template>
  <v-app id="app" dark style='-webkit-user-select: none'>
    <title-bar/>
    <v-content >
      <v-container grid-list-sm>
        <!--
        <v-layout row wrap>
          <v-flex xs2 v-for="image in images">
          <v-card hover flat tile>
            <v-card-media
            :src="image.path"
            height="150px"
            ></v-card-media>
          </v-card>
          </v-flex>
        </v-layout>
        -->
        <demo/>
      </v-container>
    </v-content>
    <status-bar v-if="dev"/>
  </v-app>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'
import StatusBar from './components/window/StatusBar.vue'
import TitleBar from './components/window/TitleBar.vue'
import NavList from './components/navigation/NavList.vue'
import {getDirectoryImages} from './internal/diskreader'

// Helpers
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.teal.darken1
  }
})

export default {
  data: () => ({
      images: getDirectoryImages(),
      dev: true
  }),
  components: {
    'status-bar': StatusBar,
    'title-bar': TitleBar,
    'demo': NavList
  },
  props: {
    source: String
  }
}
</script>

<style>
::-webkit-scrollbar { display: none; }
.drag {
  width: 100vw;
  height: 100vh;
  -webkit-app-region: drag !important;
}
.no-drag {
  -webkit-app-region: no-drag !important;
}
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
