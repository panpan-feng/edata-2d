<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue"/> -->
    <Canvas2d />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Canvas2d from './components/Canvas2d.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Canvas2d
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
