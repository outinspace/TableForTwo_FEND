<template>
  <div>
    <v-list>
      <v-list-group v-for="res in reservations" :key="res.date" v-model="res.active" no-action>
        <template v-slot:activator>
          <v-list-tile-content>
            <v-list-tile-title>{{ res.date }}</v-list-tile-title>
          </v-list-tile-content>
        </template>

        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>{{res.people}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>{{res.notes}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-group>
    </v-list>
  </div>
</template>


<script>
export default {
  name: "reservations-list-for-restaurant",
  props: ["reservations"],
  data() {
    return {};
  },
  updated() {}
};
</script>

<style>
</style>