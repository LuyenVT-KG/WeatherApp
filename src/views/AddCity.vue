<template>
  <div class="grid">
    <div class="city-link" v-for="(city, index) in cities" v-bind:key="index">
      <CiTy v-bind:city="city" v-bind:edit="edit" />
    </div>
  </div>
</template>

<script>
import CiTy from '../components/City.vue'
// @ is an alias to /src

export default {
  name: 'AddCity',
  props: ["cities", "edit"],
  created() {
    console.log(this.cities)
  },
  components: {
    CiTy
  }
}
</script>

<style lang="less" scoped>
.grid {
  display: grid;
  padding-top: 81px;
  background-color: #31363d;
  width: 100%;
  min-height: 100vh;
  grid-auto-rows: 250px;
  @media (in-width: 400px) {
  grid-template-columns: repeat(2, 1fr);
  }
}
</style>
