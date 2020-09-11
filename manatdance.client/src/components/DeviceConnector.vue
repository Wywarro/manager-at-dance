<template>
<div class="container">
  <div class="row">
    <div class="col-sm">
      <h1>{{ apiTestResponse }}</h1>
      <button 
        type="button" 
        class="btn btn-primary clickable" 
        @click="getDeviceUsers"
      >Get Users</button>
    </div>
    <div class="col-sm">
      <label for="basic-url">Device IP</label>
      <div class="input-group mb-3">
        <input v-model="deviceIp" type="text" class="form-control clickable" id="basic-url" aria-describedby="basic-addon3">
      </div>
      <button 
        type="button" 
        class="btn btn-primary clickable" 
        @click="connectToDevice"
      >Connect to device!</button>
      {{ deviceIp }}
      {{ connection }}
    </div>
    <div class="col-sm">
      One of three columns
    </div>
  </div>
</div>
</template>

<script lang="ts">
import api from "../axios_instances/flask_api";
import { Options, Vue } from "vue-class-component";

export default class DeviceConnector extends Vue {
  apiTestResponse = "";
  users = [];

  connection = "";

  deviceIp = "";

  async created() {
    await this.testFlask();
  }

  async testFlask() {
    try {
      const response = await api.get("/");
      const { message } = response.data;
      this.apiTestResponse = message;
    } catch (error) {
      alert(error);
    }
  }

  async connectToDevice() {
    try {
      console.log(this.deviceIp);
      const response = await api.post("/connect", 
        { "deviceIp": this.deviceIp }
      );
      const { message } = response.data;
      this.connection = message;
    } catch (error) {
      alert(error);
    }
  }

  async getDeviceUsers() {
    try {
      const response = await api.get("/users");
      const { users } = response.data;
      this.users = users;
    } catch (error) {
      alert(error);
    }
  }
}
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
