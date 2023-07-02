<template>
  <div id="main">
    <div class="container my-5" >
      <h1 class="title text-center">Weather in Hour</h1>

      <form class="search-location" v-on:submit.prevent="getWeather">
        <input
          type="date"
          class="form-control text-muted form-rounded p-4 shadow-sm"
          placeholder=" What City?"
          v-model="citySearch"
          autocomplete="off"
        />
        <button>Submit</button>
      </form>
        <button @click="LinktoHistoryWeatber" class="myButton">Date Data</button>
      <p class="text-center my-3" v-if="cityFound">No city found</p>
      <div
        class="card rounded my-3 shadow-lg back-card overflow-hidden"
        v-if="visible"
      >
          <div class="city-name my-3 " >
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
            <p>10. {{ new Date(list.dt10* 1000).toLocaleString("en-us", { date: "long" }) }} </p>
              <div class="case">
                <img :src="require(`../../public/conditions/${this.weatherState.state10}.svg`)" alt="" />
                <div class="temp">
                {{ Math.round(this.list.temperature.temp10) }}&deg;C
                </div>
              </div>
           
            </div>
            <div class="center">
            <p>11. {{ new Date(list.dt11* 1000).toLocaleString("en-us", { date: "long" }) }} </p>
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
                </div>
          </div>
    </div>
  </div>
</template>

<script>
import db from "../firebase/config";
export default {
  name: 'HourlyHistory',
  props: ["cities", "edit"],
  created() {
    console.log(this.retrieveCity());
  },
    components: {
  },
  data() {
    return {
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
      },
      id: "",
      clearSky: false,
      clearNight: false,
      snowy: false,
      dateStart: 0,
      isDay: true,
      citySearch: 0,
      dateEnd: 0,
      weather: {
        message:"",
        city_id:2885679,
        calctime:0.0823,
        cnt:3,
      },
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
          temperature:{
            temp1:"",
            temp2:"",
            temp3:"",
            temp4:"",
            temp5:"",
            temp6:"",
            temp7:"",
            temp8:"",
            temp9:"",
            temp10:"",
            temp11:"",
            temp12:"",
            temp13:"",
            temp14:"",
            temp15:"",
            temp16:"",
            temp17:"",
            temp18:"",
            temp19:"",
            temp20:"",
            temp21:"",
            temp22:"",
            temp23:"",
            temp24:"",
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
    this.unixtime = Math.round(new Date(this.citySearch).getTime())/1000;
    console.log(this.unixtime)
    this.dateStart = this.unixtime
    this.dateEnd = this.dateStart + 86400;
        const key = "68bf9c054007a44b0afb6e10b41f7697"
        const baseURL = `https://history.openweathermap.org/data/2.5/history/city?id=${this.id}&type=hour&start=${this.dateStart}&end=${this.dateEnd}&units=metric&appid=${key}`
        
        try {
            const response = await fetch(baseURL)
            const data = await response.json()
            console.log(data)
            this.list.temperature.temp1 = data.list[1].main.temp;
            this.list.temperature.temp2 = data.list[2].main.temp;
            this.list.temperature.temp3 = data.list[3].main.temp;
            this.list.temperature.temp4 = data.list[4].main.temp;
            this.list.temperature.temp5 = data.list[5].main.temp;
            this.list.temperature.temp6 = data.list[6].main.temp;
            this.list.temperature.temp7 = data.list[7].main.temp;
            this.list.temperature.temp8 = data.list[8].main.temp;
            this.list.temperature.temp9 = data.list[9].main.temp;
            this.list.temperature.temp10 = data.list[10].main.temp;
            this.list.temperature.temp11 = data.list[11].main.temp;
            this.list.temperature.temp12 = data.list[12].main.temp;
            this.list.temperature.temp13 = data.list[13].main.temp;
            this.list.temperature.temp14 = data.list[14].main.temp;
            this.list.temperature.temp15 = data.list[15].main.temp;
            this.list.temperature.temp16 = data.list[16].main.temp;
            this.list.temperature.temp17 = data.list[17].main.temp;
            this.list.temperature.temp18 = data.list[18].main.temp;
            this.list.temperature.temp19 = data.list[19].main.temp;
            this.list.temperature.temp20 = data.list[20].main.temp;
            this.list.temperature.temp21 = data.list[21].main.temp;
            this.list.temperature.temp22 = data.list[22].main.temp;
            this.list.temperature.temp23 = data.list[23].main.temp;
            this.list.temperature.temp24 = data.list[24].main.temp;

        this.weatherState.state1 = data.list[1].weather[0].icon;
        this.weatherState.state2 = data.list[2].weather[0].icon;
        this.weatherState.state3 = data.list[3].weather[0].icon;
        this.weatherState.state4 = data.list[4].weather[0].icon;
        this.weatherState.state5 = data.list[5].weather[0].icon;
        this.weatherState.state6 = data.list[6].weather[0].icon;
        this.weatherState.state7 = data.list[7].weather[0].icon;
        this.weatherState.state8 = data.list[8].weather[0].icon;
        this.weatherState.state9 = data.list[9].weather[0].icon;
        this.weatherState.state10 = data.list[10].weather[0].icon;
        this.weatherState.state11 = data.list[11].weather[0].icon;
        this.weatherState.state12 = data.list[12].weather[0].icon;
        this.weatherState.state13 = data.list[13].weather[0].icon;
        this.weatherState.state14 = data.list[14].weather[0].icon;
        this.weatherState.state15 = data.list[15].weather[0].icon;
        this.weatherState.state16 = data.list[16].weather[0].icon;
        this.weatherState.state17 = data.list[17].weather[0].icon;
        this.weatherState.state18 = data.list[18].weather[0].icon;
        this.weatherState.state19 = data.list[19].weather[0].icon;
        this.weatherState.state20 = data.list[20].weather[0].icon;
        this.weatherState.state21 = data.list[21].weather[0].icon;
        this.weatherState.state22 = data.list[22].weather[0].icon;
        this.weatherState.state23 = data.list[23].weather[0].icon;  
        this.weatherState.state24 = data.list[24].weather[0].icon;

            this.list.dt1 = data.list[0].dt;
            this.list.dt2 = data.list[1].dt;
            this.list.dt3 = data.list[2].dt;
            this.list.dt4 = data.list[3].dt;
            this.list.dt5 = data.list[4].dt;
            this.list.dt6 = data.list[5].dt;
            this.list.dt7 = data.list[6].dt;
            this.list.dt8 = data.list[7].dt;
            this.list.dt9 = data.list[8].dt;
            this.list.dt10 = data.list[9].dt;
            this.list.dt11 = data.list[10].dt;
            this.list.dt12 = data.list[11].dt;
            this.list.dt13 = data.list[12].dt;
            this.list.dt14 = data.list[13].dt;
            this.list.dt15 = data.list[14].dt;
            this.list.dt16 = data.list[15].dt;
            this.list.dt17 = data.list[16].dt;
            this.list.dt18 = data.list[17].dt;
            this.list.dt19 = data.list[18].dt;
            this.list.dt20 = data.list[19].dt;
            this.list.dt21 = data.list[20].dt;
            this.list.dt22 = data.list[21].dt;
            this.list.dt23 = data.list[22].dt;
            this.list.dt24 = data.list[23].dt;
            
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
    LinktoHistoryWeatber() {
    this.$router.push({ name: "HistoryWeather", params: { id: this.cityname } });
    },
  },
}
</script>

<style lang="less" scoped>
#main {
  display: grid;
  padding-top: 81px;
  background-color: #31363d;
  width: 100%;
  min-height: 325vh;
  grid-auto-rows: 250px;
  @media (in-width: 400px) {
  grid-template-columns: repeat(2, 1fr);
  }
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
  color:#ffffff;
}
img {
  width: auto;
  height: 32px;
  padding-left: 52px;
  display: block;
  color: #4854a2;
}
.form-rounded {
  border-radius: 1rem;
}

.case{
  display: flex;
  margin-top:10px ;
  margin-bottom:10px ;
}
.temp{
  color: #ffffff;
  margin-top: 2px;
  margin-left: 43px;
  font-size: 15pt;
  font-weight: 500;
}
.city-name {
  padding-top: 20px;
  position:absolute;
  width: 94%;

  color: #ffffff;
}
.center{
  margin-left: 48px;
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
