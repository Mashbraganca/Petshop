<template>
  <v-app>
    <NavbarAdm/>
    <div class="admin" background-color="purple accent-4">
      <div color="purple accent-4">
        <v-card 
        class="mx-auto"
        elevation-12
        max-width="900"
        >
          <v-list-item >
            
          </v-list-item>
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
  

  data: () => ({
    //
  }),
};
</script>