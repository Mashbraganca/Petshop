<template>
  <v-app>
    <v-content>
      <router-view
        :cart=cart :gizmo=gizmo :logged=logged :user=user :target=target
        :products=products :services=services :customers=customers :pets=pets
        :admins=admins :categories=categories :orders=orders :purchases=purchases
        @register-user="getUser" @set-target="setTarget" @refresh="refresh" @to-calendar="toCalendar" @to-cart="toCart">
      </router-view>
    </v-content>

  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    logged: false,
    cart: [],
    gizmo: null,
    target: null,

    //placeholders, can assume null values on final version
    user: { 
      name: "Solid",
      sobrenome: "Snake",
      image: './profile-placeholder.png',
      id: "SNAAAAAAAAAAAAAAKE",
      endereço: "a box",
      telefone: "000000000",
      email: "snake.SNAAAAKE@gmail.com"
    },

    products: [
      { name: 'A', id: '1', preço: 3.0, image: '/item-placeholder.png', quantidade: 20, categoria: 'Acessório', descrição: 'estrela'},
      { name: 'B', id: '2', preço: 1.0, image: '/item-placeholder.png', quantidade: 60, categoria: 'Acessório', descrição: 'estrela'},
      { name: 'C', id: '3', preço: 1.0, image: '/item-placeholder.png', quantidade: 10, categoria: 'Acessório', descrição: 'estrela'}
    ],

    services: [
        { name: 'X', preço: 10.0, image: '/service-placeholder.png', id: 1, descrição: 'esmeralda roxa'},
        { name: 'Y', preço: 11.0, image: '/service-placeholder.png', id: 2, descrição: 'esmeralda roxa'},
        { name: 'Z', preço: 10.0, image: '/service-placeholder.png', id: 3, descrição: 'esmeralda roxa'}
    ],

    orders: [
      {itens: [{serviço: 1}], pet: 'noossaa1', usuario: "SNAAAAAAAAAAAAAAKE", criarData: new Date(2020, 6, 28), criarHora:10},
      {itens: [{serviço: 2}], pet: 'noossaa2', usuario: "SNAAAAAAAAAAAAAAKE", criarData: new Date(2020, 6, 30), criarHora:13}
    ],

    purchases: [
      { usuario: "SNAAAAAAAAAAAAAAKE", itens: [{produto: '1', quantidade: 7}, {produto: '2', quantidade: 20}], criarData: new Date(2020, 6, 28) },
      { usuario: "SNAAAAAAAAAAAAAAKE", itens: [{produto: '1', quantidade: 14}], criarData: new Date(2020, 6, 29) },
      { usuario: "SNAAAAAAAAAAAAAAKE", itens: [{produto: '2', quantidade: 10}], criarData: new Date(2020, 6, 30) }
    ],

    admins: [
      {name: "Solid", sobrenome: "Snake", image: './profile-placeholder.png', id: "1", telefone: "0", email: "solid@snake.com" },
      {name: "Liquid", sobrenome: "Snake", image: './profile-placeholder.png', id: "2", telefone: "0", email: "liquid@snake.com" },
    ],

    customers: [
      {
        name: "Solid",
        sobrenome: "Snake",
        image: './profile-placeholder.png',
        id: "SNAAAAAAAAAAAAAAKE",
        endereço: "a box",
        telefone: "000000000",
        email: "snake.SNAAAAKE@gmail.com"
      },
      
      {
        name: "Liquid",
        sobrenome: "Snake",
        image: './profile-placeholder.png',
        id: "SNAAAAAAAAAAAAAAKE2",
        endereço: "a box",
        telefone: "000000000",
        email: "snake.SNAAAAKE@gmail.com"
      }  
    ],

    pets: [
      {name: 'Pet1', id: 'noossaa1', image: './pet-placeholder.png', raça: 'Celeste', idade: 42, idcliente: "SNAAAAAAAAAAAAAAKE"},
      {name: 'Pet2', id: 'noossaa2', image: './pet-placeholder.png', raça: 'Celeste', idade: 42, idcliente: "SNAAAAAAAAAAAAAAKE"},
      {name: 'Pet3', id: 'noossaa3', image: './pet-placeholder.png', raça: 'Celeste', idade: 42, idcliente: "SNAAAAAAAAAAAAAAKE2"}
    ],

    categories: [
      {name: 'Ração'},
      {name: 'Acessório'},
      {name: 'Remédios'},
      {name: 'Outros'}
    ]
  }),

  methods: {
    getUser(info) {
      if (info == null){
        this.logged = false;
        this.cart = [];
        this.user = null;
        this.$router.push('/');
      } else {
        this.logged = true;
        this.user = info;
        console.log(info);
      }
    },

    toCart(item, qtd) {
      if (item === null){
        this.cart = [];
        return;
      }

      for(var i=0; i<this.cart.length; i++){
        if (this.cart[i].id == item.id){
          this.cart[i].quantidade += qtd;
          if (this.cart[i].quantidade <= 0){
            //remove element from cart
            for(var j=i+1; j<this.cart.length; j++){ this.cart[j-1] = this.cart[j]; }
            this.cart.pop();
          }
          return;
        }
      }

      this.cart.push({ name: item.name, id: item.id, preço: item.preço, quantidade: 1 });
    },

    toCalendar(service){
      this.gizmo = service;
    },

    setTarget(target){
      this.target = target;
    },

    refresh(op){
      switch(op){
        case 'customers':
          //dar get na lista de clientes
          console.log("Customer List Updated!");
          break;
        
        case 'admins':
          //dar get na lista de admins
          console.log("Admin List Updated!");
          break;

        case 'products':
          //dar get na lista de produtos
          console.log("Product List Updated!");
          break;

        case 'services':
          //dar get na lista de serviços
          console.log("Service List Updated!");
          break;

        case 'orders':
          //dar get na lista de pedidos
          console.log("Order List Updated!");
          break;

        case 'pets':
          //dar get na lista de pedidos
          console.log("Pet List Updated!");
          break;

        case 'categories':
          //dar get na lista de categorias
          console.log("Category List Updated!");
          break;

        case 'purchases':
          //dar get na lista de compras
          console.log("Purchase List Updated!");
          break;

      }
    }
  }
};
</script>
