<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import {
  testFlask,
  connectToDevice,
  getDeviceInfo,
  getDeviceUsers,
} from "@/axios_instances/device.api";

export default Vue.extend({
  name: "HelloWorld",
  data: () => ({
    users: [] as Array<unknown>,
    deviceInfo: {} as Record<string, unknown>,
    apiTestResponse: "" as string,
    deviceIp: "" as string,
    connection: "" as string,
  }),
  props: {
    msg: String,
  },
  methods: {
    async getDeviceUsers() {
      const response = await getDeviceUsers();
      this.users = response.data;
    },
    async getDeviceInfo() {
      const response = await getDeviceInfo();
      this.deviceInfo = response.data;
    },
    async testFlask() {
      const response = await testFlask();
      const { message } = response.data;
      this.apiTestResponse = message;
    },

    async connectToDevice() {
      const response = await connectToDevice(this.deviceIp);
      this.connection = response.data;
    },
  },
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
