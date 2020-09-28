<template>
  <v-app 
    id="app"
  >
    <man-side-bar :connected-to-device="connectedToDevice" />
    <v-app-bar
      style="-webkit-app-region: drag"
      color="light-blue darken-1"
      app
      clipped-left
      dense
      dark
      flat
    >
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">BeAtDance - Attendance Manager</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        class="clickable window-manipulator elevation-0"
        color="light-blue darken-1"
        @click="minimizeWindow"
      >
        <v-icon>far fa-window-minimize</v-icon>
      </v-btn>

      <v-btn
        class="clickable window-manipulator elevation-0"
        color="light-blue darken-1"
        @click="maximizeWindow"
      >
        <v-icon>far fa-window-maximize</v-icon>
      </v-btn>

      <v-btn
        class="clickable window-manipulator elevation-0"
        color="red darken-3"
        @click="closeWindow"
      >
        <v-icon>fas fa-times</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container
        class="fill-height"
        style="max-width: 100%;"
      >
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

// import { remote } from 'electron';

export default Vue.extend({
  data: () => ({
    connectedToDevice: false as boolean,
    // window: remote.getCurrentWindow(),

    isMaximized: false
  }),
  components: {
    manSideBar: SideBar,
  },
  methods: {
    // closeWindow() {
    //   this.window.close();
    // },
    // maximizeWindow() {
    //   if (this.isMaximized) {
    //     this.window.unmaximize();
    //     this.isMaximized = false;
    //   } else {
    //     this.window.maximize();
    //     this.isMaximized = true;
    //   }
    // },
    // minimizeWindow() {
    //   this.window.minimize();
    // }
  }
});
</script>

<style scoped lang="scss">
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

::v-deep header > div.v-toolbar__content {
  padding-right: 0px !important;
}

::v-deep .window-manipulator {
  border-radius: 0px !important;
  height: 100% !important;
  font-size: 10px !important;

  &:focus {
    outline: 0px;
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
