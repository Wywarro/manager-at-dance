<template>
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
          v-for="item in tableDeviceInfo"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.prop }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script lang="ts">
import Vue from "vue";

import { DeviceInfo } from "@/types/types";

import { getDeviceInfo } from "@/axios_instances/device.api";

export default Vue.extend({
  name: "HelloWorld",
  data: () => ({
    deviceInfo: {
      deviceName: "",
      deviceTime: "",
      macAddress: "",
      networkParams: {
        mask: "",
        gateway: "",
        ip: "",
      },
      platformName: "",
      serialNumber: ""
    } as DeviceInfo,
  }),
  computed: {
    tableDeviceInfo(): Array<object> {
      const { mask, gateway, ip } = this.deviceInfo.networkParams;
      return [
        {
          name: "MAC Address",
          prop: this.deviceInfo.macAddress
        },
        {
          name: "Device Time",
          prop: this.deviceInfo.deviceTime
        },
        {
          name: "Device Name",
          prop: this.deviceInfo.deviceName
        },
        {
          name: "Platform Name",
          prop: this.deviceInfo.platformName
        },
        {
          name: "Serial Number",
          prop: this.deviceInfo.serialNumber
        },
        {
          name: "Mask",
          prop: mask
        },
        {
          name: "Gateway",
          prop: gateway
        },
        {
          name: "IP",
          prop: ip
        },
      ]
    }
  },
  created() {
    this.getDeviceInfo();
  },
  methods: {
    async getDeviceInfo() {
      const response = await getDeviceInfo();
      this.deviceInfo = response.data as DeviceInfo;
    },
  },
});
</script>

