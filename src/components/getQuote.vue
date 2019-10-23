<template>
  <v-content>
    <v-container fluid>
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="10">
          <v-card>
            <v-card-actions>
              <v-text-field
              label="Ingrese un id para obtener una frase"
              hint="Por ejemplo '5dafba4a2e27352b48546156'"
              v-model="idOfQuote"
              ></v-text-field>
              <v-btn
                color="green"
                v-on:click="getQuote"
              >Obtener registro</v-btn>
              <v-snackbar v-model="snackbar" :color="this.color">
                {{ this.text }}
                <v-btn
                    color="black"
                    text
                    @click="snackbar = false"
                >
                    Close
                </v-btn>
                </v-snackbar>
            </v-card-actions>
            <v-card-text class="headline black--text font-italic" align="center">{{ this.quote }}</v-card-text>
            <v-img v-bind:src="this.image"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'getQuote',
  data: () => ({
    idOfQuote: '',
    quote: '',
    image: '',
    text: '',
    color: '',
    snackbar: false
  }),
  methods: {
    getQuote () {
      this.$http.get(`http://localhost:8081/api/v1/getQuote/${this.idOfQuote}`)
        .then((response) => {
          this.quote = response.body.quote
          this.image = response.body.image
        })
        .catch((response) => {
          this.quote = ''
          this.image = ''
          this.snackbar = true
          this.text = '¡Error! El registro no se ha encontrado.'
          this.color = 'error'
        })
    }
  }
}
</script>
