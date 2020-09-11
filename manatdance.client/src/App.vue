<template>
  <div id="app" style="-webkit-app-region: drag">
    <div id="body" class="container">
      <div class="row">
        <div class="col-sm">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
}
</style>
