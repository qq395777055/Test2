<template>
	<div class="home flexbox">
		<!--Banne图-->
		<div class="swiper-container">
			    <div class="swiper-wrapper">
			        <!--<div class="swiper-slide">
			        	<img src="../assets/img/p2.jpg"/>
			        </div>-->
			    </div>
			    <!-- 如果需要分页器 -->
			    <div class="swiper-pagination"></div>			    
		</div>
		<!--中间分割线-->
		<div class="Dividing-line">
			<div class="line-left"></div>
			<div class="leng">
				图
			</div>
			<div class="line-right"></div>
		</div>
		<!--分类图片-->
		<div class="kindlist">
			<ul class="kdlist">		
			</ul>
		</div>
		<!--MTS分割线-->
		<div class="MTS">
		</div>
		<!--中间分割线-->
		<div class="Dividing-line">
			<div class="line-left"></div>
			<div class="leng">
				图
			</div>
			<div class="line-right"></div>
		</div>
		<!--新客图请求-->
		<div class="xinke">
			
		</div>
		<!--中间分割线-->
		<div class="Dividing-line">
			<div class="line-left"></div>
			<div class="leng">
				图
			</div>
			<div class="line-right"></div>
		</div>
		<!--见面礼图请求-->
		<div class="jianmian">
			
		</div>
		<!--中间分割线-->
		<div class="Dividing-line">
			<div class="line-left"></div>
			<div class="leng">
				图
			</div>
			<div class="line-right"></div>
		</div>
	<!--底部四个-->
		<div class="bottomlist">
			<ul class="bolist">
				<router-link tag="li" to="/Login"><i class="iconfont icon-10017"></i><p>注册奖励</p></router-link>
				<li><i class="iconfont icon-celiang"></i><p>三个数据量体</p></li>
				<li><i class="iconfont icon-icon"></i><p>7个工作日发货</p></li>
				<li><i class="iconfont icon-jiandao"></i><p>3次免修</p></li>				
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				banner:[]
			}
		},
		mounted(){
			//swiper轮播图
			var mySwiper = new Swiper ('.swiper-container', {
			    direction: 'horizontal',
			    loop: true,
			    autoplay:3000,
			    autoplayDisableOnInteraction:false,
			    observer:true,//修改swiper自己或子元素时，自动初始化swiper
			    observeParents:true,//修改swiper的父元素时，自动初始化swiper
			    // 如果需要分页器
			    pagination: '.swiper-pagination'			    
			  })   
			 //Ajax请求Banner图数据
			var HomeUrl = "http://api.xiaxiang.cn/home/IndexData?guest_token=37df5c14&isloader=true"
			$.ajax({
				type:"get",
				url:HomeUrl,
				async:true,
				
				success(data){
					var ban = data.Banner.Data.BannerItems;
					for (var item of ban ) {
						$(".swiper-wrapper").append('<div class="swiper-slide">'+
			        	'<img src="'+ item.Image +'"/>'+
			        '</div>')
					}
					
				},
				error(err){
					console.log("Banner" + err)
				}
			});
			//Ajax请求分类图片信息
			$.ajax({
				type:"get",
				url:HomeUrl,
				async:true,
				success(data){
					var result = data.Content[0].Data.Content;
					$(".kdlist").append(result)
				},
				error(error){
					console.log("商品分类图片错误"+error)
				}
			});
			//分割线上的文字请求
			$.ajax({
				type:"get",
				url:HomeUrl,
				async:true,
				success(data){
					var result = data.Content[1].Description
					$('.MTS').append('<p>'+ result +'</p>')
				},
				error(error){
					console.log("分割线上的文字请求错误"+error)
				}
			});
			//新客图请求
			$.ajax({
				type:"get",
				url:HomeUrl,
				async:true,
				success(data){
					console.log(data)
					var result = data.Content[1].Data.Content
					$(".xinke").append(result)
				},
				error(error){
					console.log("新客图请求错误"+error)
				}
			});
			//见面礼图请求
			$.ajax({
				type:"get",
				url:HomeUrl,
				async:true,
				success(data){
					var result = data.Content[2].Data.Content
					$(".jianmian").append(result)
				},
				error(error){
					console.log("见面礼图请求错误"+error)
				}
			});
		}
	}
</script>

<style>
	@import url("../assets/css/Home.css");
</style>