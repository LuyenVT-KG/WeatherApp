<template>
     <div class="additional-info container">
    <div >
      
      <span>Air Pollution</span>
          <div class="color" v-if="this.AirPool === 1">
          <span >Good</span>
      </div>
          <div class="color" v-if="this.AirPool === 2">
          <span>Fair</span>
      </div>
          <div class="color" v-if="this.AirPool === 3">
          <span>Moderate</span>
      </div>
      <div class="color" v-if="this.AirPool === 4">
        <span >Poor</span>
      </div>
          <div class="color" v-if="this.AirPool === 5">
          <span >Very Poor</span>
      </div>
    </div>
    <div>
      
      <span>co</span>
      <span> {{this.co}} </span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import db from "../firebase/config";
export default {
  name: "AirPool",
  props: ["APIkey"],
    data() {
    return {
      forecast: null,
      currentWeather: null,
      loading: true,
      AirPool: "1",
      co: "1",
    };
  },
  created(){
    this.getAir();
  },
   methods: {
    getAir() {
      db.collection("cities")
        .where("city", "==", `${this.$route.params.city}`)
        .get()
        .then((docs) => {
          docs.forEach((doc) => {
            this.currentWeather = doc.data().currentWeather;
            axios
              .get(
                `http://api.openweathermap.org/data/2.5/air_pollution?lat=${doc.data().currentWeather.coord.lat}&lon=${
                  doc.data().currentWeather.coord.lon
                }&appid=d9bcc42adb9ee1beebe630554d46211e`              
              )
              .then((res) => {
                this.forecast = res.data;
              })
              .then(() => {
                this.loading = false;
                // this.getCurrentTime();
                console.log(this.forecast)
                this.co = this.forecast.list[0].components.co
                this.AirPool = this.forecast.list[0].main.aqi;
              });
          });
        });
    },
    
  },
};         
      
</script>


<style lang="less" scoped>

.color{
  color: #fff;
  font-size: 16px;
  font-weight: 600;
}
.additional-info {

  display: flex;
  flex-wrap: wrap;
  color: #fff;
  > div {
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    margin-bottom: 20px;
    span:nth-child(1) {
      font-size: 12px;
      margin-bottom: 8px;
    }
    span:nth-child(2) {
      font-weight: 600;
    }
  }
  div:nth-child(5),
  div:nth-child(6) {
    margin-bottom: 0;
    font-size: 16px;
  }
}
</style>