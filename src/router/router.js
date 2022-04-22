import HomePage from "@/pages/HomePage";
import {createRouter, createWebHistory} from "vue-router";
import PostsPage from "@/pages/PostsPage";


const routes = [
	{
		path: '/',
		component: HomePage,
	},
	{
		path: '/posts',
		component: PostsPage,
	},
]

const router = createRouter({
	routes,
	history: createWebHistory(),
});

export default router;

