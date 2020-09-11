<template>
  <div>
    {{ users }}
  </div>
</template>
<script lang="ts">
import api from "../axios_instances/flask_api";
import { Options, Vue } from "vue-class-component";

export default class UsersTab extends Vue {
  users = [];

  created() {
    this.getDeviceUsers();
  }

  async getDeviceUsers() {
    try {
      const response = await api.get("/users");
      this.users = response.data;
    } catch (error) {
      alert(error);
    }
  }
}
</script>