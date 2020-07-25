<template>
  <v-app>
    <v-content>
      <router-view :logged=logged :user=user @register-user="getUser"></router-view>
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
    }
  }
};
</script>
