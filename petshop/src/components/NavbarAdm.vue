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
                <span class="font-weight-light">  Conta de administrador</span> 
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

            <v-list rounded>
                <v-list-group
                prepend-icon="mdi-account-circle"
                value="true"
                color="deep-purple darken-4"
                >
                    <template v-slot:activator>
                        <v-list-item-title>
                        Usuários 
                        </v-list-item-title>
                    </template>

                    <v-list-group
                    no-action
                    sub-group
                    value="true"
                    color="deep-purple darken-4"
                    >
                    
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>
                                    Administradores  
                                </v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item-group >
                            <v-list-item @click="sendTo('/AdminReg')" >
                                <v-list-item-tittle>Registrar</v-list-item-tittle>
                                <v-list-item-icon>
                                    <v-icon>mdi-clipboard-account-outline</v-icon>
                                </v-list-item-icon>
                            </v-list-item>
                        </v-list-item-group>

                        <v-list-item-group>
                            <v-list-item @click="sendTo('/GerenAdmin')">
                                <v-list-item-tittle>Gerenciar</v-list-item-tittle>
                                <v-list-item-icon>
                                    <v-icon>mdi-account-box-multiple</v-icon>
                                </v-list-item-icon>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list-group>

                    <v-list-group
                    no-action
                    sub-group
                    value="true"
                    color="deep-purple darken-4"
                    >
                    
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>
                                    Clientes  
                                </v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item-group>
                            <v-list-item @click="sendTo('/ClientReg')">
                                <v-list-item-tittle>Registrar</v-list-item-tittle>
                                <v-list-item-icon>
                                    <v-icon>mdi-clipboard-account-outline</v-icon>
                                </v-list-item-icon>
                            </v-list-item>
                        </v-list-item-group>

                        <v-list-item-group>
                            <v-list-item @click="sendTo('/GerenClientes')">
                                <v-list-item-tittle>Gerenciar</v-list-item-tittle>
                                <v-list-item-icon>
                                    <v-icon>mdi-account-box-multiple</v-icon>
                                </v-list-item-icon>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list-group>


                </v-list-group>

                <v-list-group
                prepend-icon="mdi-package"
                value="true"
                color="deep-purple darken-4"
                >

                    <template v-slot:activator>
                        <v-list-item-tittle>
                            Produtos
                        </v-list-item-tittle>
                    </template>

                    <v-list-item-group>
                        <v-list-item @click="sendTo('/CatItem')">
                            <v-list-item-tittle>Categorias</v-list-item-tittle>
                            <v-list-item-icon>
                                 <v-icon>mdi-folder-plus-outline</v-icon>
                            </v-list-item-icon>
                        </v-list-item>
                    </v-list-item-group>

                    
                    <v-list-group
                    no-action
                    sub-group
                    value="true"
                    color="deep-purple darken-4"
                    >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-tittle>Item</v-list-item-tittle>
                            </v-list-item-content>
                        </template>

                        <v-list-item-group>
                            <v-list-item @click="sendTo('/CadItem')">
                                <v-list-item-tittle>Criar</v-list-item-tittle>
                                <v-list-item-icon>
                                    <v-icon>mdi-package-variant</v-icon>
                                </v-list-item-icon>
                            </v-list-item>
                        </v-list-item-group>

                        <v-list-item-group>
                            <v-list-item @click="sendTo('/GerenItens')">
                                <v-list-item-tittle>Gerenciar</v-list-item-tittle>
                                <v-list-item-icon>
                                    <v-icon>mdi-package-variant-closed</v-icon>
                                </v-list-item-icon>
                            </v-list-item>
                        </v-list-item-group>   
                    </v-list-group>


                </v-list-group>

                <v-list-group
                prepend-icon="mdi-dog-service"
                value="true"
                color="deep-purple darken-4"
                >
                    <template v-slot:activator>
                        <v-list-item-tittle>
                            Serviços
                        </v-list-item-tittle>
                    </template>

                    <v-list-item-group>
                        <v-list-item @click="sendTo('/CatServ')">
                            <v-list-item-tittle>Novos serviços</v-list-item-tittle>
                                <v-list-item-icon>
                                    <v-icon>mdi-folder-plus-outline</v-icon>
                                </v-list-item-icon>
                        </v-list-item>
                    </v-list-item-group>

                                        
                </v-list-group>
            
                
                <v-list-item-group
                color="deep-purple darken-4"
                >
                    <v-list-item @click="sendTo('/Fat')">
                        <v-list-item-icon>
                            <v-icon>mdi-cash</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>Faturamentos</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
                
            </v-list>
        </v-navigation-drawer>
        
    </nav>
</template>

<script>
export default {
    data: () => {
       
        return{
            drawer: false
        }
    },
    methods: {
        
        sendTo(path){
            this.$router.push(path);
        }
    }
}
</script>