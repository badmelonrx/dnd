<template>
  <div id="app">
    <div class="wrapper">
      <nav class="navbar navbar-default">
        <div class="container">
          <a class="navbar-brand">
            Crit-Fail
          </a>
        </div>
      </nav>
    </div>

    <div class="row main">
      <div class="col-sm-3">
      <sidebar/>
      </div>
      <div class="col-sm-9">
      <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from './components/Sidebar'
export default {
  name: 'App',
  components: {'sidebar':Sidebar}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
.main{
  height:100%;
  width:100%;
}
nav{
  margin-bottom: 0px !important;
}
.navbar{
  width: 100%;
}
</style>
