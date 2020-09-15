<template>
  <div>
    <SideBar />
    <v-container class="fill-height">
      <v-row
        justify="center"
        align="center"
      >
        <v-col>
          <router-view></router-view>
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
    SideBar,
  },
});
</script>
