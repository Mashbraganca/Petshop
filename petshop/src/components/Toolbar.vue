<template>
    <nav>
        <v-toolbar flat app class="blue lighten-4">
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
                <v-btn text color="blue" @click="logged = true">
                    <span>Sign In</span>
                </v-btn>
            </div>

            

        </v-toolbar>
        
    </nav>
    
</template>

<script>
export default{
    data() {
        return{
            logged: true
        }
    }
}
</script>