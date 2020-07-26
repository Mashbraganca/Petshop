<template>
  <v-app style=" background: #AD97FF ">
    <NavbarAdm :user="user" @update-user="send"/>
    <div class="Produtos">
        <div>
            <v-card class="mx-auto my-6" max-width="80%">
                <v-row class="ma-0">
                    <v-col cols="12" md="6">
                        <h1 class="ml-3"> Produtos </h1>

                        <v-btn text color="blue" @click="add">
                            <v-icon>mdi-plus-thick</v-icon>
                            <span> Adicionar</span>
                        </v-btn>
                    </v-col>

                    <v-col>
                        <v-text-field outlined label="Busca" append-icon="mdi-magnify"></v-text-field>
                    </v-col>
                </v-row>

            </v-card>

            <v-card v-for="item in products" :key="item.id" class="mx-auto my-6" max-width="80%">
                <v-card-title class="ml-4"> <h1>{{ item.name }}</h1></v-card-title>

                <v-container grid-list-xs class="ml-4">
                    <v-row>
                        <v-col cols="12" md="3">
                            <v-avatar size=160px>
                                <img :src=item.photo alt="Profile Picture">
                            </v-avatar>
                        </v-col>

                        <v-col cols="12" md="5">
                            <v-card-text class="my-4">
                                <h2>Categoria</h2>
                                <span>{{item.category}}</span>
                                <br><br>
                                <h2>Descrição</h2>
                                <span>{{item.description}}</span>
                            </v-card-text>

                            <v-btn large text color="blue" @click="edit(item)" >
                                <v-icon>mdi-square-edit-outline</v-icon>
                                Editar
                            </v-btn>

                            <v-btn large text color="red" @click="del(item)" >
                                <v-icon>mdi-trash-can-outline</v-icon>
                                Deletar
                            </v-btn>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-card-text class="my-4">
                                <h2>Preço</h2>
                                <span>{{"R$ " + item.price}}</span>
                                <br><br>
                                <h2>Estoque</h2>
                                <span>{{item.storage}}</span>
                            </v-card-text>
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
    props: ['user', 'products'],

    data: () => ({
      //
    }),

    methods: { 
        send(user){
            this.$emit('register-user', user);
        },

        add(){
            this.$emit('set-target', null);
            this.$router.push('/new-product');
        },

        edit(item){
            this.$emit('set-target', item);
            this.$router.push('/new-product');
        },

        del(item){
            //deletar admin referenciado
            console.log("Deleting " + item.name);




            this.$emit('refresh', 'products');
        }
    }
};
</script>