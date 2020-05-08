<template>
  <v-app style=" background: #B388FF background: -webkit-linear-gradient(to bottom, #EA80FC, #82B1FF, #B388FF); 
background: linear-gradient(to bottom, #EA80FC, #82B1FF, #B388FF);">
    <NavbarAdm/>
    <div class="client">
      <div><v-row>a</v-row></div>
      <div class="ClientReg">
        <v-card 
        class="ma-auto elevation-15"
        max-width="900"
        >
          <v-card-title primary-title>
            Registrar nova Categoria:
          </v-card-title>
          <v-form v-model="valid">
            <v-container grid-list-xs>
              <v-row>
                <v-col
                  cols="12"
                  md="12"
                >
                  <v-text-field
                        label="Categorias"
                        append-outer-icon="mdi-plus-thick"
                    ></v-text-field>
                </v-col>

               
                <v-col
                cols="12"
                md="8"
                ></v-col>

                <v-col
                cols="12"
                md="4"
                >
                  <v-btn large color="primary">Submeter</v-btn>
                </v-col>


              </v-row>
            </v-container>
          </v-form>

        </v-card>
      </div>
      <div><v-row>a</v-row></div>
      <div>
          <v-card
          v-for="category in categories" :key="category" 
            class="mx-auto my-6 elevation-10"
            max-width="900"
          >
          <v-card-title primary-title>
              {{category}}
          </v-card-title>
              
          </v-card>
      </div>
    </div>
  </v-app>
  
</template>

<script>
import NavbarAdm from '@/components/NavbarAdm'

export default {
  name: 'App',
  components: { NavbarAdm },
  

  data: () => ({
    
      categories: [
          'Ração',
          'Acessório',
          'Remédios',
      ],
      
  }),
};
</script>