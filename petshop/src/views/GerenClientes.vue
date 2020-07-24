<template>
  <v-app style=" background: #AD97FF ">
    <NavbarAdm/>
    <div class="Clientes">
        <div class="Geren Clientes">
            <v-container grid-list-xs>
                <v-row>
                    <v-col
                     cols="12"
                     md = "8"
                    >
                    <v-card
                        class="elevation-10"
                        shaped
                    >
                        <v-card-title class="text-uppercase display-2">
                            Clientes
                        </v-card-title>
                    </v-card>
                    </v-col>
                    <v-col
                     cols ="12"
                     md="4"
                    >
                        <v-card
                        class="pt-6 px-6 elevation-10"
                        >
                            <v-text-field
                            dense
                            filled
                            rounded
                            label="Busca"
                            append-icon="mdi-magnify"
                            ></v-text-field>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>

            <v-card
            v-for="item in items" :key="item.firstname" 
            class="mx-auto my-6 elevation-10"
            max-width="900"
            >
            <v-card-title v-text ="item.firstname +' '+ item.lastname"></v-card-title>

            <v-container grid-list-xs>
                <v-row>
                    <v-col
                    cols="12"
                    md="3"
                    >
                    <v-avatar size=160px>
                        <img :src=item.photo alt="Profile Picture">
                    </v-avatar>

                    </v-col>

                    <v-col
                    cols="12"
                    md="9"
                    >
                    <p>Id: {{item.id}}</p>
                    <p>Email: {{item.email}}</p>
                    <br>
                    <p>Telefone: {{item.phone}}</p>
                    <br>
                    <p>Endereço: {{item.endereço}}</p>


                    </v-col>

                    <v-col
                    cols="12"
                    md="6"
                    ></v-col>

                    <v-col
                    cols="12"
                    md="3"
                    >
                        <v-btn 
                        @click="overlay1 = !overlay1"
                        large color="primary">Gerenciar pets</v-btn>
                    </v-col>

                    <v-col
                    cols="12"
                    md="3"
                    >
                        <v-btn large color="primary">Editar</v-btn>
                    </v-col>
                </v-row>
          </v-container>
        </v-card>  
        <v-overlay :value="overlay1" :z-index="1">
            <v-card
             class="mx-auto elevation-10"
             color="light-blue lighten-5 black--text"
             width="900"
            >
                  
                <v-container grid-list-xs>
                    <v-row>
                        <v-col
                         cols="12"
                         md="4"
                        >
                            <v-card-title class="text-uppercase">
                            Animais de estimação
                            </v-card-title> 
                        </v-col>
                        <v-col
                        cols="12"
                         md="6"
                        ></v-col>
                        <v-col
                        cols="12"
                         md="2"
                        >
                            <v-btn
                                fab
                                small
                                @click="overlay1 = false"
                                color="primary"
                            >
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </v-col>
                        <v-col
                        cols="12"
                         md="12"
                        >
                        <v-list
                            v-for="pet in pets"
                            :key="pet.id"
                            no-action
                            class="ma-3 elevation-10"
                            color="indigo darken-2"
                        >
                        
                        <v-list-item-content>
                            <v-col
                            cols="12"
                            md="3"
                            >
                                <v-avatar
                                 size="62"
                                >
                                    <v-img :src=pet.photo></v-img>
                                </v-avatar>
                            </v-col>
                            <v-col
                            cols="12"
                            md="5"
                            >
                                <v-list-item-title>Nome: {{pet.name}}</v-list-item-title>
                                <v-list-tile-sub-title>Id: {{pet.id}} Raça: {{pet.race}} Idade: {{pet.age}}</v-list-tile-sub-title>
                            </v-col>
                            <v-col
                             cols="12"
                             md="4"
                            >
                                <v-btn rounded color="primary" dark>editar</v-btn>
                            </v-col>
                        </v-list-item-content>
                            
                        </v-list>
                        </v-col>
                        <v-col
                        cols="12"
                         md="10"
                        ></v-col>

                        <v-col
                        cols="12"
                         md="2"
                        >
                            <v-btn
                                fab
                                small
                                @click="overlay2 = !overlay2"
                                color="primary"
                            >
                                <v-icon>mdi-plus</v-icon>
                            </v-btn>
                        </v-col>

                    </v-row>
                </v-container>
            </v-card>
        </v-overlay>

        <v-overlay :value="overlay2" :z-index="2">
            <v-card
             light
             class="mx-auto elevation-10"
             color="light-blue lighten-5 black--text"
             width="900"
            >
                  
                <v-container grid-list-xs>
                    <v-row>
                        <v-col
                         cols="12"
                         md="6"
                        >
                            <v-card-title class="text-uppercase">
                            Novo animal de estimação
                            </v-card-title> 
                        </v-col>
                        <v-col
                        cols="12"
                         md="4"
                        ></v-col>
                        <v-col
                        cols="12"
                         md="2"
                        >
                            <v-btn
                                fab
                                small
                                @click="overlay2 = false"
                                color="primary"
                            >
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </v-col>
                        <v-form v-model="valid">
                            <v-container grid-list-xs>
                            <v-row>
                                <v-col
                                cols="12"
                                md="6"
                                >
                                <v-text-field 
                                v-model="petName"
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
                                v-model="petRace"
                                :rules="raceRules"
                                :counter="15"
                                label="Raça"
                                required
                                ></v-text-field>
                                </v-col>

                                
                                
                                <v-col
                                cols="12"
                                md="6"
                                >
                                <v-text-field
                                    v-model="idade"
                                    :rules="idadeRules"
                                    label="Idade"
                                    required
                                ></v-text-field>

                                </v-col>

                                <v-col
                                cols="12"
                                md="6"
                                ></v-col>

                                
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
                    </v-row>
                </v-container>
            </v-card>
        </v-overlay>
          
        
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
      items:[{firstname: 'Carlos', lastname: 'Albuquerque',id:'#1',email: 'calbu@gmail.com',phone: '1799563245',endereço: 'alameda das azaleias n 46 cidade jardim São carlos',photo: 'https://randomuser.me/api/portraits/men/51.jpg'},
             {firstname: 'Silvana', lastname: 'Valeriana',id:'#2',email: 'silval@gmail.com',phone: '1998675324',endereço: 'Rua Antonieta Rubeo n 765 jardim macarengo São Joaquim',photo: 'https://randomuser.me/api/portraits/women/62.jpg'},
             {firstname: 'Lucas', lastname: 'Argento',id:'#3',email: 'luarg@gmail.com',phone: '1697586324',endereço: 'Avenida Gov João figueredo n 534 Metropolitano Ribeirão Preto',photo: 'https://randomuser.me/api/portraits/men/12.jpg'},
             ],
      overlay1: false,
      overlay2: false,
      pets: [{name: 'Pet1', id: 'noossaa1', photo: './pet-placeholder.png', race: 'Celeste', age: 42},
             {name: 'Pet2', id: 'noossaa2', photo: './pet-placeholder.png', race: 'Celeste', age: 42},
             {name: 'Pet3', id: 'noossaa3', photo: './pet-placeholder.png', race: 'Celeste', age: 42}
            ],
      valid: false,
      petName: '',
      nameRules: [
        v => !!v || 'Requer nome',
        v => v.length <= 15 || 'Nome tem que ter menos que 15 caracteres',
      ],
      petRace: '',
      raceRules: [
        v => !!v || 'Requer raça',
        v => v.length <= 15 || 'Raça tem que ter menos que 15 caracteres',
      ],
      idade: '',
      idadeRules: [
        v => !!v || 'Requer idade',
        v => /^[0-9]*$/.test(v)   || 'Número tem que ser válido'
      ],
      photo: './pet-placeholder.png',
      photoRule: [
        value => !value || value.size < 2000000 || 'A foto de profile tem que ser menos de 2MB!',
      ],
      
  }),
};
</script>