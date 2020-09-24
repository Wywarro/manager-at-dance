<template>
  <div>
    {{ users }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import {

  getDeviceUsers,
} from "@/axios_instances/device.api";

export default Vue.extend({
  name: "HelloWorld",
  data: () => ({
    users: [] as Array<unknown>,
  }),
  created() {
    this.getDeviceUsers();
  },
  methods: {
    async getDeviceUsers() {
      const response = await getDeviceUsers();
      this.users = response.data;
    },
  },
});
</script>

