<template>
  <v-app 
    id="app"
    style="-webkit-app-region: drag"
  >
    <!--  -->
    <v-main>
      <router-view />
      <notifications
        class="mt-6 mr-6"
        group="app"
      />
    </v-main>
  </v-app>
</template>

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
