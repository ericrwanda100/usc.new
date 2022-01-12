<template id="app">
<header> 
  <Navigation />
</header>
  
 
  <router-view/>
  
</template>

<script>
import Navigation from './components/Navigation.vue'

export default{
  components: {
    Navigation
  }
}
</script>


<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family: 'montserrat', sans-serif;
}

</style>
