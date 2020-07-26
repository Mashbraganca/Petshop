<template>
    <v-dialog v-model="popup" max-width="500px">
        <template v-slot:activator="{ on }">
            <div v-if="date.month == currMonth">
                <v-btn class="" text outlined color="blue" v-on="on" block>
                    <h2>{{date.day}}</h2>
                </v-btn>
            </div>
            <div v-else>
                <v-btn class="" disabled text color="grey" v-on="on" block>
                    <h2>{{date.day}}</h2>
                </v-btn>
            </div>
        </template>
        <v-card>
            <v-card-title>
                <h1>{{date.day}} de {{months[date.month]}}</h1>
            </v-card-title>

            <v-container>
                <v-layout row wrap>
                    <v-flex md6>
                        <v-card flat class="text-center ma-3">
                            <v-card-title><h3>Manhã</h3></v-card-title>
                            <v-card flat outlined class="text-left ma-2" v-for="(h, index) in am" :key=index>
                                <v-container pt-0 pb-1><v-layout row wrap>
                                    <v-flex md2>
                                        <span class="grey--text"> {{h}} </span>
                                    </v-flex>

                                    <v-flex md8>
                                        <div v-if="order(h) == -1">     
                                            <b>Disponível</b> <br>
                                            <v-btn text small color=blue @click="choose(h)">Agendar</v-btn>
                                        </div>
                                        <div v-else class="grey--text">
                                            <span>{{order(h).name}} <br></span>
                                            <span class="caption" >{{order(h).user}} - {{order(h).pet}}</span>
                                        </div>
                                    </v-flex>
                                </v-layout></v-container>
                            </v-card>
                        </v-card>
                    </v-flex>

                    <v-flex md6>
                        <v-card flat class="text-center ma-3">
                            <v-card-title><h3>Tarde</h3></v-card-title>
                            <v-card flat outlined class="text-left ma-2" v-for="(h, index) in pm" :key=index>
                                <v-container pt-0 pb-1><v-layout row wrap>
                                    <v-flex md2>
                                        <span class="grey--text"> {{h}}h </span>
                                    </v-flex>

                                    <v-flex md8>
                                        <div v-if="order(h) == -1">     
                                            <b>Disponível</b> <br>
                                            <v-btn text small color=blue @click="choose(h)">Agendar</v-btn>
                                        </div>
                                        <div v-else class="grey--text">
                                            <span>{{order(h).name}} <br></span>
                                            <span class="caption" >{{order(h).user}} - {{order(h).pet}}</span>
                                        </div>
                                    </v-flex>
                                </v-layout></v-container>
                            </v-card>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue" text @click="popup = false">Cancelar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ['currMonth', 'date', 'orders'],

    data() {
        return {
            popup: false,

            am: [ 7, 8, 9, 10, 11],
            pm: [ 13, 14, 15, 16, 17],
            months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
             'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],

            hour: -1
        };
    },

    methods: {
        order(hour){
            for(var i=0; i<this.orders.length; i++){
                let orderDate = {day: this.orders[i].date.getDate(), month: this.orders[i].date.getMonth(), }
                if(orderDate.day == this.date.day && orderDate.month == this.date.month && this.orders[i].hour == hour)
                    return this.orders[i];
            }
            return -1;
        },

        choose(hour){
            this.popup = false;
            this.$emit('schedule', { date: this.date, hour: hour });
        }
    }
};
</script>