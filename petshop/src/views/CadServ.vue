<template>
  <v-app style=" background: #AD97FF ">
    <NavbarAdm :user="user" @update-user="send"/>
    <div class="Product">
      <div><v-row>a</v-row></div>

      <div class="ServReg">
        <div><v-row>a</v-row></div>
        <v-card class="mx-auto" elevation-15 max-width="80%">
          <v-card-title primary-title>
            <div v-if="this.target === null"><h1>Novo serviço</h1> </div>
            <div v-else><h1>Editar serviço</h1> </div>

          </v-card-title>
          <v-form v-model="valid">
            <v-container grid-list-xs>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field v-model="name" :rules="nameRules" label="Nome" required></v-text-field>
                  <v-text-field v-model="desc" label="Descrição" ></v-text-field>

                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field v-model="price" :rules="priceRules" label="Preço" required class="pr-4"></v-text-field>
                    </v-col>
                    
                    <v-col cols="12" md="6">
                      <v-btn text color="blue" class="my-4" router to="/services">Cancel</v-btn>
                      <v-btn color="blue" @click="submit">Save</v-btn>
                    </v-col>
                  </v-row>
                </v-col>

                <v-col cols="12" md="6">
                    <v-row>
                      <v-col cols="12" md="6">
                        <v-avatar size=200px> <img :src=photo alt="Profile Picture"></v-avatar>
                      </v-col>

                      <v-col cols="12" md="6">
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
      name: '',
      desc: '',
      nameRules: [
        v => !!v || 'Requer nome',
        v => v.length <= 30 || 'Nome tem que ter menos que 30 caracteres',
      ],
      price: '',
      priceRules: [
        v => !!v || 'Requer preço',
        v => /^[0-9]*$/.test(v)   || 'Número tem que ser válido'
      ],
      photo: 'https://i.pinimg.com/originals/e5/fd/57/e5fd57ea7871c00676e95bbe668cbc8f.jpg',
      photoRule: [
        value => !value || value.size < 2000000 || 'A foto de profile tem que ser menos de 2MB!',
      ]
  }),

  methods: {
    send(user){
        this.$emit('register-user', user);
    },

    addService(data){
      //adicionar produto
      let name = data.name;
      console.log(name + " created!");



      this.$emit('refresh', 'services');
      this.$router.push('/services');
    },

    editService(data){
      //editar produto
      console.log(this.target.id + " updated to " + data.name);



      this.$emit('refresh', 'services');
      this.$router.push('/services');
    },

    submit(){
      if (!this.valid){
        alert("Por favor preencha os campos com dados válidos");
        return;
      }

      let data = {
        name: this.name,
        description: this.desc,
        photo: this.photo,
        price: this.price
      }

      if (this.target == null) this.addService(data);
      else this.editService(data);
    }
  }
};
</script>