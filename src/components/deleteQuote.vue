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
                v-on:click="deleteQuote()"
                @click="snackbar = true"
              >Borrar registro</v-btn>
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
    text: '',
    color: ''
  }),
  methods: {
    deleteQuote () {
      this.$http.delete(`http://localhost:8081/api/v1/deleteQuote/${this.idOfQuote}`)
        .then((response) => {
          this.text = 'Registro eliminado exitosamente.'
          this.color = 'success'
        })
        .catch((response) => {
          this.text = '¡Error! El registro no se ha encontrado.'
          this.color = 'error'
        })
    }
  }
}
</script>
