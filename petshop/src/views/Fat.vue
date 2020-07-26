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
        let cart = this.purchases[i].items;
        for(var j=0; j<cart.length; j++){
          if (!id.includes(cart[j].product)){
            //get product by id
            let item = this.getProductById(cart[j].product);
            id.push(cart[j].product);
            buffer[cart[j].product] = { name: item.name, price: item.price, qtd: 0};
          }

          buffer[cart[j].product].qtd += cart[j].qtd;
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
        let user = this.getCustomerById(purchase.customer);

        let items = [], total = 0;
        for(var j=0; j<purchase.items.length; j++){
          //get product by id
          let item = this.getProductById(purchase.items[j].product);
          total += item.price * purchase.items[j].qtd;
          items.push({ id: j, name:item.name, qtd: purchase.items[j].qtd });
        }
        console.log(items);
        list.push({ id: i, customer: user.name, cart: items, date: purchase.date, total: total });
      }

      return list;
    },





    perService: function() {
      let id = [], buffer = {};

      for (var i=0; i<this.orders.length; i++){
        if (!id.includes(this.orders[i].service)){
          //get service by id
          let serv = this.getServiceById(this.orders[i].service);
          id.push(this.orders[i].service);
          buffer[this.orders[i].service] = { name: serv.name, price: serv.price, qtd: 0};
        }

        buffer[this.orders[i].service].qtd ++; 
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
        let user = this.getCustomerById(order.customer);
        let pet = this.getPetById(order.pet);
        let serv = this.getServiceById(order.service);

        list.push({ id: i, customer: user.name, pet: pet.name, date: order.date, service: serv.name, total: serv.price });
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