<template>
    <nav>
        <v-app-bar flat app class="blue lighten-4">
            <v-btn text color="blue" @click="sendTo('/')">
                <span>Home</span>
            </v-btn>

            <div>
                <v-toolbar-title class="text-uppercase blue--text">
                    <span>Petshop</span>
                </v-toolbar-title>
            </div>

            <div>
                <v-text-field hide-details label="Search" single-line></v-text-field>
            </div>

            <v-spacer></v-spacer>

            <div v-show="logged">
                <v-btn text color="blue" @click="sendTo('/profile')">
                    <span>Profile</span>
                </v-btn>

                <v-btn text color="blue" @click="sendTo('/calendar')">
                    <span>Services</span>
                </v-btn>

                <v-btn text color="blue" @click="logged = false, emitLogin(false), sendTo('/')">
                    <span>Sign Out</span>
                </v-btn>

                <v-btn text color="blue" @click="sendTo('/cart')">
                    <span>Cart</span>
                </v-btn>
            </div>
            <div v-show="!logged">
                <Login @emit-login="logged = true, emitLogin(true)"/>

                <v-btn text color="blue" @click="sendTo('/signup')">
                    <span>Sign Up</span>
                </v-btn>
            </div>

            

        </v-app-bar>
        
    </nav>
    
</template>

<script>
import Login from './Login'

export default{
    components: {Login},
    props: ['logged'],

    methods: {
        emitLogin(info){
            this.$emit('update-user', info);
        },

        sendTo(path){
            this.$router.push(path);
        }
    }
}
</script>