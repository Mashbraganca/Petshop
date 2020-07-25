<template>
  <v-app>
    <Toolbar :user=user :logged=logged @update-user="send"/>
  
    <div class="home">
      <h1>Products</h1>
      <v-container>
        <v-layout row wrap>
          <v-flex md3 v-for="product in storage" :key="product.name">
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
                  <v-btn text small left color="blue">
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



      <h1>Services</h1>
      <v-container>

        <v-layout row wrap>
          <v-flex md3 v-for="service in services" :key="service.name">
            <v-card outlined class="text-center ma-2" >
              <v-responsive class="pt-3">
                <v-avatar size=150px>
                  <img :src=service.icon :alt=service.name>
                </v-avatar>
                
              </v-responsive>

              <v-card-text>
                <div class="display-1"> {{service.name}} </div>
                <div class="headline blue--text"> R$ {{service.price}} </div>
              </v-card-text>

              <div v-show="logged">
                <v-card-actions>
                  <v-btn text small left color="blue" @click="buy()">
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
  props: ['logged', 'user'],
  components: { Toolbar },

  data() {
    return{
      storage: [
        { name: 'A', price: 1.0, photo: '/item-placeholder.png'},
        { name: 'B', price: 1.0, photo: '/item-placeholder.png'},
        { name: 'C', price: 1.0, photo: '/item-placeholder.png'}
      ],

      services: [
        { name: 'X', price: 10.0, icon: '/service-placeholder.png'},
        { name: 'Y', price: 10.0, icon: '/service-placeholder.png'},
        { name: 'Z', price: 10.0, icon: '/service-placeholder.png'}
      ]
    }
  },

  methods: {
    send(user){
      this.$emit('register-user', user);
    }
  }
}
</script>
