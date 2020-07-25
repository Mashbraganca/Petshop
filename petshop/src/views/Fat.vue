<template>
  <v-app style=" background: #AD97FF ">
    <NavbarAdm @update-user="send"/>
    <div class="Faturamento">
      <div><v-row>a</v-row></div>
      <div class="Faturamento">
        <v-card 
        class="ma-auto pa-1 elevation-15"
        max-width="900"
        >
          <v-card-title primary-title>
            Faturamento Produtos:
          </v-card-title>
          <v-card
                class="mx-auto my-4 text-center elevation-10"
                color="green"
                dark
                max-width="600"
            >
                <v-card-text>
                <v-sheet color="rgba(0, 0, 0, .12)">
                    <v-sparkline
                    :value="value1"
                    color="rgba(255, 255, 255, .7)"
                    height="100"
                    padding="24"
                    stroke-linecap="round"
                    smooth
                    >
                    <template v-slot:label="item">
                        R${{ item.value }}
                    </template>
                    </v-sparkline>
                </v-sheet>
                </v-card-text>

                <v-card-text>
                <div class="display-1 font-weight-thin">Vendas nas ultimas semanas</div>

                </v-card-text>
            </v-card>

            <v-card
              class="pa-3 ma-4 elevation-5"
            >
                <v-card-title>
                <v-text-field
                    v-model="search1"
                    append-icon="mdi-magnify"
                    label="Busca"
                    single-line
                    hide-details
                ></v-text-field>
                </v-card-title>
                <v-data-table
                :headers="headers1"
                :items="products"
                :search="search1"
                ></v-data-table>
                
                <p class="text-right pa-6">Total Semanal: R$760,00 </p>
            </v-card>



        </v-card>
      </div>
      <div><v-row>a</v-row></div>
      <div>
          <v-card 
        class="ma-auto pa-1 elevation-15"
        max-width="900"
        >
          <v-card-title primary-title>
            Faturamento Serviços:
          </v-card-title>
          <v-card
                class="mx-auto my-4 text-center elevation-10"
                color="red"
                dark
                max-width="600"
            >
                <v-card-text>
                <v-sheet color="rgba(0, 0, 0, .12)">
                    <v-sparkline
                    :value="value"
                    color="rgba(255, 255, 255, .7)"
                    height="100"
                    padding="24"
                    stroke-linecap="round"
                    smooth
                    >
                    <template v-slot:label="item">
                        R${{ item.value }}
                    </template>
                    </v-sparkline>
                </v-sheet>
                </v-card-text>

                <v-card-text>
                <div class="display-1 font-weight-thin">Vendas nas ultimas semanas</div>

                </v-card-text>
            </v-card>

            <v-card
              class="pa-3 ma-3 elevation-5"
            >
                <v-card-title>
                <v-text-field
                    v-model="search2"
                    append-icon="mdi-magnify"
                    label="Busca"
                    single-line
                    hide-details
                ></v-text-field>
                </v-card-title>
                <v-data-table
                :headers="headers"
                :items="services"
                :search="search2"
                ></v-data-table>
                
                <p class="text-right pa-6">Total Semanal: R$460,00 </p>
            </v-card>



        </v-card>
      </div>
    </div>
  </v-app>
  
</template>

<script>
import NavbarAdm from '@/components/NavbarAdm'

export default {
  name: 'App',
  components: { NavbarAdm },
  

  data: () => ({
    value1: [
        423,
        446,
        675,
        510,
        590,
        610,
        760,
      ],
      value: [
        423,
        446,
        675,
        510,
        590,
        610,
        460,
      ],
    search1: '',
    search2: '',
        headers1: [
          {
            text: 'Produto',
            align: 'start',
            filterable: false,
            value: 'name',
          },
          { text: 'id', value: 'id' },
          { text: 'preço (R$)', value: 'preço' },
          { text: 'vendidos', value: 'vendidos' },
          { text: 'total', value: 'total'}
          
        ],
        headers: [
          {
            text: 'Serviço',
            align: 'start',
            filterable: false,
            value: 'name',
          },
          { text: 'id', value: 'id' },
          { text: 'preço (R$)', value: 'preço' },
          { text: 'executados', value: 'executados' },
          { text: 'total', value: 'total'}
          
        ],
        products: [
          {
            name: 'Ração Special dog 20 kg',
            id: '#1',
            preço: 115.00,
            vendidos: 4,
            total: 460.00
          },
          {
            name: 'Coleira com tag',
            preço: 35,
            vendidos: 6,
            id: '#21',
            total: 210
         
          },
          {
            name: 'Biscoito de cachorro "Caninos"',
            preço: 11.25,
            vendidos: 8,
            id: '#23',
            total: 90
        
          },
          
          
        ],
        services: [
          {
            name: 'Banho',
            id: '#2',
            preço: 45.00,
            executados: 2,
            total: 90.00
          },
          {
            name: 'Tosa',
            preço: 35,
            executados: 4,
            id: '#1',
            total: 140
         
          },
          {
            name: 'Veterinário',
            preço: 115,
            executados: 2,
            id: '#3',
            total: 230
        
          },
          
          
        ],
  }),

  methods: {
    send(user){
      this.$emit('register-user', user);
    }
  }
};
</script>