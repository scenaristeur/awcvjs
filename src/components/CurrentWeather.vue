<template>
  <div>
    {{ msg }}
    <b-button @click="add" variant="primary">AddML</b-button> - {{ count }}-
    <br />
    <b-list-group v-if="weather.main">
      <b-list-group-item>Current Temparature: {{weather.main.temp - 273.15}} C</b-list-group-item>
      <b-list-group-item>High: {{weather.main.temp_max - 273.15}} C</b-list-group-item>
      <b-list-group-item>Low: {{weather.main.temp_min - 273.15}} C</b-list-group-item>
      <b-list-group-item>Pressure: {{weather.main.pressure }}mb</b-list-group-item>
      <b-list-group-item>Humidity: {{weather.main.humidity }}%</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>

import { requestsMixin } from "@/mixins/requestsMixin";
import store from "@/store";
import { BListGroup, BListGroupItem, BButton } from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


export default {
  store,
  name: "CurrentWeather",
  mounted() {},
  mixins: [requestsMixin],
  components: {
    BListGroup,
    BListGroupItem,
    BButton
  },
  props: {
    msg: String
  },
  computed: {
    keyword() {
      return this.$store.state.keyword;
    },
    count(){
      console.log(this.$store.state.count)
      return this.$store.state.count
    }
  },
  data() {
    return {
      weather: {}
    };
  },
  watch: {
    async keyword(val) {
      const response = await this.searchWeather(val);
      this.weather = response.data;
    }
  },
  methods: {
    add(){
      console.log("add",9)
      this.$store.commit("add", 9);
    }
  }
};
</script>

<style scoped lang="scss">
@import "./../../node_modules/bootstrap/dist/css/bootstrap.css";
@import "./../../node_modules/bootstrap-vue/dist/bootstrap-vue.css";
</style>
