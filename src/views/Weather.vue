<template>
  <div class="main">
    <div v-if="loading" class="loading">
      <span></span>
    </div>
    <div v-else class="weather" :class="{ day: isDay, night: isNight }">
      <div class="weather-wrap">
        <CurrentWeather :isDay="isDay" :isNight="isNight" :currentWeather="currentWeather" />
        <HourlyWeather :forecast="forecast" />
        <WeeklyForecast :forecast="forecast" />
        <AdditionalInfo :currentWeather="currentWeather" />
        <AirPool :APIkey="APIkey" />
      </div>
      <div style="text-align:center">
          <button @click="LinktoHistoryWeatber" class="myButton">Historical Weather Data</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import db from "../firebase/config";

import CurrentWeather from "../components/CurrentWeather";
import HourlyWeather from "../components/HourlyWeather";
import WeeklyForecast from "../components/WeeklyForecast";
import AdditionalInfo from "../components/AdditionalInfo";
import AirPool from "../components/Air.vue";

export default {
  name: "WeaTher",
  props: ["APIkey", "isDay", "isNight", "city"],
  components: {
    CurrentWeather,
    HourlyWeather,
    WeeklyForecast,
    AdditionalInfo,
    AirPool,
  },
  data() {
    return {
      id:"",
      forecast: null,
      currentWeather: null,
      loading: true,
      currentTime: null,
      AirPool:null,
    };
  },
  created() {
    this.getWeather();
  },
  beforeUnMount() {
    this.$emit("resetDays");
  },
  methods: {
    getWeather() {
      db.collection("cities")
        .where("city", "==", `${this.$route.params.city}`)
        .get()
        .then((docs) => {
          docs.forEach((doc) => {
            this.currentWeather = doc.data().currentWeather;
            axios
              .get(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${doc.data().currentWeather.coord.lat}&lon=${
                  doc.data().currentWeather.coord.lon
                }&exclude=current,minutley,alerts&units=metric&appid=${this.APIkey}`
              )
              .then((res) => {
                this.forecast = res.data;
                this.id = doc.data().city
              })
              .then(() => {
                this.loading = false;
                this.getCurrentTime();
              });
          });
        });
    },
    LinktoHistoryWeatber() {
      this.$router.push({ name: "HistoryWeather", params: { id: this.id } });
    },
    getCurrentTime() {
      const dateObject = new Date();
      this.currentTime = dateObject.getHours();
      const sunrise = new Date(this.currentWeather.sys.sunrise * 1000).getHours();
      const sunset = new Date(this.currentWeather.sys.sunset * 1000).getHours();
      if (this.currentTime > sunrise && this.currentTime < sunset) {
        this.$emit("is-day");
      } else {
        this.$emit("is-night");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.loading {
  @keyframes spin {
    to {
      transform: rotateZ(360deg);
    }
  }
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  span {
    display: block;
    width: 60px;
    height: 60px;
    margin: 0 auto;
    border: 2px solid transparent;
    border-top-color: #142a5f;
    border-radius: 50%;
    animation: spin ease 1000ms infinite;
  }
}
.weather {
  transition: 500ms ease;
  overflow: scroll;
  width: 100%;
  height: 100%;
  .weather-wrap {
    overflow: hidden;
    max-width: 1024px;
    margin: 0 auto;
  }
}
.center{
  left:50%;
}
button {
      background-color: #222325;
      color: #fff;
      padding: 6px 20px;
      border-radius: 10px;
      border: none;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      font-size: 20px;
}
.myButton:active {
	position:relative;
	top:1px;
}

</style>