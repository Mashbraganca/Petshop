<template>
  <v-app style=" background: #AD97FF ">
    <NavbarAdm :user="user" @update-user="send"/>
      <div class="AdminReg">
        <div><v-row>a</v-row></div>
        <v-card class="mx-auto" elevation-15 max-width="80%">
          <v-card-title primary-title>
            <div v-if="this.target === null"><h1>Novo administrador</h1> </div>
            <div v-else><h1>Editar administrador</h1> </div>

          </v-card-title>
          <v-form v-model="valid">
            <v-container grid-list-xs>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field v-model="firstname" :rules="nameRules" label="Nome" required></v-text-field>
                  <v-text-field v-model="lastname" :rules="lastnameRules" label="Sobrenome" required></v-text-field>
                  <v-text-field v-model="password" :rules="passwordRules" label="Senha" type="password" required></v-text-field>
                  <v-text-field v-model="confpassword" :rules="[confRules]" label="Confirmar Senha" type="password" required></v-text-field>
                
                  <v-btn text color="blue" class="my-4" router to="/admins">Cancel</v-btn>
                  <v-btn color="blue" @click="submit">Save</v-btn>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                  <v-text-field v-model="phone" :rules="phoneRules" label="Telefone" required></v-text-field>

                  <v-row>
                    <v-col cols="12" md="6">
                      <v-avatar size=200px> <img :src=photo alt="Profile Picture"></v-avatar>
                    </v-col>
                    <v-col cols="12" md="2">
                      <v-file-input
                        accept="image/png, image/jpeg, image/bmp"
                        prepend-icon="mdi-camera"
                        :rules="photoRule"
                        hide-input
                        rounded
                      ></v-file-input>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
          </v-form>

        </v-card>
      </div>
  </v-app>
  
</template>

<script>
import NavbarAdm from '@/components/NavbarAdm'

export default {
  name: 'App',
  components: { NavbarAdm },
  props: ['user', 'target'],

  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
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
    phone: '',
    phoneRules: [
      v => /^[0-9]*$/.test(v) || 'Insira um número válido'
    ],
    password: '',
    confpassword: '',
    passwordRules: [
      v => !!v || 'Requer senha',
      v => v.length >= 8 || 'Nome tem que ter pelo menos 8 caracteres',
    ],

    photo: './profile-placeholder.png',
    photoRule: [
      v=> !v || v.size < 2000000 || 'A foto de profile tem que ser menos de 2MB!',
    ],
  }),

  computed: {
    confRules() {
      return () => (this.password === this.confpassword) || 'As senhas precisam conicidir'
    }
  },

  methods: {
    send(user){
        this.$emit('register-user', user);
    },

    addAdmin(data){
      //adicionar administrador
      let name = data.name;
      console.log(name + " created!");



      this.$emit('refresh', 'admins');
      this.$router.push('/admins');
    },

    editAdmin(data){
      //editar administrador
      console.log(this.target.id + " updated to " + data.name);



      this.$emit('refresh', 'admins');
      this.$router.push('/admins');
    },

    submit(){
      if (!this.valid){
        alert("Por favor preencha os campos com dados válidos");
        return;
      }

      let data = {
        name: this.firstname,
        lastName: this.lastname,
        email: this.email,
        photo: this.photo,
        phone: this.phone
      }

      if (this.target == null) this.addAdmin(data);
      else this.editAdmin(data);
    }
  }
};
</script>