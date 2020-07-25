<template>
  <v-app>
    <v-content>
      <router-view :cart=cart :logged=logged :user=user @register-user="getUser" @to-cart="toCart"></router-view>
    </v-content>

  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    logged: false,
    cart: [],
    user: null
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
