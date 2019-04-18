<template>
  <v-flex>
    <v-alert v-for="(alert, i) in alerts" :key="i" :value="true" type="error" dismissible outline>
      {{alert}}
    </v-alert>
  </v-flex>
</template>

<script>
export default {
  name: 'api-alerts',
  props: ['error'],
  data() {
    let alerts = []
    let data = this.error.response.data
    if (data.errors) {
      for (let err of data.errors) {
        alerts.push(`Field ${err.field} ${err.defaultMessage}`)
      }
    } else {
      alerts.push(data.message)
    }
    return { alerts }
  }
}
</script>

<style>

</style>
