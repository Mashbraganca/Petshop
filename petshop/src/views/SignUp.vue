<template>
  <v-app>
    <Toolbar :user=user :logged=logged @update-user="send"/>
    <div>
      <h1>Create a Free Account</h1>

      <v-form v-model="valid">
        <v-container>
          <v-layout row wrap>
            <v-flex md6>
              <v-card flat class="text-center ma-3">
                <v-card-title>
                    <h1>Login Info</h1>
                </v-card-title>

                <v-card-text class="my-4">
                  <v-text-field label="Nome*" v-model="name" :rules="nameRules" required></v-text-field>
                  <v-text-field label="Sobrenome*" v-model="lastName" :rules="lastnameRules" required></v-text-field>
                  <v-text-field label="Senha*" v-model="password" :rules="passwordRules" type="password" required></v-text-field>
                  <v-text-field label="Confirmar Senha*" v-model="confirmPassword" :rules="[confRules]" type="password" required></v-text-field>
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
                      <v-text-field label="E-mail*" v-model="email" :rules="emailRules" required></v-text-field>
                      <v-text-field label="Telefone" v-model="phone" :rules="phoneRules" ></v-text-field>
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
      </v-form>
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
      valid: false,


      name: '',
      lastName: '',
      nameRules: [
        v => !!v || 'Requer nome',
        v => v.length <= 15 || 'Nome tem que ter menos que 15 caracteres',
      ],
      lastnameRules: [
        v => !!v || 'Requer sobrenome',
        v => v.length <= 30 || 'Sobrenome tem que ter menos que 30 caracteres',
      ],

      email: '',
      emailRules: [
        v => !!v || 'Requer E-mail',
        v => /.+@.+/.test(v) || 'Insira um e-mail válido',
      ],

      password: '',
      confirmPassword: '',
      passwordRules: [
        v => !!v || 'Requer senha',
        v => v.length >= 8 || 'Nome tem que ter pelo menos 8 caracteres',
      ],
      phone: '',
      phoneRules: [
        v => /^[0-9]*$/.test(v) || 'Insira um número válido'
      ],
      address: '',
      photo: './profile-placeholder.png'
    }
  },

  computed: {
    confRules() {
      return () => (this.password === this.confirmPassword) || 'As senhas precisam conicidir'
    }
  },

  methods: {
    uploadPhoto(){
        //load photo and store on database
        console.log("Photo Uploaded");
    },

    submit(){
      if(!this.valid){
        alert("Preencha dos campos com dados válidos");
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