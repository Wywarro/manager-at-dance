<template>
  <div>
    {{ apiTestResponse }}
    <v-text-field
      v-model="deviceIp"
      class="clickable"
      label="Device's IP"
      outlined
    ></v-text-field>
    <v-btn
      class="clickable"
      outlined
      block
      color="teal"
      @click="connectToDevice"
    >Connect to Device</v-btn>
    {{ connection }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import {
  testFlask,
  connectToDevice,
} from "@/axios_instances/device.api";

export default Vue.extend({
  name: "HelloWorld",
  data: () => ({
    apiTestResponse: "" as string,
    deviceIp: "" as string,
    connection: "" as string,
  }),
  methods: {
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
