<template>
    <div>
        <v-navigation-drawer
        v-model="drawer"
        clipped
        fixed
        app
        >
        <v-list dense>
            <v-list-tile to='/'>
            <v-list-tile-action>
                <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
            </v-list-tile>
            <v-list-group>
            <v-list-tile slot="activator">
                <v-list-tile-action>
                <v-icon>flare</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                <v-list-tile-title>Star Systems</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile to='/systems/generator'>
                <v-list-tile-action>
                <v-icon>add_circle</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                <v-list-tile-title>Generator Demo</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-action>
                <v-icon>settings</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                <v-list-tile-title>Settings</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            </v-list-group>
            <v-list-tile to='/about'>
            <v-list-tile-action>
                <v-icon>info</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>About</v-list-tile-title>
            </v-list-tile-content>
            </v-list-tile>
            <v-list-tile to='/registration'>
            <v-list-tile-action>
                <v-icon>input</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>Register</v-list-tile-title>
            </v-list-tile-content>
            </v-list-tile>
        </v-list>
        </v-navigation-drawer>
        <v-toolbar app fixed clipped-left>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Drakolis NewAge</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click="showHint()">
                <v-icon>help</v-icon>
            </v-btn>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
    data: () => ({
        drawer: true
    }),
    methods: {
        showHint: function() {this.$store.commit('showHint')}
    }
    }
</script>
