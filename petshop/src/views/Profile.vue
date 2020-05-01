<template>
    <div>
        <v-container>
            <v-layout row wrap>
                <v-flex md3>
                    <v-card-title> <h1>Profile</h1></v-card-title>

                    <v-avatar size=250px>
                        <img :src=photo alt="Profile Picture">
                    </v-avatar>
                </v-flex>

                <v-flex md3>
                    <v-card-title></v-card-title>

                    <v-card flat class="text-left ma-3">
                        <v-card-text>
                            <h1>Name</h1>
                            <span>{{name}}</span> <br><br>

                            <h1>Username</h1>
                            <span>{{id}}</span> <br><br>

                            <h2>Email</h2>
                            <span>{{email}}</span> <br><br>

                            <h2>Address</h2>
                            <span>{{address}}</span> <br><br>

                            <h2>Phone</h2>
                            <span>{{phone}}</span> <br><br>
                        </v-card-text>
                    </v-card>
                </v-flex>

                <v-flex md6>
                    <v-card-title> <h2>My Pets</h2></v-card-title>
                    <v-containter>
                        <v-layout row wrap>
                            <v-flex md4 v-for="pet in pets" :key="pet.id">
                                <v-card flat class="text-center ma-2" color="blue lighten-5">
                                    <v-responsive class="pt-4">
                                        <v-avatar size=150px center>
                                            <img :src=pet.photo :alt=pet.race>
                                        </v-avatar>
                                    </v-responsive>

                                    <v-card-text>
                                        <div class="headline blue--text"> {{pet.name}} </div>
                                        <div class="subheadline"> {{pet.race}} </div>
                                        <div class="subheadline"> <b>Id:</b> {{pet.id}} </div>
                                        <div class="subheadline"> <b>Age:</b> {{pet.age}}y </div>
                                    </v-card-text>
                                </v-card>
                                
                            </v-flex>

                            <v-flex md3>
                                
                           
                            </v-flex>
                        </v-layout>
                    </v-containter>
                </v-flex>
            </v-layout>

        </v-container>
    </div>
</template>

<script>
export default {
    data () {
        return {
            name: "Solid Snake",
            photo: './profile-placeholder.png',
            id: "SNAAAAAAAAAAAAAAKE",
            address: "a box",
            phone: "000000000",
            email: "snake.SNAAAAKE@gmail.com",

            pets: [
                {name: 'Pet1', id: 'noossaa1', photo: './pet-placeholder.png', race: 'Celeste', age: 42},
                {name: 'Pet2', id: 'noossaa2', photo: './pet-placeholder.png', race: 'Celeste', age: 42},
                {name: 'Pet3', id: 'noossaa3', photo: './pet-placeholder.png', race: 'Celeste', age: 42}
            ]
        }

    }
}
</script>