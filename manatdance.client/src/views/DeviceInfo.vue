<template>
  <div>
    {{ deviceInfo }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { getDeviceInfo } from "@/axios_instances/device.api";

export default Vue.extend({
  name: "HelloWorld",
  data: () => ({
    deviceInfo: {} as Record<string, unknown>,
  }),
  created() {
    this.getDeviceInfo();
  },
  methods: {
    async getDeviceInfo() {
      const response = await getDeviceInfo();
      this.deviceInfo = response.data;
    },
  },
});
</script>

