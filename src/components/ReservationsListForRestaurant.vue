<template>
  <v-data-table

      :items="rows"
      :headers="headers"
      >

    <template v-slot:items="props">
        <tr>
          <td v-for="res in reservations" :key="res.id" no-action>
            <v-edit-dialog lazy>
              {{ res.date }}
              <v-text-field
                :value="res.date"
                single-line
                counter>
              </v-text-field>
            </v-edit-dialog>
            <v-edit-dialog lazy>
              {{ res.people }}
              <v-text-field
                :value="res.people"
                single-line
                counter>
              </v-text-field>
            </v-edit-dialog>
            <v-edit-dialog lazy>
              {{ res.people }}
              <v-text-field
                :value="res.people"
                single-line
                counter>
              </v-text-field>
            </v-edit-dialog>
          </td>
        </tr>
      </template>
  </v-data-table>
</template>

<script>
import moment from 'moment'
export default {
  name: "reservations-list-for-restaurant",
  props: [ "reservations" ],
  data () {
    return {
      moment,
      headers: [
        {
          text: 'Time',
          align: 'left',
          value: false,
          sortable: false
        },
        { text: 'People', sortable: false, value: false },
        { text: 'Notes', sortable: false, value: false },
      ],
    }
  }
}
</script>

<style>
</style>