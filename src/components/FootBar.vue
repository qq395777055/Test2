<template>
	<div class="footer">
		<ul id="list">
			<router-link to="/Home" active-class="active" tag="li">首页</router-link>
			<router-link to="/Music" active-class="active" tag="li">音乐</router-link>
			<router-link to="/Movie" active-class="active" tag="li">电影</router-link>
			<router-link to="/Login" active-class="active" tag="li">我的</router-link>
		</ul>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	@import url("../assets/css/FootBar.css");
</style>