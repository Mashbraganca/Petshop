<template>
  <v-app>
    <Toolbar :user=user :logged=logged @update-user="send"/>
  
    <div class="home">
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

              <v-card-text>
                <div class="display-1"> {{product.name}} </div>
                <div class="headline blue--text"> R$ {{product.price}} </div>
              </v-card-text>

              <div v-show="logged">
                <v-card-actions>
                  <v-btn text small left color="blue" @click="addToCart(product)">
                    <span>Buy</span>
                  </v-btn>
                </v-card-actions>
              </div>
              <div v-show="!logged">
                <p class="grey--text" >Login to Buy</p>
              </div>
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
                  <img :src=service.photo :alt=service.name>
                </v-avatar>
                
              </v-responsive>

              <v-card-text>
                <div class="display-1"> {{service.name}} </div>
                <div class="headline blue--text"> R$ {{service.price}} </div>
              </v-card-text>

              <div v-show="logged">
                <v-card-actions>
                  <v-btn text small left color="blue" @click="selectService(service)">
                    <span>Schedule</span>
                  </v-btn>
                </v-card-actions>
              </div>
              <div v-show="!logged">
                <p class="grey--text" >Login to Schedule</p>
              </div>

            </v-card>
          </v-flex>
        </v-layout>
        
      </v-container>

    </div>
  </v-app>
</template>

<script>
import Toolbar from '@/components/Toolbar'

export default {
  props: ['logged', 'user', 'products', 'services'],
  components: { Toolbar },

  data() {
    return{
      //
    }
  },

  methods: {
    send(user){
      this.$emit('register-user', user);
    },

    selectService(service){
      this.$emit('to-calendar', service);
      this.$router.push('/calendar');
    },

    addToCart(item){
      this.$emit('to-cart', item, 1);
      this.$router.push('/cart');
    }
  }
}
</script>
