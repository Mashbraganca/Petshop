<template>
  <v-app>
    <Toolbar :logged=logged @update-user="getUser"/>
  
    <div>
      <h1>Calendar</h1>
      <v-container pa-0>
        <v-layout row wrap>
          <v-flex md1 v-for="i in 7" :key=i>
            <v-card flat v-for="j in 10" :key=j>
                <Day :date="getDate((j-1)*7 + (i-1))" />
            </v-card>
          </v-flex>
        </v-layout>
        
      </v-container>

    </div>
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
      services: [
        { name: 'X', price: 10.0, icon: '/service-placeholder.png'},
        { name: 'Y', price: 10.0, icon: '/service-placeholder.png'},
        { name: 'Z', price: 10.0, icon: '/service-placeholder.png'}
      ]
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
