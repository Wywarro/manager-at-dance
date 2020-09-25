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
    <man-connection></man-connection>
    <v-card
      class="mt-10"
      outlined
      height="250"
      :loading="connectLoading"
      :color="color"
    >
      <v-card-title>Connection Status</v-card-title>
      <v-card-subtitle>{{ connection }}</v-card-subtitle>
      
    </v-card>
    
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import Connection from "@/components/Connection.vue";

import { DeviceConnection } from "@/types/types";
import { connectToDevice } from "@/axios_instances/device.api";

const getDefaultData = () => ({
  connection: {
    isConnected: false,
    isEnabled: false,
    ping: false,
    tcp: null,
    udp: null
  } as DeviceConnection,
  color: "" as string
})

export default Vue.extend({
  data: () => ({
    deviceIp: "" as string,
    connectLoading: "false" as string,
    ...getDefaultData()
  }),
  components: {
    manConnection: Connection
  },
  methods: {
    async connectToDevice() {
      if (this.connectLoading == "blue") return;
      this.connectLoading = "blue";
      this.resetData();

      try {
        const response = await connectToDevice(this.deviceIp);
        this.connection = response.data;
        this.color = "teal accent-3";
        this.$emit("connection-established", true);
      } catch (error) {
        this.connection = error.response.data;
        this.color = "red darken-2";
        this.$emit("connection-established", false);
      } finally {
        this.connectLoading = "false";
      }
    },
    resetData() {
      console.log({ ...this.$data, ...getDefaultData() });
      Object.assign(this.$data, { ...this.$data, ...getDefaultData() })
    }
  },
});
</script>

<style scoped lang="scss">
::v-deep, .v-card {
  transition: all 1s linear;
}
</style>
