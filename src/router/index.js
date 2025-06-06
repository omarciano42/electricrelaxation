import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import("../views/Home.vue"),
	},
	{
		path: "/about",
		name: "About",
		component: () => import("../views/About.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	linkExactActiveClass: "exact-active",
	linkActiveClass: "active",
});

export default router;
