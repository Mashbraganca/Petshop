<template>
  <v-app style=" background: #AD97FF ">
    <NavbarAdm :user="user" @update-user="send"/>
    <div class="Faturamento">
      <div><v-row>a</v-row></div>
      <div>
        <v-card class="ma-auto" elevation-15 max-width="80%">
          <v-card-title primary-title> <h1>Vendas de Produtos</h1> </v-card-title>

          <v-card max-width="80%" flat class="mx-auto">
              <v-card flat class="ma-2" outlined v-for="entry in productSells" :key="entry.id">
                <v-row>
                  <v-col cols="12" md="7">
                    <v-card-text class="black--text">
                      <h3 class="headline blue--text">
                        <b>{{ "Compra registrada em " + entry.date.getDate() + "/" + entry.date.getMonth() }}</b>
                      </h3>
                      <v-row>
                        <v-col cols="12" md="6"><span><b>Cliente: </b> {{entry.customer}} </span></v-col>
                        <v-col cols="12" md="6"><span><b>Total:</b> R$ {{entry.total}} </span></v-col>
                      </v-row>
                    </v-card-text>
                  </v-col>

                  <v-col cols="12" md="5">
                    <v-card-text class="black--text">
                      <h4 class="headline">
                        <b>Carrinho</b>
                      </h4>
                      <v-row v-for="item in entry.cart" :key="item.id">
                        <v-col cols="12" md="3"><span> {{item.qtd}}x </span></v-col>
                        <v-col cols="12" md="9"><span><b>{{item.name}} </b>  </span></v-col>
                      </v-row>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-card>
          </v-card>

          <v-card flat class="pa-3 ma-4">
            <v-card-title>
              <h2>Por Produto</h2>
              <v-text-field v-model="search1" append-icon="mdi-magnify" label="Busca" class="ml-10"></v-text-field>
            </v-card-title>

            <v-data-table :headers="headers1" :items="perProduct" :search="search1" hide-default-footer></v-data-table>
            <h2 class="text-center grey--text pa-6">Total: {{ "R$ " + totalProduct }} </h2>
          </v-card>

        </v-card>
      </div>








      <div><v-row>a</v-row></div>





      <div>
        <v-card class="ma-auto" elevation-15 max-width="80%">
          <v-card-title primary-title> <h1>Vendas de Serviços</h1> </v-card-title>

          <v-card max-width="80%" flat class="mx-auto">
              <v-card flat class="ma-2" outlined v-for="entry in servSells" :key="entry.id">
                <v-row>
                  <v-col cols="12" md="7">
                    <v-card-text class="black--text">
                      <h3 class="headline blue--text">
                        <b>{{ "Compra registrada em " + entry.date.getDate() + "/" + entry.date.getMonth() }}</b>
                      </h3>
                      <v-row>
                        <v-col cols="12" md="6"><span><b>Cliente: </b> {{entry.customer}} </span></v-col>
                        <v-col cols="12" md="6"><span><b>Total:</b> R$ {{entry.total}} </span></v-col>
                      </v-row>
                    </v-card-text>
                  </v-col>

                  <v-col cols="12" md="5">
                    <v-card-text class="black--text">
                      <h4 class="headline">
                        <b> {{ entry.service }}</b>
                      </h4>
                      <v-row>
                        <v-col cols="12" md="12"><span><b>Pet:</b> {{entry.pet}} </span></v-col>
                      </v-row>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-card>
          </v-card>

          <v-card flat class="pa-3 ma-4">
            <v-card-title>
              <h2>Por Serviço</h2>
              <v-text-field v-model="search1" append-icon="mdi-magnify" label="Busca" class="ml-10"></v-text-field>
            </v-card-title>

            <v-data-table :headers="headers1" :items="perService" :search="search1" hide-default-footer></v-data-table>
            <h2 class="text-center grey--text pa-6">Total: {{ "R$ " + totalService }} </h2>
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
  props: ['user', 'orders', 'services', 'purchases', 'products', 'customers', 'pets'],

  data: () => ({
    search1: '',
    search2: '',
    headers1: [
      { text: 'Produto', align: 'start', sortable: false, value: 'name'},
      { text: 'preço (R$)', value: 'price' },
      { text: 'vendidos', value: 'qtd' },
      { text: 'total', value: 'total'}
      
    ],
    headers: [
      {text: 'Serviço', align: 'start', filterable: false, value: 'name'},
      { text: 'preço (R$)', value: 'preço' },
      { text: 'executados', value: 'executados' },
      { text: 'total', value: 'total'} 
    ],
  }),






  computed: {
    perProduct: function() {
      let id = [], buffer = {};

      for (var i=0; i<this.purchases.length; i++){
        let cart = this.purchases[i].itens;
        for(var j=0; j<cart.length; j++){
          if (!id.includes(cart[j].produto)){
            //get product by id
            let item = this.getProductById(cart[j].produto);
            id.push(cart[j].produto);
            buffer[cart[j].produto] = { name: item.name, price: item.preço, qtd: 0};
          }

          buffer[cart[j].produto].qtd += cart[j].quantidade;
        }
      }

      let list = [];
      for (i=0; i<id.length; i++){
        buffer[id[i]]["total"] = buffer[id[i]].qtd * buffer[id[i]].price;
        list.push(buffer[id[i]]);
      }

      return list;
    },


    totalProduct: function(){
      let total = 0;
      for (var i=0; i<this.perProduct.length; i++) total += this.perProduct[i].total;
      return total;
    },


    productSells: function(){
      let list = [];

      for (var i=0; i<this.purchases.length; i++){
        let purchase = this.purchases[i];
        //get customer by id
        let user = this.getCustomerById(purchase.usuario);

        let items = [], total = 0;
        for(var j=0; j<purchase.itens.length; j++){
          //get product by id
          let item = this.getProductById(purchase.itens[j].produto);
          total += item.preço * purchase.itens[j].quantidade;
          items.push({ id: j, name:item.name, qtd: purchase.itens[j].quantidade });
        }
        console.log(items);
        list.push({ id: i, customer: user.name + " " + user.sobrenome, cart: items, date: purchase.criarData, total: total });
      }

      return list;
    },





    perService: function() {
      let id = [], buffer = {};

      for (var i=0; i<this.orders.length; i++){
        let service = this.orders[i].itens[0].serviço;
        if (!id.includes(service)){
          //get service by id
          let serv = this.getServiceById(service);
          id.push(service);
          buffer[service] = { name: serv.name, price: serv.preço, qtd: 0};
        }

        buffer[service].qtd ++; 
      }

      let list = [];
      for (i=0; i<id.length; i++){
        buffer[id[i]]["total"] = buffer[id[i]].qtd * buffer[id[i]].price;
        list.push(buffer[id[i]]);
      }

      return list;
    },


    totalService: function(){
      let total = 0;
      for (var i=0; i<this.perService.length; i++) total += this.perService[i].total;
      return total;
    },

    
    servSells: function(){
      let list = [];

      for (var i=0; i<this.orders.length; i++){
        let order = this.orders[i];
        //get customer by id
        let user = this.getCustomerById(order.usuario);
        let pet = this.getPetById(order.pet);
        let serv = this.getServiceById(order.itens[0].serviço);

        list.push({ id: i, customer: user.name + " " + user.sobrenome, pet: pet.name, date: order.criarData, service: serv.name, total: serv.preço });
      }

      return list;
    }







  },

  methods: {
    send(user){
      this.$emit('register-user', user);
    },
    //placeholder
    getCustomerById(id){
      for (var i=0; i<this.customers.length; i++){
        if(this.customers[i].id == id){
          return this.customers[i];
        }
      }
    },
    //placeholder
    getProductById(id){
      for (var i=0; i<this.products.length; i++){
        if(this.products[i].id == id){
          return this.products[i];
        }
      }
    },
    //placeholder
    getServiceById(id){
      for (var i=0; i<this.services.length; i++){
        if(this.services[i].id == id){
          return this.services[i];
        }
      }
    },
    //placeholder
    getPetById(id){
      for (var i=0; i<this.pets.length; i++){
        if(this.pets[i].id == id){
          return this.pets[i];
        }
      }
    }
  }
};
</script>