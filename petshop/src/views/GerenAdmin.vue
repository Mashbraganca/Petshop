<template>
  <v-app style=" background: #B388FF background: -webkit-linear-gradient(to bottom, #EA80FC, #82B1FF, #B388FF); 
background: linear-gradient(to bottom, #EA80FC, #82B1FF, #B388FF);">
    <NavbarAdm/>
    <div class="Admin">
        <div class="GerenAdmin">
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
                            administradores
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
                    </v-col>

                    <v-col
                    cols="12"
                    md="6"
                    ></v-col>

                    <v-col
                    cols="12"
                    md="3"
                    ></v-col>

                    <v-col
                    cols="12"
                    md="3"
                    >
                        <v-btn large color="primary">Editar</v-btn>
                    </v-col>
                </v-row>
          </v-container>
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
      items:[{firstname: 'Carlos', lastname: 'Albuquerque',id:'#1',email: 'calbu@gmail.com',phone: '1799563245',endereço: 'alameda das azaleias n 46 cidade jardim São carlos',photo: 'https://randomuser.me/api/portraits/men/51.jpg'},
             {firstname: 'Silvana', lastname: 'Valeriana',id:'#2',email: 'silval@gmail.com',phone: '1998675324',endereço: 'Rua Antonieta Rubeo n 765 jardim macarengo São Joaquim',photo: 'https://randomuser.me/api/portraits/women/62.jpg'},
             {firstname: 'Lucas', lastname: 'Argento',id:'#3',email: 'luarg@gmail.com',phone: '1697586324',endereço: 'Avenida Gov João figueredo n 534 Metropolitano Ribeirão Preto',photo: 'https://randomuser.me/api/portraits/men/12.jpg'},
             ],
        }),
};
</script>