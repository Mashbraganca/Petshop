<template>
    <v-app>
        <Toolbar :user=user :logged=logged @update-user="send"/>
        <div>
            <v-container>
                <v-layout row wrap>
                    <v-flex md3>
                        <v-card-title> <h1>Profile</h1> </v-card-title>

                        <v-card-text>
                            <v-avatar size=200px>
                                <img :src=user.photo alt="Profile Picture">
                            </v-avatar>
                        </v-card-text>

                        <v-card-actions>
                            <v-btn text color="blue" router to="/new" >
                                <v-icon>mdi-square-edit-outline</v-icon>
                                Edit
                            </v-btn>

                            <v-btn text color="red" @click="deleteUser" >
                                <v-icon>mdi-trash-can-outline</v-icon>
                                Delete
                            </v-btn>
                        </v-card-actions>
                    </v-flex>

                    <v-flex md3>
                        <v-card-title></v-card-title>

                        <v-card flat class="text-left ma-3">
                            <v-card-text>
                                <h1>Name</h1>
                                <span>{{user.name}}</span> <br><br>

                                <h2>Email</h2>
                                <span>{{user.email}}</span> <br><br>

                                <h2>Address</h2>
                                <span>{{user.address}}</span> <br><br>

                                <h2>Phone</h2>
                                <span>{{user.phone}}</span> <br><br>
                            </v-card-text>
                        </v-card>
                    </v-flex>

                    <v-flex md6>
                        <v-card-title> <h2>My Pets</h2></v-card-title>
                        <v-container>
                            <v-layout row wrap>
                                <v-flex md4 v-for="pet in petList" :key="pet.id">
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
                                            <Popup @update-pet="updatePet" :user=user :pet=pet />
                                        </v-card-text>

                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-container>
                        <v-card-actions>
                            <Popup @update-pet="updatePet" :user=user :pet=null />
                        </v-card-actions>
                    </v-flex>
                </v-layout>

            </v-container>
        </div>
    </v-app>
</template>

<script>
import Popup from '@/components/Pet'
import Toolbar from '@/components/Toolbar'


export default {
    components: {Popup, Toolbar },
    props: ['logged', 'user', 'pets'],

    data () {
        return {
            
        }

    },

    computed: {
        petList: function(){
            let list = [];
            for (var i=0; i<this.pets.length; i++){
                if(this.pets[i].owner == this.user.id)
                    list.push(this.pets[i]);
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

        deleteUser(){
            //deletar pet referenciado
            let id = this.user.id;
            console.log("Delete user " + id);
            this.send(null);
        }
    }
}
</script>