<template>
  <v-app>
    <Toolbar :user=user :logged=logged @update-user="send"/>
  
    <h1>Agendar Serviço</h1>
    <v-container><v-layout row wrap>
        <v-flex md6>
            <v-carousel vertical light hide-delimiter-background height="375" :show-arrows="false">
                <v-carousel-item v-for="m in 3" :key="m">
                    <div><h2 class="text-center"> {{ months[m + firstMonth - 1]}} </h2></div>
                    <v-row no-gutters>
                        <v-col v-for="i in 7" :key=i>
                            <v-card-text class="text-center">{{days[i-1]}}</v-card-text>
                            <v-card flat v-for="j in getNumWeeks(m)" :key=j>
                                <Day
                                    :date="getDate((j-1)*7 + i, m)"
                                    :currMonth="m+firstMonth-1"
                                    :orders=orders
                                    :services=services
                                    :customers=customers
                                    :pets=pets
                                    @schedule="schedule"/>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-carousel-item>
            </v-carousel>
        </v-flex>

        <v-flex md1></v-flex>

        <v-flex md5>
            <h1>Informações Adicionais</h1>
            <v-card v-if="service !== null" flat dark color="light-blue darken-3">
                <v-layout row>
                    <span class="ml-4">
                        <h2>Agendar {{ service.name }}</h2>
                    </span>
                </v-layout>
            </v-card>

            <v-card v-if="hour !== null" color="blue--text" outlined >
                <v-layout row>
                    <span class="ml-4">
                        <h2>{{hour.date.day}} de {{months[hour.date.month]}} às {{hour.hour}} hs</h2>
                    </span>
                </v-layout>
            </v-card>

            <v-form v-model="valid">

            <v-select
                v-model="select"
                :items="services"
                :rules="[serviceRule]"
                item-text="name"
                item-value="id"
                label="Selecione um serviço"
                return-object
                single-line
            ></v-select>

            <v-select
                v-model="pet"
                :items="petNames"
                :rules="petRules"
                item-text="name"
                item-value="id"
                label="Selecione um pet"
                return-object
                single-line
            ></v-select>

            <v-text-field label="Credit Card*" v-model="credit" :rules="creditRules" required></v-text-field>

            </v-form>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue" text @click="cancel">Cancelar</v-btn>
                <v-btn v-if="service != null" color="blue" text @click="save">Agendar</v-btn>
            </v-card-actions>
        </v-flex>
    </v-layout></v-container>
  </v-app>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import Day from '@/components/Day'

export default {
  props: ['logged', 'user', 'gizmo', 'services', 'orders', 'customers', 'pets'],
  components: { Toolbar, Day },

  data() {
    return{
      valid: false,
      days: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      pet: null,
      petRules: [
        v => !!v || 'Por favor escolha um pet'
      ],
      select: null,
      selectRules: [
        v => !!v || 'Por favor escolha um serviço'
      ],
      hour: null,
      credit: '',
      creditRules: [
        v => !!v || 'Requer cartão de crédito',
        v => /^[0-9]*$/.test(v) || 'Insira um número válido'
        ],
    }
  },

  computed: {
        firstMonth () {
            var d = new Date();
            d.setDate(d.getDate() + 1);
            return d.getMonth();
        },

        service(){
            if(this.select !== null) return this.select;
            return this.gizmo;
        },

        serviceRule () {
            return () => (this.gizmo !== null || this.select !== null) || 'As senhas precisam conicidir'
        },

        petNames () {
            let names = [];
            
            for(var i=0; i<this.pets.length; i++){
                if (this.pets[i].idcliente == this.user.id)
                    names.push(this.pets[i]);
            }

            return names;
        }
  },

    methods: {
        getDate(offset, m){
            var d = new Date();
            d.setMonth(m + this.firstMonth - 1);
            d.setDate(offset - this.getWeek(m));
            return { day: d.getDate(), month: d.getMonth(), week: d.getDay() };
        },

        getWeek (m) {
            var d = new Date();
            d.setMonth(m + this.firstMonth - 1, 1);
            return d.getDay();
        },

        getNumWeeks(m) {
            let monthLens = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            let month = m + this.firstMonth - 1;
            return Math.ceil((this.getWeek(m) + monthLens[month])/7);
        },

        send(user){
            this.$emit('register-user', user);
        },

        schedule(data){
            this.hour = data;
        },

        cancel(){
            this.$emit('to-calendar', null);
            this.$router.push('/');
        },

        save(){
            if (this.hour === null) alert("Por favor escolha um horário");
            else if (!this.valid) alert("Preencha dos campos com dados válidos");
            else {
                let data = {
                    usuario: this.user.id,
                    pet: this.pet.id,
                    criarData: this.hour.date,
                    criarHora: this.hour.hour,
                    itens:{
                        serviço: this.service.id,
                        preço: this.service.preço
                    }  
                }
                //salvar serviço
                console.log(data);


                this.$router.push('/');
            }
        }
  }
}
</script>
