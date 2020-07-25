<template>
  <v-app style=" background: #AD97FF ">
    <NavbarAdm :user="user" @update-user="send"/>
    <div class="admin">
      <div><v-row>a</v-row></div>
      <div>
        <v-card class="ma-auto" elevation-15 max-width="80%">
            <h1 class="ml-10">Produtos</h1>
            <v-container>
                <v-layout row wrap justify-center>
                <v-flex md3 v-for="product in products" :key="product.name">
                    <v-card outlined class="text-center ma-2">
                        <v-responsive class="pt-3">
                            <v-avatar size=150px>
                            <img :src=product.photo :alt=product.name>
                            </v-avatar>
                        </v-responsive>

                        <v-card-text><div class="display-1"> {{product.name}} </div></v-card-text>
                    </v-card>
                </v-flex>
                </v-layout>
            </v-container>

            <h1 class="ml-10">Serviços</h1>
            <v-container>
                <v-layout row wrap justify-center>
                <v-flex md3 v-for="service in services" :key="service.id">
                    <v-card outlined class="text-center ma-2" >
                    <v-responsive class="pt-3">
                        <v-avatar size=150px>
                        <img :src=service.icon :alt=service.name>
                        </v-avatar>
                    </v-responsive>

                    <v-card-text class="display-1"> {{service.name}}</v-card-text>

                    </v-card>
                </v-flex>
                </v-layout>
                
            </v-container>


        </v-card>
      </div>
      <div><v-row>a</v-row></div>
    </div>
  </v-app>
  
</template>

<script>
import NavbarAdm from '@/components/NavbarAdm'

export default {
  name: 'App',
  components: { NavbarAdm },
  props: ['user', 'products', 'services'],
  data: () => ({
    //
  }),

  methods: { 
    send(user){
      this.$emit('register-user', user);
    }
  }
};
</script>