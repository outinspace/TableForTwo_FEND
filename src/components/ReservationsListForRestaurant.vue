<template>
  <v-data-table
    :headers="headers"
    :items="reservations"
    class="elevation-1"
  >
    <template v-slot:items="props">
      <td>{{ props.item.date }}</td>
      <td class="text-xs-middle">{{ props.item.people }}</td>
      <td class="text-xs-middle">{{ props.item.notes }}</td>
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
            value: 'time'
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