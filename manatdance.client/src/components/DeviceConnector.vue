<template>
  <div>
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
.sidebar {
  height: 40px;
  position: absolute;
  top: 0;
  left: 0;
  width: 20%;
  background: blue;
  z-index: 2;
}
</style>
