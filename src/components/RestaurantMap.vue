<template>
  <div class="mapouter">
    <div class="gmap_canvas">
      <iframe width="100%" height="300" id="gmap_canvas" :src="`https://maps.google.com/maps?q=${this.address}&t=&z=13&ie=UTF8&iwloc=&output=embed`" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'restaurant-map',
  props: ['address']
}
</script>

<style>
.mapouter{
  position: relative;
  text-align: right;
  height: 300px;
  width: 100%;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 300px;
  width: 100%;
}

</style>
