<template>
  <div id="app"> 
    <NavBar></NavBar>
  	<router-view></router-view>
    <FootBar></FootBar>
  </div>
</template>

<script>
	import FootBar from './components/FootBar.vue'
	import NavBar from './components/NavBar.vue'
	import Home from './components/Home.vue'
	
export default {

  components:{
  	FootBar,NavBar
  }
}
</script>

<style>
	b{
		font-size: 30px;
	}
</style>
