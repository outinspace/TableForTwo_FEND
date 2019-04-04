<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 md6 lg4 class="pa-2" v-for="(r, i) in restaurants" :key="i">
        <v-card  hover class="v-card--round">
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
          img: 'https://mtn-s3.imgix.net/wp-content/uploads/shutterstock_215326408.jpg?auto=format%2Ccompress%2Cenhance&ixlib=php-2.1.1&w=1024&s=396cc20e007b2fd2592f7b2bfc87c7cf',
          title: 'Buffalo Wild Wings'
        }
      ]
    }
  },
  async created() {
    const res = await this.$http.get('/reservations/hello')
    this.message = res.data
  }
}
</script>

<style scoped>

</style>
