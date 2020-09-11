<template>
  <div>
    {{ deviceInfo }}
  </div>
</template>
<script lang="ts">
import api from "../axios_instances/flask_api";
import { Options, Vue } from "vue-class-component";

export default class DeviceInfoTab extends Vue {
  deviceInfo: Object = {};

  created() {
    this.getDeviceInfo();
  }

  async getDeviceInfo() {
    try {
      const response = await api.get("/device-info");
      this.deviceInfo = response.data;
    } catch (error) {
      alert(error);
    }
  }
}
</script>