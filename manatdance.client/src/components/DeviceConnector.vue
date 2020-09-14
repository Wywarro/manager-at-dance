<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import api from "../axios_instances/flask_api";

export default Vue.extend({
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    async getDeviceUsers() {
      try {
        const response = await api.get("/users");
        this.users = response.data;
      } catch (error) {
        alert(error);
      }
    },
    async getDeviceInfo() {
      try {
        const response = await api.get("/device-info");
        this.deviceInfo = response.data;
      } catch (error) {
        alert(error);
      }
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
