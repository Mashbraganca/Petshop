<template>
  <v-app style=" background: #B388FF background: -webkit-linear-gradient(to bottom, #EA80FC, #82B1FF, #B388FF); 
background: linear-gradient(to bottom, #EA80FC, #82B1FF, #B388FF);">
    <NavbarAdm/>
    <div class="client">
      <div><v-row>a</v-row></div>
      <div class="ClientReg">
        <v-card 
        class="ma-auto"
        elevation-15
        max-width="900"
        >
          <v-card-title primary-title>
            Registrar novo produto:
          </v-card-title>
          <v-form v-model="valid">
            <v-container grid-list-xs>
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field 
                  v-model="name"
                  :rules="nameRules"
                  :counter="30"
                  label="Nome"
                  required
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field 
                  v-model="quantidade"
                  :rules="quantidadeRules"
                  label="Quantidade"
                  required
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-select
                    v-model="select"
                    :items="category"
                    :rules="[v => !!v || 'Item is required']"
                    label="Categoria"
                    required
                    ></v-select>

                </v-col>
                
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    v-model="price"
                    :rules="priceRules"
                    label="Preço"
                    required
                  ></v-text-field>

                </v-col>

                <v-col
                  cols="12"
                  md="12"
                >
                  <v-text-field
                    v-model="descrição"
                    
                    label="Descrição"
                    
                  ></v-text-field>

                </v-col>

                <v-col
                cols="12"
                md="1"
                ></v-col>
                
                <v-col
                  cols="12"
                  md="3"
                >
                  <v-avatar size=160px>
                    <img :src=photo alt="Profile Picture">
                  </v-avatar>

                </v-col>
                <v-col
                  cols="12"
                  md="8"
                >
                  <v-file-input
                    :rules="rules"
                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="Escolha uma foto"
                    prepend-icon="mdi-camera"
                    label="Foto do Produto"
                  ></v-file-input>
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
    </div>
  </v-app>
  
</template>

<script>
import NavbarAdm from '@/components/NavbarAdm'

export default {
  name: 'App',
  components: { NavbarAdm },
  

  data: () => ({
    valid: false,
      firstname: '',
      quantidade: '',
      nameRules: [
        v => !!v || 'Requer nome',
        v => v.length <= 30 || 'Nome tem que ter menos que 30 caracteres',
      ],
      quantidadeRules: [
        v => !!v || 'Requer quantidade',
        v => /^[0-9]*$/.test(v)   || 'Número tem que ser válido',
      ],
      select: null,
      category: [
          'Ração',
          'Acessório',
          'Remédios',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      price: '',
      priceRules: [
        v => !!v || 'Requer preço',
        v => /^[0-9]*$/.test(v)   || 'Número tem que ser válido'
      ],
      photo: 'https://i.pinimg.com/originals/e5/fd/57/e5fd57ea7871c00676e95bbe668cbc8f.jpg',
      photoRule: [
        value => !value || value.size < 2000000 || 'A foto de profile tem que ser menos de 2MB!',
      ],
  }),
};
</script>