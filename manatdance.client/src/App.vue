<template>
  <v-app 
    id="app"
  >
    <man-side-bar :connected-to-device="connectedToDevice" />
    <v-app-bar
      app
      clipped-left
      dense
      dark
      flat
      style="-webkit-app-region: drag"
      color="light-blue darken-1"
    >
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">BeAtDance - Attendance Manager</span>
      </v-toolbar-title>

    </v-app-bar>
    <v-main>
      <v-container class="fill-height">
        <v-row
          justify="center"
          align="center"
        >
          <v-col>
            <router-view @connection-established="connectedToDevice = $event" />
            <notifications
              class="mt-6 mr-6"
              group="app"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>



<script lang="ts">
import Vue from "vue";
import SideBar from "@/components/SideBar.vue";

export default Vue.extend({
  data: () => ({
    connectedToDevice: false as boolean
  }),
  components: {
    manSideBar: SideBar,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Lato, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#body {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.clickable {
  -webkit-app-region: no-drag;
  text-transform: none !important;
}

body,
html,
.container,
.sidebar,
.body {
  height: 100%;
  min-height: 100%;
  margin: 0;
}
</style>
