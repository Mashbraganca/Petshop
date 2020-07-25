<template>
  <v-app>
    <v-content>
      <router-view
        :cart=cart
        :logged=logged
        :user=user
        :products=products
        :services=services
        :orders=orders
        @register-user="getUser"
        @to-cart="toCart">
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
    //placeholders, can assume null values on final version
    user: { 
      name: "Solid Snake",
      photo: './profile-placeholder.png',
      id: "SNAAAAAAAAAAAAAAKE",
      address: "a box",
      phone: "000000000",
      email: "snake.SNAAAAKE@gmail.com",

      pets: [
        {name: 'Pet1', id: 'noossaa1', photo: './pet-placeholder.png', race: 'Celeste', age: 42},
        {name: 'Pet2', id: 'noossaa2', photo: './pet-placeholder.png', race: 'Celeste', age: 42},
        {name: 'Pet3', id: 'noossaa3', photo: './pet-placeholder.png', race: 'Celeste', age: 42}
      ]
    },

    products: [
      { name: 'A', id: '1', price: 1.0, photo: '/item-placeholder.png'},
      { name: 'B', id: '2', price: 1.0, photo: '/item-placeholder.png'},
      { name: 'C', id: '3', price: 1.0, photo: '/item-placeholder.png'}
    ],

    services: [
        { name: 'X', price: 10.0, icon: '/service-placeholder.png', id: 1},
        { name: 'Y', price: 10.0, icon: '/service-placeholder.png', id: 2},
        { name: 'Z', price: 10.0, icon: '/service-placeholder.png', id: 3}
    ],

    orders: [
      {name: 'X', icon: '/item-placeholder.png', pet: 'Celeste1', user: 'snake', hour:10},
      {name: 'Y', icon: '/item-placeholder.png', pet: 'Celeste2', user: 'snake', hour:13}
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
      for(var i=0; i<this.cart.length; i++){
        if (this.cart[i].id == item.id){
          this.cart[i].qtd += qtd;
          if (this.cart[i].qtd <= 0){
            //remove element from cart
            for(var j=i+1; j<this.cart.length; j++){ this.cart[j-1] = this.cart[j]; }
            this.cart.pop();
          }
          return;
        }
      }

      this.cart.push({ name: item.name, id: item.id, price: item.price, qtd: 1 });
    }
  }
};
</script>
