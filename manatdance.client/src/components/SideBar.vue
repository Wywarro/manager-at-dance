<template>
  <div class="hello">
    <b-nav 
      vertical
      pills 
      class="sidebar"
    >
      <b-nav-item
        v-for="tab in tabs"
        :key="tab"
        :active="tab == currentTab"
        @click="currentTab = tab"
      >{{ tab }}</b-nav-item>
    </b-nav>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    currentTab: "" as string,
    tabs: ["Connect", "Device Info", "Users"] as Array<string>,
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
