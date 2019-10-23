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
              ></v-text-field>
              <v-btn
                color="green"
                block
                v-on:click="getQuote"
              >Obtener frase</v-btn>
            </v-card-actions>
            <v-card-text class="headline black--text font-italic" align="center"> {{ this.quote }}</v-card-text>
            <br>
            <v-img v-bind:src="this.image"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'getImage',
  data: () => ({
    quote: '',
    image: ''
  }),
  methods: {
    getQuote () {
      this.$http.get(`http://localhost:8081/api/v1/generate-changing-life-quote`)
        .then((response) => {
          console.log(response.body)
          this.quote = response.body.quote
          this.image = response.body.image
        })
    }
  }
}

</script>
