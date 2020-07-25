<template>
    <nav>
        <v-app-bar app color="light-blue darken-3" dark>
            <v-app-bar-nav-icon class="mx-0" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-btn class="text-capitalize px-2" text large @click="sendTo('/admin')" >
                <v-icon>mdi-paw</v-icon>
                <span> <h1 class="font-weight-black">Pet Shop:</h1> </span>
                <span> <h1 class="font-weight-light">  Conta de administrador</h1></span> 
            </v-btn>

            <v-spacer></v-spacer>
                 
            <v-btn icon @click="logout()">
                <v-icon>mdi-exit-to-app</v-icon>
            </v-btn>

        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" color="blue lighten-1" dark>
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
                <v-list-group prepend-icon="mdi-account-circle" color="deep-purple darken-4">
                    <template v-slot:activator><v-list-item-title> Usuários </v-list-item-title></template>





                    <v-list-group no-action sub-group color="deep-purple darken-4">
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>Administradores</v-list-item-title>
                            </v-list-item-content>
                        </template>

                        <v-list-item-group>
                            <v-list-item @click="sendTo('/AdminReg')" >
                                <v-list-item-title>Registrar</v-list-item-title>
                                <v-list-item-icon><v-icon>mdi-clipboard-account-outline</v-icon></v-list-item-icon>
                            </v-list-item>
                        </v-list-item-group>

                        <v-list-item-group>
                            <v-list-item @click="sendTo('/GerenAdmin')">
                                <v-list-item-title>Gerenciar</v-list-item-title>
                                <v-list-item-icon><v-icon>mdi-account-box-multiple</v-icon></v-list-item-icon>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list-group>





                    <v-list-group no-action sub-group color="deep-purple darken-4">
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>Clientes</v-list-item-title>
                            </v-list-item-content>
                        </template>

                        <v-list-item-group>
                            <v-list-item @click="sendTo('/ClientReg')">
                                <v-list-item-title>Registrar</v-list-item-title>
                                <v-list-item-icon><v-icon>mdi-clipboard-account-outline</v-icon></v-list-item-icon>
                            </v-list-item>
                        </v-list-item-group>

                        <v-list-item-group>
                            <v-list-item @click="sendTo('/GerenClientes')">
                                <v-list-item-title>Gerenciar</v-list-item-title>
                                <v-list-item-icon><v-icon>mdi-account-box-multiple</v-icon></v-list-item-icon>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list-group>
                </v-list-group>





                <v-list-group prepend-icon="mdi-package" color="deep-purple darken-4">
                    <template v-slot:activator><v-list-item-title>Produtos</v-list-item-title></template>

                    <v-list-item-group>
                        <v-list-item @click="sendTo('/CatItem')">
                            <v-list-item-title>Categorias</v-list-item-title>
                            <v-list-item-icon><v-icon>mdi-folder-plus-outline</v-icon></v-list-item-icon>
                        </v-list-item>
                    </v-list-item-group>
  
                    <v-list-group no-action sub-group color="deep-purple darken-4">
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>Item</v-list-item-title>
                            </v-list-item-content>
                        </template>

                        <v-list-item-group>
                            <v-list-item @click="sendTo('/CadItem')">
                                <v-list-item-title>Criar</v-list-item-title>
                                <v-list-item-icon><v-icon>mdi-package-variant</v-icon></v-list-item-icon>
                            </v-list-item>
                        </v-list-item-group>

                        <v-list-item-group>
                            <v-list-item @click="sendTo('/GerenItens')">
                                <v-list-item-title>Gerenciar</v-list-item-title>
                                <v-list-item-icon> <v-icon>mdi-package-variant-closed</v-icon></v-list-item-icon>
                            </v-list-item>
                        </v-list-item-group>   
                    </v-list-group>
                </v-list-group>




                <v-list-group prepend-icon="mdi-dog-service" color="deep-purple darken-4">
                    <template v-slot:activator><v-list-item-title> Serviços </v-list-item-title></template>

                    <v-list-item-group>
                        <v-list-item @click="sendTo('/CatServ')">
                            <v-list-item-title>Novos serviços</v-list-item-title>
                                <v-list-item-icon><v-icon>mdi-folder-plus-outline</v-icon></v-list-item-icon>
                        </v-list-item>
                    </v-list-item-group>                       
                </v-list-group>
            
                <v-list-item-group color="deep-purple darken-4">
                    <v-list-item @click="sendTo('/Fat')">
                        <v-list-item-icon><v-icon>mdi-cash</v-icon></v-list-item-icon>
                        <v-list-item-content><v-list-item-title>Faturamentos</v-list-item-title></v-list-item-content>
                    </v-list-item>
                </v-list-item-group>

            </v-list>
        </v-navigation-drawer>
        
    </nav>
</template>

<script>
export default {
    props: ['user'],

    data: () => {
       
        return{
            drawer: false
        }
    },
    methods: {
        logout(){
            this.drawer=false;
            this.$emit('update-user', null);
        },

        sendTo(path){
            this.$router.push(path);
        }
    }
}
</script>