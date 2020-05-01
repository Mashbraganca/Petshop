<template>
  <div class="home">
    <h1>Products</h1>
    <v-container>

      <v-layout row wrap>
        <v-flex md2 v-for="product in storage" :key="product.name">
          <v-card flat class="text-center ma-3" color="blue lighten-5">
            <v-responsive class="pt-3">
              Imagem
            </v-responsive>

            <v-card-text>
              <div class="subheading"> {{product.name}} </div>
              <div right class="blue--text"> R$ {{product.price}} </div>
            </v-card-text>

            <v-card-actions>
              <v-btn text small left color="blue">
                <span>Buy</span>
              </v-btn>
            </v-card-actions>
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
              <div class="subheading"> {{service.name}} </div>
              <div right class="blue--text"> R$ {{service.price}} </div>
            </v-card-text>

            <v-card-actions>
              <v-btn text small left color="blue">
                <span>Schedule</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      
    </v-container>

  </div>
</template>

<script>
export default {
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
              { name: 'X', price: 10.0}
            ]
        }
    }
}
</script>
