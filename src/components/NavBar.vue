<template>
	<div class="header">
		<ul class="toplist">
			<li class="my" @click="ch()">我的</li>
			<li class="logo">LOGO</li>
			<li class="search">搜索</li>
		</ul>
		<div id="box" @click="ch2">
			<div class="left-box">
				<div id="user">
					<div class="Head-portrait">头像</div>
					<ul class="user-list">
						<router-link tag="li" to="/Login">登陆</router-link>
						<li><span>|</span></li>
						<router-link tag="li" to="/Reg">注册</router-link>
					</ul>
				</div>
				<ul class="list">
					<li>首页</li>
					<li>魔法定制</li>
					<li>兑换专区</li>
					<li>关于虾想</li>
				</ul>
			</div>	
		</div>
		
	</div>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			ch(){
				$("#box").css("display","block")
				$(".left-box").animate({left:0})
			},
			ch2(){	
				
				$(".left-box").animate({left:"-52%"},function () {
					$("#box").css("display","none")
				})
				
				
			}
			
		}
	}
</script>

<style>
	@import url("../assets/css/NavBar.css");
</style>