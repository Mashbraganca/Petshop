<template>
  <v-app>
    <Toolbar :logged=logged @update-user="getUser"/>

    <v-content>
      <router-view :logged=logged @register-user="getUser"></router-view>
    </v-content>

  </v-app>
</template>

<script>
import Toolbar from '@/components/Toolbar'


export default {
  name: 'App',
  components: {Toolbar},

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
