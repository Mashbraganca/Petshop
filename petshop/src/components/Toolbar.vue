<template>
    <nav>
        <v-app-bar app color="light-blue darken-3" dark>
            <v-app-bar-nav-icon class="mx-auto" @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-btn class="text-capitalize" text large @click="sendTo('/')">
                <v-icon>mdi-paw</v-icon>
                <span> <h1 class="font-weight-black">Pet Shop</h1> </span>
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn v-show="logged" icon @click="logout()">
                <v-icon>mdi-exit-to-app</v-icon>
            </v-btn>

        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" color="#AD97FF" dark>
            <div v-if="logged">
                <v-list-item>
                    <v-list-item-avatar>
                        <v-img src="https://randomuser.me/api/portraits/men/3.jpg" alt="profile picture"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title> {{ user.name + " " + user.lastName }} </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>

                <v-list rounded>
                    
                    <v-list-item-group color="deep-purple darken-4">
                        <v-list-item @click="sendTo('/profile')">
                            <v-list-item-icon> <v-icon>mdi-badge-account-horizontal</v-icon> </v-list-item-icon>
                            <v-list-item-content> <v-list-item-title>Perfil</v-list-item-title> </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>

                    <v-list-item-group color="deep-purple darken-4">
                        <v-list-item @click="sendTo('/cart')">
                            <v-list-item-icon> <v-icon>mdi-cart</v-icon> </v-list-item-icon>
                            <v-list-item-content> <v-list-item-title>Carrinho</v-list-item-title> </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                    
                    <v-list-item-group color="deep-purple darken-4">
                        <v-list-item @click="sendTo('/calendar')">
                            <v-list-item-icon> <v-icon>mdi-dog-service</v-icon> </v-list-item-icon>
                            <v-list-item-content> <v-list-item-title>Serviços</v-list-item-title> </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>

                </v-list>
            </div>

            <div v-else>
                <Login :popup=signin @login="loadUser" @cancel="signin=false"/>

                <v-list rounded>

                    <v-list-item-group color="deep-purple darken-4">
                        <v-list-item @click="signin = true">
                            <v-list-item-icon> <v-icon>mdi-account-circle</v-icon> </v-list-item-icon>
                            <v-list-item-content> <v-list-item-title>Entrar</v-list-item-title> </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                    
                    <v-list-item-group color="deep-purple darken-4">
                        <v-list-item @click="sendTo('/new')">
                            <v-list-item-icon> <v-icon>mdi-clipboard-account-outline</v-icon> </v-list-item-icon>
                            <v-list-item-content> <v-list-item-title>Registrar</v-list-item-title> </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>

                </v-list>
            </div>
        </v-navigation-drawer>
    </nav>
    
</template>

<script>
import Login from './Login'

export default {
    components: {Login},
    props: ['logged', 'user'],

    data: () => { 
        return{
            drawer: false,
            signin: false
        }
    },

    methods: {
        logout(){
            this.drawer=false;
            this.$emit('update-user', null);
        },

        loadUser(data){
            this.drawer=false;
            console.log(data);
            this.signin = false;
            this.drawer = false;
            this.$emit('update-user', data);
        },

        sendTo(path){
            this.drawer=false;
            this.$router.push(path);
        }
    }
}
</script>