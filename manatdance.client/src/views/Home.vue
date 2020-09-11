<template>
  <div class="home">
    <DeviceConnector />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import DeviceConnector from "@/components/DeviceConnector.vue"; // @ is an alias to /src

@Options({
  components: {
    DeviceConnector
  }
})
export default class Home extends Vue {}
</script>
