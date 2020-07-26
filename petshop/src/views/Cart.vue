<template>
    <v-app>
       <Toolbar :user=user :logged=logged @update-user="send" /> 
    
    <div>
        <v-container>
            <v-card-title><h1>Cart</h1></v-card-title>
            <v-flex md10 ma-3>
                <v-card flat>
                    <v-layout row>
                        <v-flex md7> <span class="caption blue--text ml-7"> Produto </span> </v-flex>
                        <v-flex md3> <span class="caption blue--text mr-5"> Preço (Unit.) </span> </v-flex>
                        <v-flex md2> <span class="caption blue--text "> Quantidade </span> </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>

            <v-flex md10 ma-3 v-for="item in cart" :key="item.name">
                <v-card outlined>
                    <v-layout row>
                        <v-flex md7 > <span class="headline ml-6">{{item.name}}</span> </v-flex>

                        <v-flex md2>
                            <span class="subheadline">R$ {{item.preço}}</span>
                        </v-flex>

                        <v-flex md3 class="text-right">
                            <v-btn icon small color="blue" @click="decrease(item)">
                                <v-icon small >mdi-minus</v-icon>
                            </v-btn>

                            <span class="subheadline"> {{item.quantidade}}</span>

                            <v-btn icon small color="blue" @click="increase(item)">
                                <v-icon small>mdi-plus</v-icon>
                            </v-btn>
                        
                            <v-btn icon color="red" class="mr-4"><v-icon>mdi-trash-can-outline</v-icon></v-btn>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>

            <v-flex md10 ma-3>
                <v-card flat dark color="light-blue darken-3">
                    <v-layout row>
                        <v-flex md7 > <span class="headline ml-6"> Total </span> </v-flex>
                        <v-flex md2> <span class="subheadline">R$ {{total}}</span> </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>

            <v-flex md10 ma-3>
                

                <v-card-actions v-if="cart.length > 0">
                    <v-form v-model="valid">
                        <v-text-field label="Credit Card*" v-model="credit" :rules="creditRules" required></v-text-field>
                    </v-form>
                    
                    <v-spacer></v-spacer>
                    <v-btn color="blue" text @click="buy">Comprar</v-btn>
                    </v-card-actions>
            </v-flex>

        </v-container>
    </div>
  </v-app>
</template>

<script>
import Toolbar from '@/components/Toolbar'


export default {
    components: { Toolbar },
    props: ['logged', 'user', 'cart'],

    data() {
        return{
            valid: false,
            credit: '',
            creditRules: [
                v => !!v || 'Requer cartão de crédito',
                v => /^[0-9]*$/.test(v) || 'Insira um número válido'
            ],
        }
    },

    computed: {
        total () {
            var total = 0;
            for(var i=0; i<this.cart.length; i++)
                total = total + this.cart[i].preço * this.cart[i].quantidade;
            
            return total;
        }
    },

    methods: {
        increase(item) {
            this.$emit('to-cart', item, 1);
        },

        decrease(item) {
            this.$emit('to-cart', item, -1);
        },

        send(user){
            this.$emit('register-user', user);
        },

        buy(){
            if(!this.valid) {
                alert("Insira um número de cartão de crédito válido");
                return;
            }

            let today = new Date();
            let data = {
                cart: this.cart,
                date: {
                    day: today.getDate(),
                    month: today.getMonth()
                }
            }

            //salvar serviço
            console.log(data);
            console.log("Itens Purchased");

            this.$emit('to-cart', null,  0);
            alert("Compra efetuada com sucesso!");
            this.$emit('refresh', 'purchases');
            this.$router.push('/');
        }
    }
}
</script>
