<template>
<div class="container">
  <div class="row">
    <div class="col-sm">
      <h1>{{ apiTestResponse }}</h1>
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
  </div>
  <div class="row">
      <div class="col-3">
        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <a 
            class="nav-link"
            :class="{ 'active' : tab == currentTab }" 
            role="tab" 
            v-for="tab in tabs" 
            :key="tab"
            @click="currentTab = tab"
          >{{ tab }}</a>
        </div>
      </div>
      <div class="col-9">
        <div class="tab-content">
          <div class="tab-pane fade show active"  role="tabpanel">...</div>
        </div>
      </div>
  </div>
</div>
</template>

<script lang="ts">
import api from "../axios_instances/flask_api";
import { Options, Vue } from "vue-class-component";

export default class DeviceConnector extends Vue {
  apiTestResponse: string = ``;
  connection: string = ``;
  deviceIp: string = ``;

  currentTab: string = ``;

  tabs: Array<string> = ["Users", "Device Info"];

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
      const response = await api.post("/connect", 
        { deviceIp: this.deviceIp }
      );
      this.connection = response.data;
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
