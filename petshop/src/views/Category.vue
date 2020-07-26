<template>
  <v-app style=" background: #AD97FF ">
    <NavbarAdm :user="user" @update-user="send"/>
    <div class="Categorias">
        <div>
            <v-card class="mx-auto my-6" max-width="80%">
                <v-row class="ma-0">
                    <v-col cols="12" md="6">
                        <h1 class="ml-3"> Categorias </h1>

                         <Popup @add="add"/>
                    </v-col>

                    <v-col>
                        <v-text-field outlined label="Busca" append-icon="mdi-magnify"></v-text-field>
                    </v-col>
                </v-row>

            </v-card>

            <v-card v-for="item in categories" :key="item" class="mx-auto my-6" max-width="80%">
                <v-card-title class="ml-4">
                  <h2>{{ item }}</h2>
                  <v-spacer></v-spacer>

                  <v-btn large icon color="red" @click="del(item)">
                    <v-icon>mdi-trash-can-outline</v-icon>
                  </v-btn>
                </v-card-title>
        
            </v-card> 
        </div>
        <div><v-row>a</v-row></div>
    </div>
  </v-app>
  
</template>

<script>
import NavbarAdm from '@/components/NavbarAdm'
import Popup from '@/components/Cat'

export default {
    name: 'App',
    components: { NavbarAdm, Popup },
    props: ['user', 'categories'],

    data: () => ({
      //
    }),

    methods: { 
        send(user){
            this.$emit('register-user', user);
        },

        add(cat){
          //adicionar categoria
          console.log(cat + " created!");




          this.$emit('refresh', 'categories');
        },

        del(cat){
          //deletar admin referenciado
          console.log("Deleting " + cat);




          this.$emit('refresh', 'categories');
        }
    }
};
</script>