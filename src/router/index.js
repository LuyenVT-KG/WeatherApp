import { createRouter, createWebHistory } from 'vue-router'
import AddCity from '../views/AddCity.vue'
import WeaTher from "../views/Weather.vue";
import HistoryWeather from "../views/HistoryWeather.vue"
import HourlyHistory from "../views/HourlyHistory"
const routes = [
  {
    path: '/',
    name: 'AddCity',
    component: AddCity
  },
  {
    path: "/weather/:city",
    name: "Weather",
    component: WeaTher,
  },
  {
    path: "/historyweather/:city",
    name: "HistoryWeather",
    component: HistoryWeather
  },
  {
    path: "/hourlyhistor/:city",
    name: "HourlyHistory",
    component: HourlyHistory
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
