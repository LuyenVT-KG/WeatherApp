<template>
  <div @click="closeModal" class="modal" ref="modal">
      <div class="modal-wrap" ref="modalWrap">
          <label for="city-name">Enter Location:</label>
          <i @click="getcity" class="fa-solid fa-location-dot"></i>
          <input type="text" name="city-nanme" placeholder="Search By City Name" v-model="city"/>
          
          <button @click="addCity">Add</button>
      </div>
  </div>
</template>

<script>
import axios from "axios";
import db from "../firebase/config";
export default {
    name: "MoDal",
    props: ['APIkey'], 
    data () {
        return {
            city: "",
        }
    },
  methods: {
    closeModal(e) {
      if (e.target === this.$refs.modal) {
        this.$emit("close-modal");
      }
    },
    async addCity() {
      if (this.city === "") {
        alert("field cannot be empty");
      } else {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=imperial&APPID=${this.APIkey}`
        );
        const data = await res.data;
        db.collection("cities")
          .doc()
          .set({
            city: this.city,
            currentWeather: data,
          })
          .then(() => {
            this.$emit("close-modal");
          });
      }
    },
    getcity(){
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(data =>{
              this.getAddress(data.coords.latitude,data.coords.longitude)
              // console.log(data.coords.latitude);
              // console.log(data.coords.longitude);
            },
            error => {
                console.log(error.message);
            
          }
          )
          ;}else {
            console.log("Your API");
          }
        },
        getAddress(lat, lon){
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2ddd0f11131fc43d59c04e04d1627bf0`)
            .then(response => {
            this.city = response.data.name;
          })
            .catch(error => {
            console.log(error);
          });
        }


  },
};
</script>

<style lang="less" scoped>
.modal {
  z-index: 101;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  label {
    color: #fff;
  }
  .modal-wrap {
    max-width: 500px;
    border-radius: 8px;
    width: 80%;
    padding: 20px;
    background-color: #31363d;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    input {
      color: #fff;
      border: none;
      background-color: transparent;
      border-bottom: 1px solid #fff;
      padding: 6px 4px;
      margin: 10px 0 20px;
      width: 100%;
      &:focus {
        outline: none;
      }
    }
    button {
      background-color: #222325;
      color: #fff;
      padding: 6px 20px;
      border-radius: 8px;
      border: none;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    i{
      color: #fff;
      margin-left: 10px;
    }
    
  }
}
</style>