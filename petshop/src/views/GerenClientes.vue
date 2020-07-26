<template>
  <v-app style=" background: #AD97FF ">
    <NavbarAdm :user="user" @update-user="send" />
    <div class="GerenClientes">
        <div>
            <v-card class="mx-auto my-6" max-width="80%">
                <v-row class="ma-0">
                    <v-col cols="12" md="6">
                        <h1 class="ml-3"> Clientes </h1>

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

            <v-card v-for="item in customers" :key="item.id" class="mx-auto my-6" max-width="80%">
                <v-card-title class="ml-4"> <h1>{{ item.name + " " + item.lastName }}</h1></v-card-title>

                <v-container grid-list-xs class="ml-4">
                    <v-row>
                        <v-col cols="12" md="3">
                            <v-avatar size=160px>
                                <img :src=item.photo alt="Profile Picture">
                            </v-avatar>
                        </v-col>

                        <v-col cols="12" md="5">
                            <v-card-text class="my-4">
                                <h2>Email</h2>
                                <span>{{item.email}}</span>

                                <br><br>
                                <h2>Endereço</h2>
                                <span>{{item.address}}</span>
                            </v-card-text>
                        </v-col>

                        <v-col cols="12" md="4">
                            <v-card-text class="my-4">
                                <h2>Telefone</h2>
                                <span>{{item.phone}}</span>
                            </v-card-text>

                            <v-btn text color="blue" @click="edit(item)" >
                                    <v-icon>mdi-square-edit-outline</v-icon>
                                    Editar
                                </v-btn>

                                <v-btn text color="red" @click="del(item)" >
                                    <v-icon>mdi-trash-can-outline</v-icon>
                                    Deletar
                                </v-btn>
                        </v-col>

                        
                        <v-container>
                            <v-layout row wrap>
                                <v-flex md3 v-for="pet in petList[item.id]" :key="pet.id">
                                    <v-card flat class="text-center ma-2" outlined>
                                        <v-responsive class="pt-4">
                                            <v-avatar size=100px center>
                                                <img :src=pet.photo :alt=pet.race>
                                            </v-avatar>
                                        </v-responsive>

                                        <v-card-text>
                                            <div class="headline blue--text"> {{pet.name}} </div>
                                            <div class="subheadline"> {{pet.race}} </div>
                                            <div class="subheadline"> <b>Idade:</b> {{pet.age}}y </div>
                                            <Popup @update-pet="updatePet" :user=item :pet=pet />
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                            </v-layout>

                            <Popup @update-pet="updatePet" :user=item :pet=null />
                        </v-container>

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
import Popup from '@/components/Pet'

export default {
    name: 'App',
    components: { NavbarAdm, Popup },
    props: ['user', 'customers', 'pets'],

    data: () => ({
        //    
    }),

    computed: {
        petList: function(){
            let list = {};

            for (var i=0; i<this.customers.length; i++){
                let id = this.customers[i].id;
                list[id] = [];

                for(var j=0; j<this.pets.length; j++) {
                    if(this.pets[j].owner == id)
                        list[id].push(this.pets[j]);
                }
            }

            return list;
        }
    },

    methods: { 
        send(user){
            this.$emit('register-user', user);
        },

        updatePet(pet){
            console.log(pet);
            this.$emit('refresh', 'pets');
        },

        add(){
            this.$emit('set-target', null);
            this.$router.push('/new-customer');
        },

        edit(customer){
            this.$emit('set-target', customer);
            this.$router.push('/new-customer');
        },

        del(customer){
            //deletar admin referenciado
            console.log("Deleting " + customer.name);




            this.$emit('refresh', 'customers');
        }
    }
};
</script>