<template>
  <v-container>
    <v-navigation-drawer
      v-model="drawer"
      color="teal"
      permanent
      app
      dark
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
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item
          v-for="item in items"
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
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    currentTab: "" as string,
    drawer: true as boolean,
    items: [
      { title: "Connect", icon: "fas fa-plug", link: "/"},
      { title: "Device Info", icon: "fas fa-tablet-alt", link: "/device-info"},
      { title: "Users", icon: "fas fa-users", link: "/users"},
    ] as Array<object>
  }),
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
