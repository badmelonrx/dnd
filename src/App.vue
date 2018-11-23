<template>
  <div id="app">
        <div class="app-header"><h1 class='nav-title'>Crit-Fail</h1><h3 class='nav-message'>Where you can keep your trash!</h3></div>
        <div class="container">
          <router-view/>
        </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Dosis', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.container{
  padding:10px;
  max-width: initial;
}
.app-header{
  width:100%;
  background-color: black;
  color: white;
  padding: 0px 5px; 
  overflow-wrap: all;
}

.nav-title{
  font-size: 4em;
  display: inline-block;
  padding: 0px 10px;  
}
.nav-message{
  display: inline-block;  
  padding: 0px 5px; 
}
</style>
