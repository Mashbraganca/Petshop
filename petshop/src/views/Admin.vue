<template>
  <v-app>
    <NavbarAdm />
    <div class="admin">
    <h1>This is the admin page</h1>
    </div>
  </v-app>
  
</template>

<script>
import NavbarAdm from '@/components/NavbarAdm'

export default {
  name: 'App',
  components: { NavbarAdm },
  

  data: () => ({
    //
  }),
};
</script>