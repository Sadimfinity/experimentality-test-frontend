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
              label="Ingrese un id para eliminar un registro"
              hint="Por ejemplo '5dafba4a2e27352b48546156'"
              v-model="idOfQuote"
              ></v-text-field>
              <v-btn
                color="red"
                @click="snackbar = true"
                v-on:click="deleteQuote"
              >Borrar registro</v-btn>
                <v-snackbar
                v-model="snackbar"
                >
                {{ text }}
                <v-btn
                    color="pink"
                    text
                    @click="snackbar = false"
                >
                    Close
                </v-btn>
                </v-snackbar>
              <br>
              <br>
              <br>
            </v-card-actions>
            </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'deleteQuote',
  data: () => ({
    idOfQuote: '',
    snackbar: false,
    text: 'Registro eliminado exitosamente'
  }),
  methods: {
    deleteQuote () {
      this.$http.delete(`http://localhost:8081/api/v1/deleteQuote/${this.idOfQuote}`)
        .then((response) => {
          console.log(response.body)
        })
    }
  }
}
</script>
