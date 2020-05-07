<template>
  <v-app>
    <Toolbar :logged=logged @update-user="getUser"/>
  
    <v-container><v-layout row wrap>
        <v-flex md8>
            <h1>Calendar</h1>
            <v-container pa-0>
                <v-layout row wrap>
                <v-flex md1 v-for="i in 7" :key=i>
                    <v-card-text class="text-cented">{{days[i-1]}}</v-card-text>
                    <v-card flat v-for="j in 11" :key=j>
                        <div v-if="j>1 || i>=week+1"><Day :date="getDate((j-1)*7 + (i-1) - week)" /></div>
                        <div v-else><Day :date="{day: -1}" /></div>
                    </v-card>
                </v-flex>
                </v-layout>
            </v-container>
        </v-flex>

        <v-flex>
            <h1>Additional Information</h1>
            <v-select :items="pets" filled label="Select 1 Pet"></v-select>
            <v-text-field label="Credit Card*" required></v-text-field>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue" text>Shedule</v-btn>
                
            </v-card-actions>
        </v-flex>
    </v-layout></v-container>
  </v-app>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import Day from '@/components/Day'

export default {
  props: ['logged'],
  components: { Toolbar, Day },

  data() {
    return{
      days: ['Sun', 'Mon', 'Tue', 'Wes', 'Thu', 'Fri', 'Sat'],

      pets: ['pet1', 'pet2', 'pet3', 'pet4', 'pet5']
    }
  },

  computed: {
      week () {
          var currentDate = new Date();
          return currentDate.getDay();
      }
  },

  methods: {
      getDate(offset){
          var monthLens = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
          var currentDate = new Date();

          var currMonth = currentDate.getMonth(), currDay=currentDate.getDate();
          var bufferOffset = offset;

          for(var i=currMonth; i<12; i++){
              if (currDay + bufferOffset < monthLens[i]){
                  currDay = currDay + bufferOffset;
                  currMonth = i;
                  break;
              }
              bufferOffset = bufferOffset - monthLens[i];
          }

          return {day: currDay, month: currMonth, week: (currentDate.getDay()+offset) % 7};
      }
  }
}
</script>
