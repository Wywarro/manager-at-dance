<template>
  <v-navigation-drawer
    v-model="drawer"
    color="light-blue darken-4"
    permanent
    app
    dark
    clipped
  >
    <v-list
      dense
      nav
      class="py-0"
    >
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>Device Attendance Manager</v-list-item-title>
          <v-list-item-subtitle>Manage your records</v-list-item-subtitle>
          <v-list-item-subtitle>{{ apiTestResponse }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <template v-for="item in items">
        <v-list-item
          v-if="!item.requireConnection ^ connectedToDevice"
          :key="item.title"
          class="clickable text-left active"
          link
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";

import {
  testFlask,
} from "@/axios_instances/device.api";

export default Vue.extend({
  props: {
    connectedToDevice: Boolean
  },
  data: () => ({
    currentTab: "" as string,
    drawer: true as boolean,

    items: [
      { title: "Connect", icon: "fas fa-plug", link: "/", requireConnection: false},
      { title: "Device Info", icon: "fas fa-tablet-alt", link: "/device-info", requireConnection: true},
      { title: "Users", icon: "fas fa-users", link: "/users", requireConnection: true},
    ] as Array<object>,

    apiTestResponse: "" as string,
  }),
  created() {
    this.testFlask();
  },
  methods: {
    async testFlask() {
      const response = await testFlask();
      const { message } = response.data;
      this.apiTestResponse = message;
    },
  }
});
</script>

<style scoped lang="scss">
.sidebar {
  height: 40px;
  position: absolute;
  top: 0;
  left: 0;
  width: 20%;
  background: blue;
  z-index: 2;
}
</style>
