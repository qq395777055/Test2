import Vue from 'vue';
import App from './App.vue';

//引入全局样式
import './assets/css/index.css';
import './assets/icon/iconfont/iconfont.css';
import './jsMd/jquery-1.11.2.min.js';
import './jsMd/swiper-3.4.2.min.js'


//引入路由、配置路由
import VueRouter from  'vue-router';
Vue.use(VueRouter)
//引入路由配置文件
import routes from './router-config.js';

//一定要定义路由实例
const router = new VueRouter({
	routes,
	mode:'history'
})

//然后在这里要注册这个路由实例
new Vue({
  el: '#app',
  render: h => h(App),
	router
})
