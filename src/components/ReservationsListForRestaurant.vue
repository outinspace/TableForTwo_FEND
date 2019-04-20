<template>
  <v-data-table
    :headers="headers"
    :items="reservations"
  >
    <template v-slot:items="props">
      <td>{{ moment(props.item.date).format('LT') }} ({{ moment(props.item.date).fromNow() }})</td>
      <td class="text-xs-middle">{{ props.item.people }}</td>
      <td class="text-xs-middle">{{ props.item.notes }}</td>
    </template>
  </v-data-table>
</template>


<script>
import moment from 'moment'

export default {
  name: "reservations-list-for-restaurant",
  props: ["reservations"],
  data () {
    return {
      moment,
      headers: [
        {
          text: 'Time',
          align: 'left',
          value: 'time',
          sortable: false
        },
        { text: 'People', sortable: false, value: 'people' },
        { text: 'Notes', sortable: false, value: 'notes' },
      ]
    }
  }
}
</script>

<style>
</style>