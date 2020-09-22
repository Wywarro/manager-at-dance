<template>
  <div>
    <man-side-bar :connected-to-device="connectedToDevice" />
    <v-container class="fill-height">
      <v-row
        justify="center"
        align="center"
      >
        <v-col>
          <router-view @connection-established="connectedToDevice = $event"></router-view>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SideBar from "@/components/SideBar.vue";

export default Vue.extend({
  name: "Home",
  components: {
    manSideBar: SideBar,
  },
  data: () => ({
    connectedToDevice: false as boolean
  })
});
</script>
