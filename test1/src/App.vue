<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link><br />
      <router-link to="/about">About</router-link><br />
      <router-link to="/emit">emitStudy</router-link><br />
      <router-link to="/vmodel">VmodelStudy</router-link><br />
      <router-link to="/slot">SlotStudy</router-link><br />
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
