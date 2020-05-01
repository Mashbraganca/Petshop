<template>
    <nav>
        <v-app-bar flat app class="blue lighten-4">
            <div>
                <v-toolbar-title class="text-uppercase blue--text">
                    <span>Petshop</span>
                </v-toolbar-title>
            </div>

            <v-spacer></v-spacer>

            <div v-show="logged">
                <v-btn text color="blue">
                    <span>Profile</span>
                </v-btn>

                <v-btn text color="blue">
                    <span>Services</span>
                </v-btn>

                <v-btn text color="blue" @click="logged = false">
                    <span>Sign Out</span>
                </v-btn>

                <v-btn text color="blue">
                    <span>Cart</span>
                </v-btn>
            </div>
            <div v-show="!logged">
                <Login @emit-login="logged = true"/>

                <v-btn text color="blue" @click="logged = true">
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
    data() {
        return{
            logged: false
        }
    }
}
</script>