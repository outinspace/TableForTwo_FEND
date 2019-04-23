<template>
  <v-card flat class="v-card--round my-3">
    
    <v-card-title>
      <h3 class="headline">{{ title }}</h3>
      <v-spacer></v-spacer>
      <v-checkbox
        v-if="checkbox"
        label="Show Completed"
        v-model="showCompleted"
        hide-details
      ></v-checkbox>
      <v-text-field
        v-model="filter"
        append-icon="filter_list"
        label="Filter"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>

    <v-card-text>
      <v-data-table
        :loading="loading"
        :headers="headers"
        :items="mappedReservations"
        :search="filter"
      >
        <template v-slot:items="props">
          <td v-if="checkbox">
            <v-checkbox
              v-model="props.item.completed"
              @change="v => $emit('checkbox', v, props.item.id)"
              primary
              hide-details
            ></v-checkbox>
          </td>
          <td>{{ props.item.fullTime }}</td>
          <td>{{ props.item.fullName }}</td>
          <td>{{ props.item.people }}</td>
          <td>{{ props.item.notes && props.item.notes.length > 15 ? props.item.notes.slice(0, 15) + '...' : props.item.notes }}</td>
          <td>
            <v-btn small round flat color="primary" @click="$emit('view', props.item.id)">View</v-btn>
            <v-btn small round flat color="error" @click="$emit('delete', props.item.id)">Delete</v-btn>
          </td>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>


<script>
import moment from 'moment'

export default {
  name: "reservations-list-for-restaurant",
  props: ["reservations", "loading", "title", "checkbox"],
  data () {
    return {
      moment,
      filter: '',
      showCompleted: false,
      headers: [
        ...(this.checkbox ? [{ text: 'Completed', sortable: false }] : []),
        {
          text: 'Time',
          align: 'left',
          value: 'fullTime',
          sortable: false
        },
        { text: 'Name', sortable: false, value: 'fullName' },
        { text: 'People', sortable: false, value: 'people' },
        { text: 'Notes', sortable: false, value: 'notes' },
        { text: '', sortable: false },
      ]
    }
  },
  methods: {
    reservationFeatures(r) {
      return {
        ...r,
        fullName: r.user.lastName + ', ' + r.user.firstName,
        fullTime: moment(r.date).format('LT') + ' (' + moment(r.date).fromNow() + ')'
      }
    }
  },
  computed: {
    mappedReservations() {
      return this.reservations
      .map(this.reservationFeatures)
      .filter(r => !this.checkbox || this.showCompleted || !r.completed)
    }
  }
}
</script>

<style>
</style>