<template>
    <v-app>
       <Toolbar :logged=logged @update-user="getUser"/> 
    
    <div>
        <v-container>
            <v-card-title><h1>Cart</h1></v-card-title>

            <v-flex md6 ma-3 v-for="item in cart" :key="item.name">
                <v-card flat color="blue lighten-5">
                    <v-contaniner color="blue lighten-5">
                        <v-layout row wrap>
                            <v-flex md6 ml-4>
                                <span class="headline">{{item.name}}</span> 
                            </v-flex>
                            
                            <v-flex md2>
                                <span class="subheadline blue--text">R$ {{item.price}}</span>
                            </v-flex>

                            <v-flex md2>
                                <span class="subheadline">x </span>
                                <v-btn text fab x-small color="blue" @click="item.qtd = decrease(item.qtd)"><span class="headline">-</span></v-btn>
                                <span class="subheadline"> {{item.qtd}}</span>
                                <v-btn text fab x-small color="blue" @click="item.qtd = increase(item.qtd)"><span class="headline">+</span></v-btn>
                            </v-flex>

                            <v-flex md1>
                                <v-btn depressed dark fab small color="red"><span class="headline"> X </span></v-btn>
                            </v-flex>
                        </v-layout>
                    </v-contaniner>
                </v-card>
            </v-flex>

            <v-flex md6 ma-3>
                <v-card flat color="grey lighten-3">
                    <v-contaniner>
                        <v-layout row wrap>
                            <v-flex md6 ml-4>
                                <span class="headline">Total</span> 
                            </v-flex>
                            
                            <v-flex md2>
                                <span class="subheadline blue--text">R$ {{total}}</span>
                            </v-flex>
                        </v-layout>
                    </v-contaniner>
                </v-card>
            </v-flex>

        </v-container>
    </div>
  </v-app>
</template>

<script>
import Toolbar from '@/components/Toolbar'


export default {
    components: { Toolbar },

  data() {
    return{
        maxQtd: 10,

        cart: [
            { name: 'A', price: 2.0, qtd: 1},
            { name: 'B', price: 1.0, qtd: 2},
            { name: 'C', price: 1.5, qtd: 2}
        ],
    }
  },

  computed: {
        total () {
            var total = 0;
            for(var i=0; i<this.cart.length; i++)
                total = total + this.cart[i].price * this.cart[i].qtd;
            
            return total;
        }
    },

    methods: {
        increase(value) {
            if (value >= this.maxQtd)
                return value;
            else
                return value+1;
        },

        decrease(value) {
            if (value <= 0)
                return value;
            else
                return value-1;
        }
    }
}
</script>
