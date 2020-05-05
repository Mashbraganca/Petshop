<template>
  <v-app>
    <v-content>
      <router-view :logged=logged @register-user="getUser"></router-view>
    </v-content>

  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    logged: false
  }),

  methods: {
    getUser(info) {
      this.logged = info;
    }
  }
};
</script>
