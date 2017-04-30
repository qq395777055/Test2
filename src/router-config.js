import Login from "./components/Login.vue";
import Reg from "./components/Reg.vue";
import Home from "./components/Home.vue";
import Movie from "./components/Movie.vue";
import Music from "./components/Music.vue";

const routes = [
	{path:"/Reg",component:Reg},
	{path:"/Login",component:Login},
	{path:"/Home",component:Home},
	{path:"/Movie",component:Movie},
	{path:"/Music",component:Music},
	{path:'/',redirect:'/Home'}
];

export default routes;