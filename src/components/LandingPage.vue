<template>
  <v-container fill-height>
    <v-layout row wrap>
      <v-flex xs12 md6 lg4 v-for="(r, i) in restaurants" :key="i">
        <v-card  hover class="v-card--round mb-3">
          <v-img height="200px" :src="r.img"></v-img>
          <v-card-title>
              <h4 class="headline">{{r.title}}</h4>
              <v-spacer></v-spacer>
              <v-btn round flat>
                <v-icon>date_range</v-icon>
                Reserve
              </v-btn>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LoginService from '../services/LoginService'

export default {
  name: 'login-page',
  data() {
    return {
      message: '',
      restaurants: [
        {
          img: 'https://www.villageinn.com/wp-content/uploads/2018/09/Feature_Pumpkin-Supreme-Pancakes-750x400.jpg',
          title: 'Village Inn'
        },
        {
          img: 'https://www.wholefoodsmarket.com/sites/default/files/styles/header_recipe/public/media/1138-1.jpg?itok=e5x91VQk',
          title: 'Brother Sebastians\''
        },
        {
          img: 'https://www.villageinn.com/wp-content/uploads/2018/09/Feature_Pumpkin-Supreme-Pancakes-750x400.jpg',
          title: 'Village Inn'
        }
      ],
      LoginService
    }
  },
  async created() {
    const res = await this.$http.get('/reservations/hello')
    this.message = res.data
  }
}
</script>

<style scoped>
.v-card--round {
  border-radius: 18px;
}
</style>
