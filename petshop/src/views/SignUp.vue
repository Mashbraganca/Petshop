<template>
  <div>
    <h1>Create a Free Account</h1>

    <v-container>
      <v-layout row wrap>
        <v-flex md6>
          <v-card flat class="text-center ma-3">
            <v-card-title>
                <h1>Login Info</h1>
            </v-card-title>

            <v-card-text>
                <v-text-field label="Full Name*" required></v-text-field>
                <v-text-field label="Username*" required></v-text-field>
                <v-text-field label="Password*" type="password" required></v-text-field>
                <v-text-field label="Confirm Password*" type="password" required></v-text-field>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex md6>
          <v-card flat class="text-center ma-3">
            <v-card-title>
                <h1>Profile</h1>
            </v-card-title>

            <v-card-text>
                <v-text-field label="Email*" required></v-text-field>
                <v-text-field label="Phone"></v-text-field>
                <v-text-field label="Address"></v-text-field>

                <div class="text-left">
                    <v-avatar left size=100px>
                        <img :src=photo alt="Profile Picture">
                    </v-avatar>

                    <v-btn color="blue" text> Upload Image</v-btn>
                </div>
            </v-card-text>

            <v-card-actions>
                <v-btn color="blue" @click="sendTo('/')">Cancel</v-btn>
                <v-btn color="blue" @click="register(true), sendTo('/')">Register</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
  </div>
</template>

<script>
export default {
  props: ['logged'],

  data() {
    return{
      photo: './profile-placeholder.png'
    }
  },

  methods: {
    register(info){
            this.$emit('register-user', info);
        },
    
    sendTo(path){
        this.$router.push(path);
    }
  }
}
</script>