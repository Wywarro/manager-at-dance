<template>
  <div id="app" style="-webkit-app-region: drag">
    <div id="body">
      <router-link to="/">Home</router-link>
    </div>
    <router-view />
    <notifications group="app" />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Lato, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  width: 1200px;
  height: 700px;
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
}
</style>
