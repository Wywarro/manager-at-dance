<template>
  <div>
    <v-text-field
      v-model="deviceIp"
      class="clickable"
      label="Device's IP"
      outlined
      dense
      @keydown.enter="connectToDevice"
    ></v-text-field>
    <v-btn
      class="clickable"
      outlined
      block
      color="teal"
      @click="connectToDevice"
    >Connect to Device</v-btn>
    <v-card
      class="mt-10"
      outlined
      height="250"
      :loading="connectLoading"
    >
      <v-card-title>Connection Status</v-card-title>
      <!-- { "isConnected": true, "isEnabled": true, "ping": true, "tcp": 10061, "udp": null } -->
      <v-card-subtitle>{{ connection }}</v-card-subtitle>
      
    </v-card>
    
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { connectToDevice } from "@/axios_instances/device.api";

export default Vue.extend({
  name: "HelloWorld",
  data: () => ({
    deviceIp: "" as string,
    connection: "" as string,

    connectLoading: false as boolean
  }),
  methods: {
    async connectToDevice() {
      this.connectLoading = true;
      try {
        const response = await connectToDevice(this.deviceIp);
        this.connection = response.data;
      } catch (error) {
        this.connection = error;
      } finally {
        this.connectLoading = false;
      }
    },
  },
});
</script>
