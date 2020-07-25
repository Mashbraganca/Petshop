<template>
  <v-app>
    <Toolbar :user=user :logged=logged @update-user="send"/>
    <div>
      <h1>Create a Free Account</h1>

      <v-container>
        <v-layout row wrap>
          <v-flex md6>
            <v-card flat class="text-center ma-3">
              <v-card-title>
                  <h1>Login Info</h1>
              </v-card-title>

              <v-card-text class="my-4">
                <v-text-field label="First Name*" v-model="name" required></v-text-field>
                <v-text-field label="Last Name*" v-model="lastName" required></v-text-field>
                <v-text-field label="Password*" v-model="password" type="password" required></v-text-field>
                <v-text-field label="Confirm Password*" v-model="confirmPassword" type="password" required></v-text-field>
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex md6>
            <v-card flat class="text-center ma-3">
              <v-card-title>
                  <h1>Profile</h1>
              </v-card-title>

              <v-card-text>
                <v-container><v-layout row>
                  <v-flex md6>
                    <v-text-field label="Email*" v-model="email" required></v-text-field>
                    <v-text-field label="Phone" v-model="phone" ></v-text-field>
                  </v-flex>

                  <v-flex md6>
                    <div class="text-left my-6 ml-3">
                      <v-avatar left size=100px>
                          <img :src=photo alt="Profile Picture">
                      </v-avatar>

                      <v-btn color="blue" text @click="uploadPhoto"> Upload Image</v-btn>
                    </div>
                  </v-flex>

                  <v-flex md12><v-text-field label="Address" v-model="address" ></v-text-field></v-flex>
                </v-layout></v-container>
                  
              </v-card-text>

              <v-card-actions>
                  <v-btn text color="blue" @click="sendTo('/')">Cancel</v-btn>
                  <v-btn color="blue" @click="submit">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>

      </v-container>
    </div>
  </v-app>
</template>

<script>
import Toolbar from '@/components/Toolbar'


export default {
  props: ['logged', 'user'],
  components: { Toolbar },

  data() {
    return{
      photo: './profile-placeholder.png',

      name: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      address: ''
    }
  },

  methods: {
    uploadPhoto(){
        //load photo and store on database
        console.log("Photo Uploaded");
    },

    submit(){
      if(this.password !== this.confirmPassword){
        alert("A senha e a Confirmação de Senha não coincidem");
        return;
      }

      let data = {
        name: this.name,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        phone: this.phone,
        photo: this.photo,
        address: this.address
      }

      if (this.user === null){
         this.addUser(data);
      } else {
          this.updateUser(data);
      }
    },

    addUser(data) {
      //criar um usuario novo
      let valid = true;
      //console.log(data);

      if (valid){
          console.log("User created");
          //dar um get user para atualizar os dados
          let user = data;
          this.send(user);
          this.sendTo('/');
      } else {
          alert("Informações inválidas");
      }
    },

    updateUser(data){
      //criar um usuario novo
      let id = this.user.id;
      let valid = true;
      console.log(data.name);

      if (valid){
          console.log("User " + id + " Updated");
          //dar um get user para atualizar os dados
          let user = data;
          this.send(user);
          this.sendTo('/profile');
      } else {
          alert("Informações inválidas");
      }
    },

    send(user){
        this.$emit('register-user', user);
    },
    
    sendTo(path){
        this.$router.push(path);
    }
  }
}
</script>