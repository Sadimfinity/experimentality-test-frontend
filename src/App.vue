<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      app
      color="grey lighten-4"
    >
      <v-list
        dense
        class="grey lighten-4"
      >
        <template>
          <v-row>
              <v-list-item-title>
                <router-link to="/" tag="button">
                <v-btn
                  text
                  large
                >
                  {{ Home }}
                </v-btn>
                </router-link>
              </v-list-item-title>
          </v-row>
          <v-row>
              <v-list-item-title>
                <router-link to="/getQuote" tag="button">
                <v-btn
                  text
                  large
                >
                  {{ getRegister }}
                </v-btn>
                </router-link>
              </v-list-item-title>
          </v-row>
          <v-row
            align="center"
          >
              <v-list-item-title>
                <router-link to="/deleteQuote" tag="button">
                <v-btn
                  text
                  large
                >
                {{ deleteRegister }}
                </v-btn>
                </router-link>
              </v-list-item-title>
          </v-row>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase">
        <img src="https://www.experimentality.co/wp-content/uploads/2017/04/experimentalitycerebro.png" width="40" height="40">
        <span>EXPERIMENTALITY</span>
        <span class="font-weight-light"> TEST</span>
      </v-toolbar-title>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    deleteRegister: 'Borrar Registro',
    getRegister: 'Obtener Registro',
    Home: 'Inicio',
    items: [
      { text: '   Obtener frase' },
      { divider: true },
      { text: '   Eliminar frase' }
    ]
  })
}

</script>
