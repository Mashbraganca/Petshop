<template>
  <v-app style=" background: #AD97FF ">
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
            Registrar novo cliente:
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
                  :counter="15"
                  label="Nome"
                  required
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field 
                  v-model="lastname"
                  :rules="lastnameRules"
                  :counter="30"
                  label="Sobrenome"
                  required
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  ></v-text-field>

                </v-col>
                
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    v-model="phone"
                    :rules="phoneRules"
                    label="Telefone"
                    required
                  ></v-text-field>

                </v-col>

                <v-col
                  cols="12"
                  md="12"
                >
                  <v-text-field
                    v-model="endereço"
                    
                    label="Endereço"
                    
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
                    label="Foto de Profile"
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
      lastname: '',
      nameRules: [
        v => !!v || 'Requer nome',
        v => v.length <= 15 || 'Nome tem que ter menos que 15 caracteres',
      ],
      lastnameRules: [
        v => !!v || 'Requer sobrenome',
        v => v.length <= 30 || 'Sobrenome tem que ter menos que 30 caracteres',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      phone: '',
      phoneRules: [
        v => !!v || 'Requer número de telefone',
        v => /^[0-9]*$/.test(v)   || 'Número tem que ser válido'
      ],
      photo: './profile-placeholder.png',
      photoRule: [
        value => !value || value.size < 2000000 || 'A foto de profile tem que ser menos de 2MB!',
      ],
  }),
};
</script>