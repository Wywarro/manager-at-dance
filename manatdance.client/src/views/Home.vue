<template>
  <div>
    <SideBar />
    <DeviceConnector />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SideBar from "@/components/SideBar.vue"; // @ is an alias to /src
import DeviceConnector from "@/components/DeviceConnector.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "Home",
  components: {
    DeviceConnector,
    SideBar,
  },
});
</script>
