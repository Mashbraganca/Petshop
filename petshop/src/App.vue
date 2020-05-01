<template>
  <v-app>
    <Toolbar @update-user="getUser"/>

    <v-content>
      <router-view :logged=logged></router-view>
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
