<template>
  <div id="main">
    <div class="container my-5" >
      <h1 class="title text-center">Weather in Date</h1>
      <form class="search-location" v-on:submit.prevent="getWeather">
        <input
          type="date"
          class="form-control text-muted form-rounded p-4 shadow-sm"
          placeholder=" What City?"
          v-model="citySearch"
          autocomplete="off"
        />        
        <!-- <select name="" id="">
        <br>
        <option value="1"></option>
        <option value="2"></option>
        <option value="3"></option>
        <option value="4"></option>
        <option value="5"></option>
        </select> -->
        <button>Submit</button>
      </form>
          <button @click="LinktoHourlyHistory" class="myButton">Hourly Data</button>
      <p class="text-center my-3" v-if="cityFound">No city found</p>
      <div
        class="card rounded my-3 shadow-lg back-card overflow-hidden"
        v-if="visible"
      >
        <!-- Top of card starts here -->
          <div class="city-name my-3" >
            <div class="center">
            <p>1. {{ new Date(list.dt1* 1000).toLocaleString("en-us", { date: "long" }) }}</p>
            <div class="case">
                <img :src="require(`../../public/conditions/${this.weatherState.state1}.svg`)" alt="" />
                <div class="temp">
                  {{ Math.round(this.list.temperature.temp1) }}&deg;C
                </div>
            </div>
            </div>
            <div class="center">
            <p>2. {{ new Date(list.dt2* 1000).toLocaleString("en-us", { date: "long" }) }}</p>
            <div class="case">
                <img :src="require(`../../public/conditions/${this.weatherState.state2}.svg`)" alt="" />
                <div class="temp">
                {{ Math.round(this.list.temperature.temp2) }}&deg;C
                </div>
            </div>
            </div>
            <div class="center">
            <p>3. {{ new Date(list.dt3* 1000).toLocaleString("en-us", { date: "long" }) }}</p>
            <div class="case">
                <img :src="require(`../../public/conditions/${this.weatherState.state3}.svg`)" alt="" />
                <div class="temp">
                {{ Math.round(this.list.temperature.temp3) }}&deg;C
                </div>
            </div>
            </div>
            <div class="center">
            <p>4. {{ new Date(list.dt4* 1000).toLocaleString("en-us", { date: "long" }) }}</p>
            <div class="case">
                <img :src="require(`../../public/conditions/${this.weatherState.state4}.svg`)" alt="" />
                <div class="temp">
                {{ Math.round(this.list.temperature.temp4) }}&deg;C
                </div>
            </div>
            </div>
            <div class="center">
            <p>5. {{ new Date(list.dt5* 1000).toLocaleString("en-us", { date: "long" }) }}</p>
            <div class="case">
                <img :src="require(`../../public/conditions/${this.weatherState.state5}.svg`)" alt="" />
                <div class="temp">
                {{ Math.round(this.list.temperature.temp5) }}&deg;C
                </div>
            </div>
            </div>
            <div class="center">
            <p>6. {{ new Date(list.dt6* 1000).toLocaleString("en-us", { date: "long" }) }}</p>
            <div class="case">
                <img :src="require(`../../public/conditions/${this.weatherState.state6}.svg`)" alt="" />
                <div class="temp">
                {{ Math.round(this.list.temperature.temp6) }}&deg;C
                </div>
            </div>
            </div>
            <div class="center">
            <p>7. {{ new Date(list.dt7* 1000).toLocaleString("en-us", { date: "long" }) }}</p>
            <div class="case">
                <img :src="require(`../../public/conditions/${this.weatherState.state7}.svg`)" alt="" />
                <div class="temp">
                {{ Math.round(this.list.temperature.temp7) }}&deg;C
                </div>
            </div>
            </div>
            <div class="center">
            <p>8. {{ new Date(list.dt8* 1000).toLocaleString("en-us", { date: "long" }) }}</p>
            <div class="case">
                <img :src="require(`../../public/conditions/${this.weatherState.state8}.svg`)" alt="" />
                <div class="temp">
                {{ Math.round(this.list.temperature.temp8) }}&deg;C
                </div>
            </div>
            </div>
            <div class="center">
            <p>9. {{ new Date(list.dt9* 1000).toLocaleString("en-us", { date: "long" }) }}</p>
            <div class="case">
                <img :src="require(`../../public/conditions/${this.weatherState.state9}.svg`)" alt="" />
                <div class="temp">
                {{ Math.round(this.list.temperature.temp9) }}&deg;C
                </div>
            </div>
            </div>
            <div class="center">
            <p>10. {{ new Date(list.dt10* 1000).toLocaleString("en-us", { date: "long" }) }}</p>
            <div class="case">
                <img :src="require(`../../public/conditions/${this.weatherState.state10}.svg`)" alt="" />
                <div class="temp">
                {{ Math.round(this.list.temperature.temp10) }}&deg;C
                </div>
            </div>
            </div>
            <div class="center">
            <p>11. {{ new Date(list.dt11* 1000).toLocaleString("en-us", { date: "long" }) }}</p>
            <div class="case">
                <img :src="require(`../../public/conditions/${this.weatherState.state11}.svg`)" alt="" />
                <div class="temp">
                {{ Math.round(this.list.temperature.temp11) }}&deg;C
                </div>
            </div>
            </div>
            <div class="center">
            <p>12. {{ new Date(list.dt12* 1000).toLocaleString("en-us", { date: "long" }) }}</p>
            <div class="case">
                <img :src="require(`../../public/conditions/${this.weatherState.state12}.svg`)" alt="" />
                <div class="temp">
                {{ Math.round(this.list.temperature.temp12) }}&deg;C
                </div>
            </div>
            </div>
            <div class="center">
            <p>13. {{ new Date(list.dt13* 1000).toLocaleString("en-us", { date: "long" }) }}</p>
            <div class="case">
                <img :src="require(`../../public/conditions/${this.weatherState.state13}.svg`)" alt="" />
                <div class="temp">
                {{ Math.round(this.list.temperature.temp13) }}&deg;C
                </div>
            </div>
            </div>
            <div class="center">
            <p>14. {{ new Date(list.dt14* 1000).toLocaleString("en-us", { date: "long" }) }}</p>
            <div class="case">
                <img :src="require(`../../public/conditions/${this.weatherState.state14}.svg`)" alt="" />
                <div class="temp">
                {{ Math.round(this.list.temperature.temp14) }}&deg;C
                </div>
            </div>
            </div>
            <div class="center">

            <p>15. {{ new Date(list.dt15* 1000).toLocaleString("en-us", { date: "long" }) }}</p>
            <div class="case">
                <img :src="require(`../../public/conditions/${this.weatherState.state15}.svg`)" alt="" />
                <div class="temp">
                {{ Math.round(this.list.temperature.temp15) }}&deg;C
                </div>
            </div>
            </div>
            <div class="center">

            <p>16. {{ new Date(list.dt16* 1000).toLocaleString("en-us", { date: "long" }) }}</p>
            <div class="case">
                <img :src="require(`../../public/conditions/${this.weatherState.state16}.svg`)" alt="" />
                <div class="temp">
                {{ Math.round(this.list.temperature.temp16) }}&deg;C
                </div>
            </div>
            </div>
            <div class="center">
            <p>17. {{ new Date(list.dt17* 1000).toLocaleString("en-us", { date: "long" }) }}</p>
            <div class="case">
                <img :src="require(`../../public/conditions/${this.weatherState.state17}.svg`)" alt="" />
                <div class="temp">
                {{ Math.round(this.list.temperature.temp17) }}&deg;C
                </div>
            </div>
            </div>
            <div class="center">
            <p>18. {{ new Date(list.dt18* 1000).toLocaleString("en-us", { date: "long" }) }}</p>
            <div class="case">
                <img :src="require(`../../public/conditions/${this.weatherState.state18}.svg`)" alt="" />
                <div class="temp">
                {{ Math.round(this.list.temperature.temp18) }}&deg;C
                </div>
            </div>
            </div>
            <div class="center">
            <p>19. {{ new Date(list.dt19* 1000).toLocaleString("en-us", { date: "long" }) }}</p>
            <div class="case">              
                <img :src="require(`../../public/conditions/${this.weatherState.state19}.svg`)" alt="" />
                <div class="temp">
                {{ Math.round(this.list.temperature.temp19) }}&deg;C
                </div>
            </div>
            </div>
            <div class="center">
            <p>20. {{ new Date(list.dt20* 1000).toLocaleString("en-us", { date: "long" }) }}</p>
            <div class="case">
                <img :src="require(`../../public/conditions/${this.weatherState.state20}.svg`)" alt="" />
                <div class="temp">
                {{ Math.round(this.list.temperature.temp20) }}&deg;C
                </div>
            </div>
            </div>
            <div class="center">
            <p>21. {{ new Date(list.dt21* 1000).toLocaleString("en-us", { date: "long" }) }}</p>
            <div class="case">
                <img :src="require(`../../public/conditions/${this.weatherState.state21}.svg`)" alt="" />
                <div class="temp">
                {{ Math.round(this.list.temperature.temp21) }}&deg;C
                </div>
            </div>
            </div>
            <div class="center">
            <p>22. {{ new Date(list.dt22* 1000).toLocaleString("en-us", { date: "long" }) }}</p>
            <div class="case">
                <img :src="require(`../../public/conditions/${this.weatherState.state22}.svg`)" alt="" />
                <div class="temp">
                {{ Math.round(this.list.temperature.temp22) }}&deg;C
                </div>
            </div>
            </div>
            <div class="center">
            <p>23. {{ new Date(list.dt23* 1000).toLocaleString("en-us", { date: "long" }) }}</p>
            <div class="case">
                <img :src="require(`../../public/conditions/${this.weatherState.state23}.svg`)" alt="" />
                <div class="temp">
                {{ Math.round(this.list.temperature.temp23) }}&deg;C
                </div>
            </div>
            </div>
            <div class="center">
            <p>24. {{ new Date(list.dt24* 1000).toLocaleString("en-us", { date: "long" }) }}</p>
            <div class="case">
                <img :src="require(`../../public/conditions/${this.weatherState.state24}.svg`)" alt="" />
                <div class="temp">
                {{ Math.round(this.list.temperature.temp24) }}&deg;C
                </div>
            </div>
            </div>
            <div class="center">
            <p>25. {{ new Date(list.dt25* 1000).toLocaleString("en-us", { date: "long" }) }}</p>
            <div class="case">
                <img :src="require(`../../public/conditions/${this.weatherState.state25}.svg`)" alt="" />
                <div class="temp">                  
                {{ Math.round(this.list.temperature.temp25) }}&deg;C
                </div>
            </div>
            </div>
            <div class="center">
            <p>26. {{ new Date(list.dt26* 1000).toLocaleString("en-us", { date: "long" }) }}</p>
            <div class="case">
                <img :src="require(`../../public/conditions/${this.weatherState.state26}.svg`)" alt="" />
                <div class="temp">
                {{ Math.round(this.list.temperature.temp26) }}&deg;C
                </div>
            </div>
            </div>
            <div class="center">
            <p>27. {{ new Date(list.dt27* 1000).toLocaleString("en-us", { date: "long" }) }}</p>
            <div class="case">
                <img :src="require(`../../public/conditions/${this.weatherState.state27}.svg`)" alt="" />
                <div class="temp">
                {{ Math.round(this.list.temperature.temp27) }}&deg;C
                </div>
            </div>
            </div>
            <div class="center">
            <p>28. {{ new Date(list.dt28* 1000).toLocaleString("en-us", { date: "long" }) }}</p>
            <div class="case">
                <img :src="require(`../../public/conditions/${this.weatherState.state28}.svg`)" alt="" />  
                <div class="temp">
                {{ Math.round(this.list.temperature.temp28) }}&deg;C     
                </div> 
            </div>
            </div>
            <div class="center">
            <p>29. {{ new Date(list.dt29* 1000).toLocaleString("en-us", { date: "long" }) }}</p>
            <div class="case">
                <img :src="require(`../../public/conditions/${this.weatherState.state29}.svg`)" alt="" />
                <div class="temp">
                {{ Math.round(this.list.temperature.temp29) }}&deg;C
                </div>
            </div>
            </div>
            <div class="center">
            <p>30. {{ new Date(list.dt30* 1000).toLocaleString("en-us", { date: "long" }) }}</p>
            <div class="case">
                <img :src="require(`../../public/conditions/${this.weatherState.state30}.svg`)" alt="" />
                <div class="temp">
                {{ Math.round(this.list.temperature.temp30) }}&deg;C
                </div>
            </div>
            </div>
            
          </div>
          </div>
      </div>
  </div>

</template>

<script>
// import axios from "axios";
import db from "../firebase/config";
export default {
  name: 'HistoryWeather',
  props: ["cities","APIkey","CityName","city"],
  created() {
    console.log(this.retrieveCity());
  },
  components: {

  },
  Citydata() {

  },
  data() {
    return {
      AirPool:null,
      cityFound: false,
      visible: false,
      stormy: false,
      unixtime : 0,
      cloudy: false,
      weatherState: {
        state1:"",
        state2:"",
        state3:"",
        state4:"",
        state5:"",
        state6:"",
        state7:"",
        state8:"",
        state9:"",
        state10:"",
        state11:"",
        state12:"",
        state13:"",
        state14:"",
        state15:"",
        state16:"",
        state17:"",
        state18:"",
        state19:"",
        state20:"",
        state21:"",
        state22:"",
        state23:"",
        state24:"",
        state25:"",
        state26:"",
        state27:"",
        state28:"",
        state29:"",
        state30:"",

      },

      historyCity: "",
      currentWeather: {
        coord: {
          id: null
        }
      },
      clearSky: false,
      clearNight: false,
      snowy: false,
      dateStart: 0,
      isDay: true,
      citySearch: 1231,
      dateEnd: 0,
      weather: {
        message:"",
        city_id:1586203,
        calctime:0.0823,
        cnt:3,
      },
      cityid: "",
      list: {
          dt1: 1645966800,
          dt2: 1645966800,
          dt3: 1645966800,
          dt4: 1645966800,
          dt5: 1645966800,
          dt6: 1645966800,
          dt7: 1645966800,
          dt8: 1645966800,
          dt9: 1645966800,
          dt10: 1645966800,
          dt11: 1645966800,
          dt12: 1645966800,
          dt13: 1645966800,
          dt14: 1645966800,
          dt15: 1645966800,
          dt16: 1645966800,
          dt17: 1645966800,
          dt18: 1645966800,
          dt19: 1645966800,
          dt20: 1645966800,
          dt21: 1645966800,
          dt22: 1645966800,
          dt23: 1645966800,
          dt24: 1643673599,
          dt25: 1643673599,
          dt26: 1643673599,
          dt27: 1643673599,
          dt28: 1643673599,
          dt29: 1643673599,
          dt30: 1643673599,
          temperature: {
            temp1: "172.2",
            temp2: "172.2",
            temp3: "172.2",
            temp4: "172.2",
            temp5: "172.2",
            temp6: "172.2",
            temp7: "172.2",
            temp8: "172.2",
            temp9: "172.2",
            temp10: "172.2",
            temp11: "172.2",
            temp12: "172.2",
            temp13: "172.2",
            temp14: "172.2",
            temp15: "172.2",
            temp16: "172.2",
            temp17: "172.2",
            temp18: "172.2",
            temp19: "172.2",
            temp20: "172.2",
            temp21: "172.2",
            temp22: "172.2",
            temp23: "172.2",
            temp24: "172.2",
            temp25: "172.2",
            temp26: "172.2",
            temp27: "172.2",
            temp28: "172.2",
            temp29: "172.2",
            temp30: "172.2",
          }
      }
    };
  },
  methods: {
    retrieveCity() {
      db.collection("cities")
        .where("city", "==", `${this.$route.params.id}`)
        .get()
        .then((docs) => {
          docs.forEach((doc) => {
            this.id = doc.data().currentWeather.id
            this.cityname = doc.data().city      
            console.log(this.id)
          });
        })
    },
    
    getWeather: async function () {
      console.log(new Date(this.citySearch).getTime());
      this.unixtime = Math.round(new Date(this.citySearch).getTime())/1000;
      this.dateStart = this.unixtime
      this.dateEnd = this.dateStart + 86400*6 + 3600;
      console.log(this.dateStart)
      console.log(this.dateEnd) 
      const key = "68bf9c054007a44b0afb6e10b41f7697"
      const baseURL = `https://history.openweathermap.org/data/2.5/history/city?id=${this.id}&type=hour&start=${this.dateStart}&end=${this.dateEnd}&units=metric&appid=${key}`;
      this.dateStart = this.dateEnd
      this.dateEnd = this.dateEnd + 86400*6 + 3600
      const baseURL1 = `https://history.openweathermap.org/data/2.5/history/city?id=${this.id}&type=hour&start=${this.dateStart}&end=${this.dateEnd}&units=metric&appid=${key}`;
      this.dateStart = this.dateEnd
      this.dateEnd = this.dateEnd + 86400*6 + 3600
      const baseURL2 = `https://history.openweathermap.org/data/2.5/history/city?id=${this.id}&type=hour&start=${this.dateStart}&end=${this.dateEnd}&units=metric&appid=${key}`;
      this.dateStart = this.dateEnd
      this.dateEnd = this.dateEnd + 86400*6 + 3600
      const baseURL3 = `https://history.openweathermap.org/data/2.5/history/city?id=${this.id}&type=hour&start=${this.dateStart}&end=${this.dateEnd}&units=metric&appid=${key}`;
      this.dateStart = this.dateEnd
      this.dateEnd = this.dateEnd + 86400*6 + 3600
      const baseURL4 = `https://history.openweathermap.org/data/2.5/history/city?id=${this.id}&type=hour&start=${this.dateStart}&end=${this.dateEnd}&units=metric&appid=${key}`;
      //fetch weather
      try {
        const response = await fetch(baseURL);
        const response1 = await fetch(baseURL1)
        const response2= await fetch(baseURL2)
        const response3 = await fetch(baseURL3)
        const response4 = await fetch(baseURL4)
        const data1 = await response1.json();
        const data2 = await response2.json();
        const data3 = await response3.json();
        const data4 = await response4.json();
        const data = await response.json();

        console.log(data);

        this.list.temperature.temp1 = data.list[0].main.temp;
        this.list.temperature.temp2 = data.list[24].main.temp;
        this.list.temperature.temp3 = data.list[48].main.temp;
        this.list.temperature.temp4 = data.list[72].main.temp;
        this.list.temperature.temp5 = data.list[96].main.temp;
        this.list.temperature.temp6 = data.list[120].main.temp;
        this.list.temperature.temp7 = data.list[144].main.temp;
        this.list.temperature.temp8 = data1.list[23].main.temp;
        this.list.temperature.temp9 = data1.list[47].main.temp;
        this.list.temperature.temp10 = data1.list[71].main.temp;
        this.list.temperature.temp11 = data1.list[95].main.temp;
        this.list.temperature.temp12 = data1.list[119].main.temp;
        this.list.temperature.temp13 = data1.list[143].main.temp;
        this.list.temperature.temp14 = data2.list[22].main.temp;
        this.list.temperature.temp15 = data2.list[46].main.temp;
        this.list.temperature.temp16 = data2.list[70].main.temp;
        this.list.temperature.temp17 = data2.list[94].main.temp;
        this.list.temperature.temp18 = data2.list[118].main.temp;
        this.list.temperature.temp19 = data2.list[142].main.temp;
        this.list.temperature.temp20 = data3.list[21].main.temp;
        this.list.temperature.temp21 = data3.list[45].main.temp;
        this.list.temperature.temp22 = data3.list[69].main.temp;
        this.list.temperature.temp23 = data3.list[93].main.temp;
        this.list.temperature.temp24 = data3.list[117].main.temp;
        this.list.temperature.temp25 = data3.list[141].main.temp;
        this.list.temperature.temp26 = data.list[20].main.temp;
        this.list.temperature.temp27 = data.list[44].main.temp;
        this.list.temperature.temp28 = data.list[68].main.temp;
        this.list.temperature.temp29 = data.list[92].main.temp;
        this.list.temperature.temp30 = data.list[116].main.temp;
        

        this.weatherState.state1 = data.list[0].weather[0].icon;
        this.weatherState.state2 = data.list[24].weather[0].icon;
        this.weatherState.state3 = data.list[48].weather[0].icon;
        this.weatherState.state4 = data.list[72].weather[0].icon;
        this.weatherState.state5 = data.list[96].weather[0].icon;
        this.weatherState.state6 = data.list[120].weather[0].icon;
        this.weatherState.state7 = data.list[144].weather[0].icon;
        this.weatherState.state8 = data1.list[23].weather[0].icon;
        this.weatherState.state9 = data1.list[47].weather[0].icon;
        this.weatherState.state10 = data1.list[71].weather[0].icon;
        this.weatherState.state11 = data1.list[95].weather[0].icon;
        this.weatherState.state12 = data1.list[119].weather[0].icon;
        this.weatherState.state13 = data1.list[143].weather[0].icon;
        this.weatherState.state14 = data2.list[22].weather[0].icon;
        this.weatherState.state15 = data2.list[46].weather[0].icon;
        this.weatherState.state16 = data2.list[70].weather[0].icon;
        this.weatherState.state17 = data2.list[94].weather[0].icon;
        this.weatherState.state18 = data2.list[118].weather[0].icon;
        this.weatherState.state19 = data2.list[142].weather[0].icon;
        this.weatherState.state20 = data3.list[21].weather[0].icon;
        this.weatherState.state21 = data3.list[45].weather[0].icon;
        this.weatherState.state22 = data3.list[69].weather[0].icon;
        this.weatherState.state23 = data3.list[93].weather[0].icon;  
        this.weatherState.state24 = data3.list[117].weather[0].icon;
        this.weatherState.state25 = data3.list[141].weather[0].icon;
        this.weatherState.state26 = data4.list[20].weather[0].icon;
        this.weatherState.state27 = data4.list[44].weather[0].icon;
        this.weatherState.state28 = data4.list[68].weather[0].icon;
        this.weatherState.state29 = data4.list[92].weather[0].icon;
        this.weatherState.state30 = data4.list[116].weather[0].icon;

        this.list.dt1 = data.list[0].dt;
        this.list.dt2 = data.list[24].dt;
        this.list.dt3 = data.list[48].dt;
        this.list.dt4 = data.list[72].dt;
        this.list.dt5 = data.list[96].dt;
        this.list.dt6 = data.list[120].dt;
        this.list.dt7 = data.list[144].dt;
        this.list.dt8 = data1.list[23].dt;
        this.list.dt9 = data1.list[47].dt;
        this.list.dt10 = data1.list[71].dt;
        this.list.dt11 = data1.list[95].dt;
        this.list.dt12 = data1.list[119].dt;
        this.list.dt13 = data1.list[143].dt;
        this.list.dt14 = data2.list[22].dt;
        this.list.dt15 = data2.list[46].dt;
        this.list.dt16 = data2.list[70].dt;
        this.list.dt17 = data2.list[94].dt;
        this.list.dt18 = data2.list[118].dt;
        this.list.dt19 = data2.list[142].dt;
        this.list.dt20 = data3.list[21].dt;
        this.list.dt21 = data3.list[45].dt;
        this.list.dt22 = data3.list[69].dt;
        this.list.dt23 = data3.list[93].dt;
        this.list.dt24 = data3.list[117].dt;
        this.list.dt25 = data3.list[141].dt;
        this.list.dt26 = data4.list[20].dt;
        this.list.dt27 = data4.list[44].dt;
        this.list.dt28 = data4.list[68].dt;
        this.list.dt29 = data4.list[92].dt;
        this.list.dt30 = data4.list[116].dt;

        this.citySearch = "";
        this.dateEnd = "";
        this.visible = true;
        this.cityFound = false;
      } catch (error) {
        console.log(error);
        this.cityFound = true;
        this.visible = false;
      }
    },
    LinktoHourlyHistory() {
    this.$router.push({ name: "HourlyHistory", params: { id: this.cityname } });
    }
  },
};
</script>

<style lang="less" scoped>
#main {
  display: grid;
  padding-top: 81px;
  background-color: #31363d;
  width: 100%;
  min-height: 430vh;
  grid-auto-rows: 250px;
  @media (in-width: 400px) {
  grid-template-columns: repeat(2, 1fr);
  }
}
p{
  padding-left:14px ;
  color:#ffff;
  padding-top:10px ;
}
.day {
  background: linear-gradient(to bottom left, #d7d3ac, #ffffff);
}
.night {
  background: linear-gradient(to bottom left, #4854a2, #3d3d3d);
  color: white;
}

.title {
  font-size: 40px;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
}

.case{
  display: flex;
  margin-top:10px ;
  margin-bottom:10px ;
}
.temp{
  color: #ffffff;
  margin-top: 2px;
  margin-left: 70px;
  font-size: 15pt;
  font-weight: 500;
}

.center{
  margin-left: 34px;
}

img {
  width: auto;
  height: 25px;
  margin-top:5px ;
  padding-left: 50px;

  display: block;
  color: #4854a2;
}
.form-rounded {
  border-radius: 1rem;
}


.city-name {
  padding-top: 20px;
  position: absolute;
  width: 94%;
}

.city-name p {
  font-weight: 400;
  font-size: 16pt;
}

.city-name span {
  position: relative;
  top: -50px;
  font-size: 20pt;
  font-family: "Times New Roman", Times, serif;
  
}
.form-control:focus {
  box-shadow: none;
  border-color: inherit;
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
// .myButton:active {
// 	position:relative;
// 	top:1px;
// }
.myButton{
  margin-left:15% ;
  margin-top:1% ;
}
.search-location{
  margin-left:15% ;
  margin-top: 1%;
}
</style>
