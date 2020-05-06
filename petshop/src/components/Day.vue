<template>
    <v-dialog v-model="popup" max-width="500px">
        <template v-slot:activator="{ on }">
            <v-btn class="ma-1" outlined text color="blue" v-on="on" small width=10px>
                {{date.day+1}}/{{date.month+1}}
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <h1>{{date.day+1}}/{{date.month+1}}</h1>
            </v-card-title>

            <v-container>
                <v-layout row wrap>
                    <v-flex md6>
                        <v-card flat class="text-center ma-3">
                            <v-card-title><h3>Morning</h3></v-card-title>
                            <v-card flat outlined class="text-left ma-2" v-for="(h, index) in am" :key=index>
                                <v-container pt-0 pb-1><v-layout row wrap>
                                    <v-flex md2>
                                        <span class="grey--text"> {{h}} </span>
                                    </v-flex>

                                    <v-flex md8>
                                        <div v-if="order(h) == -1">     
                                            <b>Free!</b> <br>
                                            <v-btn text small color=blue>Shedule</v-btn>
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
                            <v-card-title><h3>Afternoon</h3></v-card-title>
                            <v-card flat outlined class="text-left ma-2" v-for="(h, index) in pm" :key=index>
                                <v-container pt-0 pb-1><v-layout row wrap>
                                    <v-flex md2>
                                        <span class="grey--text"> {{h}} </span>
                                    </v-flex>

                                    <v-flex md8>
                                        <div v-if="order(h) == -1">     
                                            <b>Free!</b> <br>
                                            <v-btn text small color=blue @click="getDate()">Shedule</v-btn>
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
                <v-btn color="blue" text @click="popup = false">Cancel</v-btn>
                <v-btn color="blue" text @click="popup = false">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ['services', 'week', 'date'],

    data() {
        return {
            am: ['7h', '8h', '9h', '10h', '11h'],
            pm: ['13h', '14h', '15h', '16h', '17h'],

            servs: [
                {name: 'X', icon: '/item-placeholder.png', pet: 'Celeste1', user: 'snake', hour:'10h'},
                {name: 'Y', icon: '/item-placeholder.png', pet: 'Celeste2', user: 'snake', hour:'13h'}
            ]
        };
    },

    methods: {
        order(hour){
            for(var i=0; i<this.servs.length; i++){
                if(this.servs[i].hour == hour)
                    return this.servs[i];
            }
            return -1;
        },

        getDate(){
            var currentDate = new Date();
            console.log(currentDate);

            var currentDateWithFormat = new Date().toJSON().slice(0,10);
            console.log(currentDateWithFormat);
        }
    }
};
</script>