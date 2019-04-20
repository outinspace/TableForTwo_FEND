<template>
  <v-data-table
    :headers="headers"
    :items="reservations"
    class="elevation-1"
  >
    <template v-slot:items="props">
      <td>{{ props.item.date }}</td>
      <td class="text-xs-right">{{ props.item.people }}</td>
      <td class="text-xs-right">{{ props.item.notes }}</td>
    </template>
  </v-data-table>
</template>


<script>
export default {
  name: "reservations-list-for-restaurant",
  props: ["reservations"],
      data () {
      return {
        headers: [
          {
            text: 'Time',
            align: 'left',
            sortable: false,
            value: 'time'
          },
          { text: 'People', value: 'people' },
          { text: 'Notes', value: 'notes' },
        ],
        reservations: [
          {
            time: reservations.date,
            people: reservations.people,
            notes: reservations.notes
          }
        ]
      }
    }
  }
</script>

<style>
</style>