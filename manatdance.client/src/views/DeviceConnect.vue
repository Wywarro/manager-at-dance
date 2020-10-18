<template>
  <div>

    <v-row style="max-width: 600px;">
      <v-col
        lg="5"
      >
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">
                  Name
                </th>
                <th class="text-center">
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(value, name) in connection"
                :key="name"
              >
                <td>{{ name }}</td>
                <td>{{ value }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
      <v-col>
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
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { DeviceConnection } from "@/types/types";
import { connectToDevice } from "@/axios_instances/device.api";

const getDefaultData = () => ({
  connection: {
    isConnected: false,
    isEnabled: false,
    ping: false,
    tcp: false,
    udp: false
  } as DeviceConnection,
  color: "#D32F2F" as string,
})

export default Vue.extend({
  data: () => ({
    deviceIp: "" as string,
    connectLoading: "false" as string,
    ...getDefaultData()
  }),
  computed: {
    dangerColor() {
      return "#D32F2F"
    },
    successColor() {
      return "#1DE9B6"
    }
  },
  methods: {
    async connectToDevice() {
      if (this.connectLoading == "blue") return;
      this.connectLoading = "blue";
      this.resetData();

      try {
        const response = await connectToDevice(this.deviceIp);
        this.connection = response.data;
        this.color = this.successColor;
        this.$emit("connection-established", true);
      } catch (error) {
        this.connection = error.response.data;
        this.color = this.dangerColor;
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

.status-card {
  border-left-width: 10px;
}
</style>
