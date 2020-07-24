<template>
    <v-app>
        <Toolbar :logged=logged @update-user="send"/>
        <div>
            <v-container>
                <v-layout row wrap>
                    <v-flex md3>
                        <v-card-title> <h1>Profile</h1> </v-card-title>

                        <v-avatar size=250px>
                            <img :src=user.photo alt="Profile Picture">
                        </v-avatar>
                    </v-flex>

                    <v-flex md3>
                        <v-card-title></v-card-title>

                        <v-card flat class="text-left ma-3">
                            <v-card-text>
                                <h1>Name</h1>
                                <span>{{user.name}}</span> <br><br>

                                <h1>Username</h1>
                                <span>{{user.id}}</span> <br><br>

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
                                <v-flex md4 v-for="pet in user.pets" :key="pet.id">
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
                                            <Popup @update-pet="send" :user=user :pet=pet />
                                        </v-card-text>

                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-container>
                        <v-card-actions>
                            <Popup @update-pet="send" :user=user :pet=null />
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
    props: ['logged', 'user'],

    data () {
        return {
            
        }

    },

    methods: {
        send(user){
            this.$emit('register-user', user);
        },

        delPet(id){
            console.log(id + " deleted");
        }
    }
}
</script>