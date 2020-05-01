<template>
    <v-dialog v-model="popup" persistent max-width="400px">
        <template v-slot:activator="{ on }">
            <v-btn text color="blue" v-on="on" @click="login = false">Sign In</v-btn>
        </template>
        <v-card>
            <v-card-title>
                <h1>Login</h1>
            </v-card-title>

            <v-card-text>
                <v-text-field label="Username*" required></v-text-field>
                <v-text-field label="Password*" type="password" required></v-text-field>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue" text @click="popup = false">Cancel</v-btn>
                <v-btn color="blue" text @click="popup = false, emitLogin()">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      popup: false,
    };
  },

  methods: {
      emitLogin() {
          this.$emit('emit-login', true);
      }
  }
};
</script>