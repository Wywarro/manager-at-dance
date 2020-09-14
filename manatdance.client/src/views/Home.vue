<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <DeviceConnector msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DeviceConnector from "@/components/DeviceConnector.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "Home",
  components: {
    DeviceConnector
  }
});
</script>
