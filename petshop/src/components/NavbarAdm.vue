<template>
    <nav>
        <v-app-bar
        color="light-blue darken-3"
        dark
        >
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-icon>mdi-paw</v-icon>

            <v-toolbar-title>
                <span class="font-weight-black">Pet Shop:</span>
                <span class="font-weight-light">  Conta de admnistrador</span> 
            </v-toolbar-title>

            <v-spacer></v-spacer>
                 
            <v-tooltip bottom>  
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                        <v-icon>mdi-exit-to-app</v-icon>
                    </v-btn>  
                </template>
                <span>Log out</span>
            </v-tooltip>

        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" color="blue lighten-1" dark>
            <v-list-item>
                <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/men/3.jpg" alt="profile picture"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>Chad Halmilton</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>

            <v-list-group
            prepend-icon="mdi-account-circle"
            value="true"
            >
           <template v-slot:activator>
                <v-list-item-title>
                Usuários 
                </v-list-item-title>
            </template>
            </v-list-group>
           
        </v-navigation-drawer>
        
    </nav>
</template>

<script>
export default {
    data: () => {
       
        return{
            drawer: false
        }
    }
}
</script>