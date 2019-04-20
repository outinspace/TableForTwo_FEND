<template>
  <div>
    <!-- <v-date-picker class="mb-3" :landscape="$vuetify.breakpoint.smAndUp" scrollable full-width v-model="date"></v-date-picker> -->
    
    <v-layout>
      <v-menu ref="datePicker" class="mr-3" v-model="datePicker" :close-on-content-click="false" 
      :nudge-right="40" :return-value.sync="formData.date" lazy transition="scale-transition" offset-y full-widith min-width="290px">
        <template v-slot:activator="{on}">
          <v-text-field v-model="formData.date" label="Reservation Date" prepend-icon="event" readonly v-on="on"></v-text-field>
        </template>
        <v-date-picker no-title scrollable v-model="formData.date" @input="$refs.datePicker.save(formData.date)"></v-date-picker>
      </v-menu>
      <v-layout>
        <div class="mr-3 small-entry">
          <v-text-field label="Time" v-model="formData.time" mask="##:##" return-masked-value></v-text-field>
        </div>
        <div class="small-entry">
          <v-text-field label="People" v-model="formData.people" mask="###"></v-text-field>
        </div>
      </v-layout>
    </v-layout>
    <v-textarea label="Notes" v-model="formData.notes"></v-textarea>
  </div>
</template>

<script>
export default {
  name: 'reservation-form',
  props: ['formData', 'autofocus'],
  data() {
    return {
      datePicker: false,
    }
  }
}
</script>

<style>
.small-entry {
  max-width: 75px;
}
</style>
