<template>
    <nav>
        <v-app-bar
        color="light-blue darken-3"
        dark
        >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

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
        
    </nav>
</template>