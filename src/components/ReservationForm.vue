<template>
  <div>    
    <v-layout>
      <v-menu ref="datePicker" class="mr-3" v-model="datePicker" :close-on-content-click="false" 
        :nudge-right="40" :return-value.sync="internalDate" lazy transition="scale-transition" offset-y full-widith min-width="290px">
        <template v-slot:activator="{on}">
          <v-text-field :value="moment(internalDate).format('L')" label="Reservation Date" prepend-icon="event" readonly v-on="on" :disabled="disabled"></v-text-field>
        </template>
        <v-date-picker no-title scrollable :value="internalDate" @input="updateDate"></v-date-picker>
      </v-menu>

      <v-layout>
        <v-layout class="mr-3 small-entry">
          <v-text-field label="Time" v-model="internalTime" @change="updateTime" mask="time" return-masked-value :disabled="disabled" :rules="[rules.validTime]"></v-text-field>
          <v-combobox :value="internalTimePeriod" @input="updateTimePeriod" :items="['AM', 'PM']" :disabled="disabled" :rules="[rules.validTimePeriod]"></v-combobox>
        </v-layout>
        
          <v-text-field 
            label="People" 
            :value="this.value.people"
            @input="(val) => $emit('input', {...value, people: val})" 
            mask="##"
            :rules="[rules.greaterThanZero]"
            :disabled="disabled"
          ></v-text-field>
      </v-layout>
    </v-layout>

    <v-textarea label="Notes" :disabled="disabled"
      :value="this.value.notes" 
      @input="(val) => $emit('input', {...value, notes: val})"
      :counter="256"
    ></v-textarea>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'reservation-form',
  props: ['value', 'autofocus', 'disabled'],
  data() {
    return {
      moment,
      datePicker: false,
      internalDate: moment(this.value.date).format('YYYY-MM-DD'),
      internalTime: moment(this.value.date).format('hh:mm'),
      internalTimePeriod: moment(this.value.date).format('A'),
      rules: {
        greaterThanZero: v => (v > 0 && v <= 30) || "Must be between 1 and 30",
        validTime: v => /(0[1-9]|1[012]):[0-5][0-9]/.test(v) || "Must be in 12-hour format",
        validTimePeriod: v => /AM|PM/.test(v) || "Must be AM or PM"
      }
    }
  },
  created() {
    this.emitDateTime()
  },
  methods: {
    updateDate(newDate) {
      this.$refs.datePicker.save(newDate)
      this.internalDate = newDate
      this.emitDateTime()
    },

    updateTime(newTime) {
      this.internalTime = newTime
      this.emitDateTime()
    },

    updateTimePeriod(newTimePeriod) {
      this.internalTimePeriod = newTimePeriod
      this.emitDateTime()
    },

    emitDateTime() {
      let d = moment(`${this.internalDate}T${this.internalTime}`)
      if (this.internalTimePeriod == 'PM') {
        d.add(12, 'h')
      }
      this.$emit('input', {
        ...this.value,
        date: d.format()
      })
    }
  }
}
</script>

<style>
.small-entry {
  max-width: 120px;
}
</style>
