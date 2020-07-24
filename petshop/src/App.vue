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
    }
  }),

  methods: {
    getUser(info) {
      if (info == null){
        this.logged = false;
        //placeholder, can be null at the futute, only relevant on development 
        this.user = {
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
        };

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
