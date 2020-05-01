<template>
  <div class="home">

    <h1>Products</h1>
    <v-container>
      <v-layout row wrap>
        <v-flex md2 v-for="product in storage" :key="product.name">
          <v-card flat class="text-center ma-3" color="blue lighten-5">
            <v-responsive class="pt-3">
              Image
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
        <v-flex md2 v-for="service in services" :key="service.name">
          <v-card flat class="text-center ma-3" color="blue lighten-5">
            <v-responsive class="pt-3">
              Imagem
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
</template>

<script>
export default {
  props: ['logged'],

  data() {
    return{
      storage: [
        { name: 'A', price: 1.0},
        { name: 'B', price: 1.0},
        { name: 'C', price: 1.0}
      ],

      services: [
        { name: 'X', price: 10.0},
        { name: 'Y', price: 10.0},
        { name: 'Z', price: 10.0}
      ]
    }
  },
}
</script>
